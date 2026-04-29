"use client";

import { experience } from "@/app/lib/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
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
          05 — Experience
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
          Work History
        </h2>
      </div>

      <div style={{ maxWidth: "800px" }}>
        {experience.map((exp, i) => (
          <div
            key={exp.id}
            style={{
              paddingBottom: "3rem",
              borderBottom:
                i !== experience.length - 1
                  ? "0.5px solid var(--color-border)"
                  : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {exp.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "var(--color-accent)",
                    fontWeight: 500,
                  }}
                >
                  {exp.company}
                </p>
              </div>

              <div
                style={{
                  textAlign: "right",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--color-text-secondary)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {exp.duration}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--color-text-tertiary)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {exp.location}
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {exp.description.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-border)",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    •
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
