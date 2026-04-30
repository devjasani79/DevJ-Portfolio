import Link from "next/link";
import { getAllPosts, type BlogPost } from "@/app/lib/notion-utils";

export const revalidate = 3600; // ISR: revalidate every hour

export default async function BlogPage() {
  let posts: BlogPost[] = [];

  try {
    posts = await getAllPosts();
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

  return (
    <main style={{ padding: "8rem clamp(1.5rem, 5vw, 5rem)" }}>
      <div style={{ marginBottom: "3rem" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--color-text-tertiary)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          Writing
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.03em",
          }}
        >
          Blog
        </h1>
      </div>

      <div style={{ maxWidth: "800px" }}>
        {posts.length === 0 ? (
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--color-text-secondary)",
            }}
          >
            No posts yet. Check back soon.
          </p>
        ) : (
          posts.map((post: BlogPost) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                style={{
                  padding: "2rem 0",
                  borderBottom: "0.5px solid var(--color-border)",
                  cursor: "pointer",
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.7";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {post.title}
                  </h2>
                  <time
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--color-text-tertiary)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                  }}
                >
                  {post.excerpt}
                </p>

                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        letterSpacing: "0.08em",
                        padding: "3px 8px",
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
              </article>
            </Link>
          ))
        )}
      </div>

      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: "2rem",
          fontFamily: "var(--font-body)",
          fontSize: "13px",
          color: "var(--color-text-secondary)",
          textDecoration: "none",
        }}
      >
        ← Back to home
      </Link>
    </main>
  );
}
