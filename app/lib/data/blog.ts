import "server-only";

import {
  Client,
  collectPaginatedAPI,
  isFullDataSource,
  isFullPage,
  isNotionClientError,
  type DataSourceObjectResponse,
  type PageObjectResponse,
  type QueryDataSourceParameters,
} from "@notionhq/client";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  body: string[];
}

export class BlogDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BlogDataError";
  }
}

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const BLOG_SOURCE_ID =
  process.env.NOTION_DATA_SOURCE_ID ?? process.env.NOTION_DATABASE_ID;
let resolvedSourceIdPromise: Promise<string> | undefined;

type BlogFilter = NonNullable<QueryDataSourceParameters["filter"]>;

function requireBlogSourceId() {
  if (!BLOG_SOURCE_ID) {
    throw new BlogDataError(
      "Missing Notion source id. Add NOTION_DATA_SOURCE_ID or NOTION_DATABASE_ID to .env.local."
    );
  }

  return BLOG_SOURCE_ID;
}

function toBlogDataError(error: unknown) {
  if (
    isNotionClientError(error) &&
    error.code === "object_not_found"
  ) {
    return new BlogDataError(
      "Your Notion integration cannot access the configured source. Share the database with the 'DevJ Blogs' integration, or use the correct NOTION_DATA_SOURCE_ID / NOTION_DATABASE_ID."
    );
  }

  if (error instanceof BlogDataError) {
    return error;
  }

  return new BlogDataError("Unable to load blog data from Notion.");
}

async function resolveDataSourceId() {
  const sourceId = requireBlogSourceId();

  try {
    const response = await notion.dataSources.retrieve({
      data_source_id: sourceId,
    });

    if (isFullDataSource(response)) {
      return response.id;
    }
  } catch {
    // Fall through and try resolving from the parent database id.
  }

  const results = await collectPaginatedAPI(notion.search, {
    filter: {
      property: "object",
      value: "data_source",
    },
    page_size: 100,
  });

  const match = results
    .filter(isFullDataSource)
    .find((entry) => matchesSource(entry, sourceId));

  if (!match) {
    throw new BlogDataError(
      "Unable to resolve a Notion data source from the configured env value. If you stored a database id, make sure the database is shared with the integration. If you stored a data source id, prefer NOTION_DATA_SOURCE_ID."
    );
  }

  return match.id;
}

async function getResolvedSourceId() {
  if (!resolvedSourceIdPromise) {
    resolvedSourceIdPromise = resolveDataSourceId();
  }

  return resolvedSourceIdPromise;
}

function matchesSource(entry: DataSourceObjectResponse, sourceId: string) {
  const parentDatabaseId =
    "database_id" in entry.parent ? entry.parent.database_id : undefined;
  const databaseParentId =
    "database_id" in entry.database_parent
      ? entry.database_parent.database_id
      : undefined;

  return (
    entry.id === sourceId ||
    parentDatabaseId === sourceId ||
    databaseParentId === sourceId
  );
}

function plainText(items: Array<{ plain_text: string }> = []) {
  return items.map((item) => item.plain_text).join("");
}

function getTitleProperty(page: PageObjectResponse, name: string) {
  const property = page.properties[name];
  return property?.type === "title" ? plainText(property.title) : "";
}

function getRichTextProperty(page: PageObjectResponse, name: string) {
  const property = page.properties[name];
  return property?.type === "rich_text" ? plainText(property.rich_text) : "";
}

function getCheckboxProperty(page: PageObjectResponse, name: string) {
  const property = page.properties[name];
  return property?.type === "checkbox" ? property.checkbox : false;
}

function getDateProperty(page: PageObjectResponse, name: string) {
  const property = page.properties[name];
  return property?.type === "date" ? property.date?.start ?? "" : "";
}

function getMultiSelectProperty(page: PageObjectResponse, name: string) {
  const property = page.properties[name];
  return property?.type === "multi_select"
    ? property.multi_select.map((item) => item.name)
    : [];
}

function splitBody(content: string) {
  return content
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function estimateReadTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function mapPageToPost(page: PageObjectResponse): BlogPost {
  const title = getTitleProperty(page, "Title");
  const slug = getRichTextProperty(page, "Slug");
  const date = getDateProperty(page, "Date");
  const excerpt = getRichTextProperty(page, "Excerpt");
  const tags = getMultiSelectProperty(page, "Tags");
  const content = getRichTextProperty(page, "Content");
  const body = splitBody(content);
  const readTime = estimateReadTime([title, excerpt, content].join(" "));

  return {
    id: page.id,
    title,
    slug,
    date,
    excerpt,
    tags,
    readTime,
    body,
  };
}

async function queryPublishedPages(filter?: BlogFilter) {
  const sourceId = await getResolvedSourceId();
  const baseQuery = {
    filter: filter ?? {
      property: "Published",
      checkbox: { equals: true },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending" as const,
      },
    ],
    page_size: 100,
  };

  try {
    const response = await notion.dataSources.query({
      data_source_id: sourceId,
      ...baseQuery,
    });

    return response.results.filter(isFullPage);
  } catch (error) {
    resolvedSourceIdPromise = undefined;
    throw toBlogDataError(error);
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const pages = await queryPublishedPages();

  return pages
    .filter((page) => getCheckboxProperty(page, "Published"))
    .map(mapPageToPost)
    .filter((post) => post.title && post.slug);
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  const pages = await queryPublishedPages({
    and: [
      {
        property: "Published",
        checkbox: { equals: true },
      },
      {
        property: "Slug",
        rich_text: { equals: slug },
      },
    ],
  });

  const page = pages.find((entry) => getRichTextProperty(entry, "Slug") === slug);

  return page ? mapPageToPost(page) : undefined;
}
