import "server-only";

import {
  getBlogPostBySlug,
  getBlogPosts,
  type BlogPost,
} from "@/app/lib/data/blog";

export type { BlogPost } from "@/app/lib/data/blog";

export async function getAllPosts(): Promise<BlogPost[]> {
  return getBlogPosts();
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return (await getBlogPostBySlug(slug)) ?? null;
}
