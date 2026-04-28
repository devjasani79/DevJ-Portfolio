"use client";

import { skillCategories } from "@/app/lib/data/skills";



export default function Skills() {
  return (
    <section
      id="skills"
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
          04 — Technical Stack
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
          Skills
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {skillCategories.map((category) => (
          <div key={category.label}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--color-accent)",
                letterSpacing: "-0.01em",
                marginBottom: "1rem",
                textTransform: "uppercase",
              }}
            >
              {category.label}
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {category.items.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "var(--color-text-secondary)",
                    background: "var(--color-surface)",
                    border: "0.5px solid var(--color-border)",
                    padding: "6px 12px",
                    borderRadius: "4px",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
