"use client";

import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && message) {
      window.location.href = `mailto:devjasani79@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(
        `Email: ${email}\n\n${message}`
      )}`;
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setMessage("");
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "8rem clamp(1.5rem, 5vw, 5rem)",
        borderTop: "0.5px solid var(--color-border)",
      }}
    >
      <div style={{ marginBottom: "3rem", maxWidth: "600px" }}>
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
          07 â€” Get In Touch
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
          }}
        >
          Let&apos;s Build Something
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            color: "var(--color-text-secondary)",
            lineHeight: 1.8,
          }}
        >
          Have a project in mind? Let&apos;s talk. Whether it&apos;s full-stack
          development, AI integration, or just a conversation about tech â€” I
          am always open to interesting work.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <div>
          <label
            htmlFor="email"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "var(--color-text-secondary)",
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              background: "var(--color-surface)",
              border: "0.5px solid var(--color-border)",
              borderRadius: "4px",
              color: "var(--color-text-primary)",
              outline: "none",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "var(--color-text-secondary)",
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Tell me about your project..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            style={{
              width: "100%",
              padding: "10px 12px",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              background: "var(--color-surface)",
              border: "0.5px solid var(--color-border)",
              borderRadius: "4px",
              color: "var(--color-text-primary)",
              outline: "none",
              resize: "vertical",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <button
            type="submit"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.1em",
              color: "var(--color-bg)",
              background: "var(--color-text-primary)",
              border: "none",
              padding: "12px 24px",
              borderRadius: "4px",
              cursor: "pointer",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Send
          </button>

          {submitted && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--color-accent)",
                animation: "fadeOut 1s ease 0.5s forwards",
              }}
            >
              Sent âœ“
            </span>
          )}
        </div>
      </form>

      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          marginTop: "3rem",
          paddingTop: "3rem",
          borderTop: "0.5px solid var(--color-border)",
          maxWidth: "600px",
        }}
      >
        <a
          href="mailto:devjasani79@gmail.com"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "var(--color-text-secondary)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Email
        </a>

        <a
          href="https://linkedin.com/in/devjasani79"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "var(--color-text-secondary)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/devjasani79"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "var(--color-text-secondary)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
