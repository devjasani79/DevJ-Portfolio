"use client";

import { services } from "@/app/lib/data/services";

export default function Services() {
  return (
    <section
      id="services"
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
          03 — Services
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
          What I Build
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              padding: "2rem",
              background: "var(--color-surface)",
              border: "0.5px solid var(--color-border)",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--color-accent)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {service.num}
            </span>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                letterSpacing: "-0.02em",
                margin: "0.75rem 0 0.5rem",
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              {service.description}
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {service.includes.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-accent)",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    →
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
