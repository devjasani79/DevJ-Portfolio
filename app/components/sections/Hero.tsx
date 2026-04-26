"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextScramble } from "@/app/lib/textScramble";

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const name = nameRef.current;
    const role = roleRef.current;
    const tagline = taglineRef.current;
    const cta = ctaRef.current;
    const scroll = scrollRef.current;
    const line = lineRef.current;

    if (!name || !role || !tagline || !cta || !scroll || !line) return;

    // Set everything invisible before animating
    gsap.set([role, tagline, cta, scroll, line], { opacity: 0, y: 24 });

    // TextScramble on name, then stagger the rest in
    const scrambler = new TextScramble(name);

    const tl = gsap.timeline({ delay: 0.3 });

    // Step 1: scramble the name
    tl.add(() => {
      scrambler.setText("DEVJ").then(() => {
        // Step 2: after name resolves, stagger everything else
        gsap.timeline()
          .to(line, {
            opacity: 1,
            scaleX: 1,
            duration: 0.8,
            ease: "power3.out",
          })
          .to(role, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          }, "-=0.4")
          .to(tagline, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          }, "-=0.5")
          .to(cta, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          }, "-=0.5")
          .to(scroll, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          }, "-=0.3");
      });
    });

    // Magnetic effect on CTA button
    const btn = cta.querySelector("[data-magnetic]");
    if (btn) {
      btn.addEventListener("mousemove", (e) => {
        const rect = (btn as HTMLElement).getBoundingClientRect();
        const mx = (e as MouseEvent).clientX - rect.left - rect.width / 2;
        const my = (e as MouseEvent).clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
          x: mx * 0.3,
          y: my * 0.3,
          duration: 0.4,
          ease: "power2.out",
        });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.4)",
        });
      });
    }
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 clamp(1.5rem, 5vw, 5rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Location + status pill — top right */}
      <div
        style={{
          position: "absolute",
          top: "2rem",
          right: "clamp(1.5rem, 5vw, 5rem)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "var(--color-accent)",
            display: "inline-block",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--color-text-tertiary)",
            letterSpacing: "0.08em",
          }}
        >
          PUNE, IN — OPEN TO WORK
        </span>
      </div>

      {/* Main name — oversized, bleeds right */}
      <div style={{ overflow: "hidden", marginBottom: "1rem" }}>
        <h1
          ref={nameRef}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(5rem, 18vw, 18vw)",
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            color: "var(--color-text-primary)",
            whiteSpace: "nowrap",
            transform: "translateX(-0.03em)", // optical alignment
          }}
        >
          ____
        </h1>
      </div>

      {/* Divider line */}
      <div
        ref={lineRef}
        style={{
          width: "100%",
          height: "0.5px",
          background: "var(--color-border)",
          marginBottom: "1.5rem",
          transformOrigin: "left",
          transform: "scaleX(1)",
        }}
      />

      {/* Bottom row — role left, tagline right */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginBottom: "3rem",
        }}
      >
        <p
          ref={roleRef}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(10px, 1.1vw, 13px)",
            color: "var(--color-accent)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Full-Stack Developer · AI Systems
        </p>

        <p
          ref={taglineRef}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(13px, 1.2vw, 15px)",
            color: "var(--color-text-secondary)",
            maxWidth: "380px",
            lineHeight: 1.7,
            textAlign: "right",
          }}
        >
          Building systems that scale. Precision in every layer of the stack.
        </p>
      </div>

      {/* CTA */}
      <div ref={ctaRef}>
        <button
          data-magnetic
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            letterSpacing: "0.12em",
            color: "var(--color-bg)",
            background: "var(--color-text-primary)",
            border: "none",
            padding: "14px 32px",
            borderRadius: "2px",
            textTransform: "uppercase",
            cursor: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            transition: "background 0.2s",
          }}
        >
          View Work
          <span style={{ fontSize: "14px" }}>↓</span>
        </button>
      </div>

      {/* Scroll indicator — bottom */}
      <div
        ref={scrollRef}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "clamp(1.5rem, 5vw, 5rem)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "var(--color-border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              background: "var(--color-text-secondary)",
              animation: "scrollLine 2s ease-in-out infinite",
            }}
          />
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--color-text-tertiary)",
            letterSpacing: "0.1em",
            writingMode: "vertical-rl",
          }}
        >
          SCROLL
        </span>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        @keyframes scrollLine {
          0% { height: 0%; top: 0; }
          50% { height: 100%; top: 0; }
          100% { height: 0%; top: 100%; }
        }
      `}</style>
    </section>
  );
}