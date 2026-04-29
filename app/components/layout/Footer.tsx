"use client";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "3rem clamp(1.5rem, 5vw, 5rem)",
        borderTop: "0.5px solid var(--color-border)",
        marginTop: "4rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "16px",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            DEVJ.
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "var(--color-text-tertiary)",
              marginTop: "0.25rem",
            }}
          >
            Full Stack Developer & AI Enthusiast
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <a
            href="#work"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
            }}
          >
            Work
          </a>
          <a
            href="#about"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
            }}
          >
            About
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
            }}
          >
            Contact
          </a>
          <a
            href="https://github.com/devjasani79"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
            }}
          >
            GitHub
          </a>
        </div>
      </div>

      <div
        style={{
          height: "0.5px",
          background: "var(--color-border)",
          margin: "2rem 0",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--color-text-tertiary)",
            letterSpacing: "0.08em",
          }}
        >
          © 2025 Dev Jasani. All rights reserved.
        </p>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--color-text-tertiary)",
            letterSpacing: "0.08em",
          }}
        >
          Designed & built with precision. Deployed on Vercel.
        </p>
      </div>
    </footer>
  );
}