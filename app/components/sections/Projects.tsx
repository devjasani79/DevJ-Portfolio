"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/app/lib/data/projects";

gsap.registerPlugin(ScrollTrigger);

const CARD_WIDTH = 420;
const GAP = 24;

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [modal, setModal] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    gsap.set(track, { x: 0 });

    gsap.from(track.querySelectorAll(".card"), {
      scrollTrigger: { trigger: section, start: "top 80%" },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.out",
    });

    const totalWidth = projects.length * (CARD_WIDTH + GAP);
    gsap.to(track, {
      x: -totalWidth,
      duration: projects.length * 3,
      ease: "none",
      repeat: -1,
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      style={{ padding: "8rem 0 5rem", overflow: "hidden" }}
    >
      <div
        style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)", marginBottom: "3rem" }}
      >
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
          02 â€” Selected Work
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          Projects
        </h2>
      </div>

      <div
        style={{
          overflow: "hidden",
          position: "relative",
          padding: "0 0 2rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to right, var(--color-bg), transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to left, var(--color-bg), transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: `${GAP}px`,
            padding: `24px clamp(1.5rem, 5vw, 5rem)`,
            width: "max-content",
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <Card
              key={`${project.id}-${index}`}
              project={project}
              onClick={() => setModal(project)}
            />
          ))}
        </div>
      </div>

      {modal && <Modal project={modal} onClose={() => setModal(null)} />}
    </section>
  );
}

function Card({
  project,
  onClick,
}: {
  project: (typeof projects)[number];
  onClick: () => void;
}) {
  const [showImg, setShowImg] = useState(false);

  return (
    <div
      className="card"
      onClick={onClick}
      onMouseEnter={() => setShowImg(true)}
      onMouseLeave={() => setShowImg(false)}
      data-cursor="view"
      style={{
        width: CARD_WIDTH,
        flexShrink: 0,
        background: "var(--color-surface)",
        border: "0.5px solid var(--color-border)",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "none",
      }}
    >
      <div
        style={{
          height: 240,
          position: "relative",
          background: `linear-gradient(135deg, ${project.accent} 0%, #0C0B09 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            fontSize: "7rem",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            color: "rgba(242,238,230,0.07)",
            letterSpacing: "-0.04em",
          }}
        >
          {project.num}
        </span>
        {showImg && project.image && (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="420px"
            unoptimized
            style={{
              objectFit: "cover",
              animation: "fadeIn 0.4s ease",
            }}
          />
        )}
      </div>

      <div style={{ padding: "1.25rem 1.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--color-text-tertiary)",
              letterSpacing: "0.1em",
            }}
          >
            {project.num}
          </span>
          {project.live && (
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--color-accent)",
              }}
            />
          )}
        </div>

        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.4rem",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "0.3rem",
          }}
        >
          {project.name}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            color: "var(--color-text-secondary)",
            lineHeight: 1.5,
            marginBottom: "0.75rem",
          }}
        >
          {project.tagline}
        </p>

        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
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
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function Modal({
  project,
  onClose,
}: {
  project: (typeof projects)[number];
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(12,11,9,0.92)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--color-surface)",
          border: "0.5px solid var(--color-border)",
          borderRadius: "12px",
          width: "100%",
          maxWidth: 680,
          maxHeight: "88vh",
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        <div
          style={{
            height: 180,
            background: `linear-gradient(135deg, ${project.accent} 0%, #0C0B09 100%)`,
            borderRadius: "12px 12px 0 0",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "7rem",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "rgba(242,238,230,0.06)",
              letterSpacing: "-0.04em",
            }}
          >
            {project.num}
          </span>
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 680px"
              unoptimized
              style={{ objectFit: "cover" }}
            />
          )}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "rgba(12,11,9,0.75)",
              border: "0.5px solid var(--color-border)",
              color: "var(--color-text-primary)",
              fontSize: "18px",
              cursor: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            ×
          </button>
        </div>

        <div style={{ padding: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "1.25rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--color-text-tertiary)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                }}
              >
                {project.num} â€” Project
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  letterSpacing: "-0.03em",
                }}
              >
                {project.name}
              </h2>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Code
                </a>
              )}
            </div>
          </div>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
            }}
          >
            {project.description}
          </p>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.08em",
                  padding: "4px 8px",
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
        </div>
      </div>
    </div>
  );
}

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "11px",
  letterSpacing: "0.1em",
  color: "var(--color-bg)",
  background: "var(--color-text-primary)",
  padding: "10px 14px",
  borderRadius: "4px",
  textDecoration: "none",
  textTransform: "uppercase",
};
