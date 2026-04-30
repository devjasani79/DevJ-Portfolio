export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "8rem clamp(1.5rem, 5vw, 5rem)",
        borderTop: "0.5px solid var(--color-border)",
      }}
    >
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
          06 - About
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.03em",
          }}
        >
          Who I Am
        </h2>
      </div>

      <div
        style={{
          maxWidth: "720px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            color: "var(--color-text-secondary)",
            lineHeight: 1.8,
          }}
        >
          I&apos;m a software engineer from Pune with a passion for building
          scalable, production-grade applications. I specialize in full-stack
          development - crafting clean backend systems with Node.js and Express,
          intuitive React frontends, and robust PostgreSQL databases. I obsess
          over performance, clean architecture, and code that actually lasts.
        </p>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            color: "var(--color-text-secondary)",
            lineHeight: 1.8,
          }}
        >
          Lately, I&apos;ve been diving deep into generative AI and agentic
          systems - exploring LLM integration, RAG pipelines, and autonomous
          workflows. I believe AI isn&apos;t a magic button; it&apos;s a tool
          that requires thoughtful engineering to build real value. I&apos;m
          actively working on projects that bridge production backend
          engineering with cutting-edge AI capability.
        </p>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            color: "var(--color-text-secondary)",
            lineHeight: 1.8,
          }}
        >
          Outside of code, I&apos;m into dance - hip-hop, Bollywood, freestyle.
          The same precision and discipline I bring to engineering, I bring to
          movement. Both require understanding rhythm, spatial awareness, and
          practicing until it feels natural.
        </p>

        <blockquote
          style={{
            borderLeft: "3px solid var(--color-accent)",
            paddingLeft: "1.5rem",
            marginTop: "1rem",
            fontStyle: "italic",
            color: "var(--color-text-secondary)",
            fontFamily: "var(--font-body)",
            fontSize: "15px",
          }}
        >
          &ldquo;I build systems by day. I move to rhythms at night. Both
          require the same thing: precision, discipline, and the willingness to
          iterate until it&apos;s right.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
