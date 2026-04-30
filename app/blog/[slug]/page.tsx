import Link from "next/link";
import {
  getPostBySlug,
  getAllPosts,
  type BlogPost,
} from "@/app/lib/notion-utils";
import { notFound } from "next/navigation";

export const revalidate = 3600; // ISR

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return posts.map((post: BlogPost) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ padding: "4rem clamp(1.5rem, 5vw, 5rem)" }}>
      <Link
        href="/blog"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "13px",
          color: "var(--color-text-secondary)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        ← Back to blog
      </Link>

      <article style={{ maxWidth: "720px", marginTop: "2rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.03em",
              marginBottom: "0.75rem",
              lineHeight: 1.2,
            }}
          >
            {post.title}
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <time
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--color-text-tertiary)",
              }}
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>

            {post.tags.length > 0 && (
              <div style={{ display: "flex", gap: "6px" }}>
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.08em",
                      padding: "2px 6px",
                      borderRadius: "2px",
                      border: "0.5px solid var(--color-border)",
                      color: "var(--color-text-tertiary)",
                      textTransform: "uppercase",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            color: "var(--color-text-secondary)",
            lineHeight: 1.8,
          }}
        >
          <p
            style={{
              fontStyle: "italic",
              borderLeft: "3px solid var(--color-accent)",
              paddingLeft: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            {post.excerpt}
          </p>

          {/* Post content from Notion renders here */}
          <div
            style={{
              color: "var(--color-text-tertiary)",
              textAlign: "center",
              padding: "2rem",
              fontSize: "14px",
            }}
          >
            Post content integration coming soon.
            <br />
            <small>
              (Notion blocks rendering requires notion-to-md setup)
            </small>
          </div>
        </div>
      </article>
    </main>
  );
}
