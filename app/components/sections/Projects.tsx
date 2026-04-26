"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  num: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  live: string | null;
  github: string | null;
  image: string | null;
  accent: string;
}

const projects: Project[] = [
  {
    id: 1,
    num: "01",
    name: "GoogleDev Drive",
    tagline: "AI-powered cloud storage for developers",
    description:
      "Secure cloud storage platform with an integrated AI assistant that can read, analyze, and answer questions about any uploaded file — PDFs, images, documents. Built with per-user ACL isolation, real-time storage tracking, and Groq-powered vision models.",
    tags: ["Next.js", "TypeScript", "Appwrite", "Groq", "AI"],
    live: "https://googledev-drive.vercel.app",
    github: null,
    image: "/images/projects/googledev-drive.png",
    accent: "#1a3a2a",
  },
  {
    id: 2,
    num: "02",
    name: "SmarAnandh",
    tagline: "Digital elder care companion for Indian families",
    description:
      "Dual-mode caregiving app built for 140M+ Indian seniors separated from family. Guardian dashboard for remote care management. Senior interface with 80px touch targets, Hinglish labels, and one-action-per-screen design. Medication tracking, SOS, joy configuration.",
    tags: ["React", "TypeScript", "Supabase", "Framer Motion", "PostgreSQL"],
    live: null,
    github: null,
    image: "/images/projects/smaranandh.png",
    accent: "#2a1a0a",
  },
  {
    id: 3,
    num: "03",
    name: "WhatsUpDev",
    tagline: "Real-time full-stack chat application",
    description:
      "Full-stack messaging platform with real-time delivery via Socket.IO. One-on-one and group chats, multimedia support, read receipts, typing indicators, Google OAuth, and vCard contact import. JWT-authenticated with bcrypt security.",
    tags: ["React", "Node.js", "Socket.IO", "MongoDB", "JWT"],
    live: "https://whats-up-dev.vercel.app",
    github: "https://github.com/devjasani79/WhatsUpDev",
    image: "/images/projects/whatsupdev.png",
    accent: "#0a1a2a",
  },
  {
    id: 4,
    num: "04",
    name: "Freelancer Marketplace",
    tagline: "Full-stack platform connecting clients and freelancers",
    description:
      "End-to-end marketplace with gig creation, purchasing flow, role-based access control, real-time messaging via WebSockets, and ImageKit-optimized media delivery. Supports Client, Freelancer, and Admin roles with Google OAuth.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO", "Passport.js"],
    live: null,
    github: null,
    image: "/images/projects/freelancer.png",
    accent: "#1a0a2a",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const track = trackRef.current;
    if (!section || !heading || !track) return;

    // Heading reveal
    gsap.from(heading, {
      scrollTrigger: {
        trigger: heading,
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Cards stagger reveal
    const cards = track.querySelectorAll(".project-card");
    gsap.from(cards, {
      scrollTrigger: {
        trigger: track,
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const openProject = (project: Project) => {
    setActiveProject(project);
  };

  const closeProject = () => {
    setActiveProject(null);
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      style={{
        padding: "8rem 0 6rem",
        overflow: "hidden",
      }}
    >
      {/* Section heading */}
      <div
        ref={headingRef}
        style={{
          padding: "0 clamp(1.5rem, 5vw, 5rem)",
          marginBottom: "3rem",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
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
            02 — Selected Work
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

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "var(--color-text-secondary)",
            maxWidth: "280px",
            lineHeight: 1.7,
            textAlign: "right",
          }}
        >
          A selection of work across full-stack, AI, and product engineering.
        </p>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "1.5rem",
          padding: "0 clamp(1.5rem, 5vw, 5rem)",
          overflowX: "auto",
          overflowY: "visible",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingBottom: "2rem",
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => openProject(project)}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div
        style={{
          padding: "1rem clamp(1.5rem, 5vw, 5rem) 0",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "1px",
            background: "var(--color-border)",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--color-text-tertiary)",
            letterSpacing: "0.1em",
          }}
        >
          DRAG TO EXPLORE
        </span>
      </div>

      {/* Overlay */}
      {activeProject && (
        <ProjectOverlay project={activeProject} onClose={closeProject} />
      )}

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}

// ─── Project Card ────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!imageRef.current || !infoRef.current) return;
    gsap.to(imageRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 0.6,
      ease: "power3.out",
    });
    gsap.to(infoRef.current, {
      y: -4,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!imageRef.current || !infoRef.current) return;
    gsap.to(imageRef.current, {
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 0.5,
      ease: "power3.inOut",
    });
    gsap.to(infoRef.current, {
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      className="project-card"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor="view"
      style={{
        flexShrink: 0,
        width: "clamp(300px, 38vw, 480px)",
        scrollSnapAlign: "start",
        background: "var(--color-surface)",
        border: "0.5px solid var(--color-border)",
        borderRadius: "8px",
        overflow: "hidden",
        cursor: "none",
        position: "relative",
      }}
    >
      {/* Image area with clip-path reveal */}
      <div
        style={{
          position: "relative",
          height: "220px",
          background: project.accent,
          overflow: "hidden",
        }}
      >
        {/* Placeholder gradient — replace with real image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${project.accent} 0%, #0C0B09 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 700,
              color: "rgba(242,238,230,0.08)",
              letterSpacing: "-0.04em",
            }}
          >
            {project.num}
          </span>
        </div>

        {/* Real image — shows when file exists */}
        <div
          ref={imageRef}
          style={{
            position: "absolute",
            inset: 0,
            clipPath: "inset(0% 0% 100% 0%)",
          }}
        >
          <img
            src={project.image || ""}
            alt={project.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      </div>

      {/* Info */}
      <div
        ref={infoRef}
        style={{
          padding: "1.25rem 1.5rem 1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--color-accent)",
              letterSpacing: "0.1em",
            }}
          >
            VIEW →
          </span>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.02em",
            marginBottom: "0.4rem",
            lineHeight: 1.1,
          }}
        >
          {project.name}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            color: "var(--color-text-secondary)",
            lineHeight: 1.6,
            marginBottom: "1rem",
          }}
        >
          {project.tagline}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {project.tags.slice(0, 4).map((tag) => (
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
    </div>
  );
}

// ─── Project Overlay ─────────────────────────────────────────────────────────

function ProjectOverlay({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) return;

    gsap.fromTo(
      overlay,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    gsap.fromTo(
      panel,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.1 }
    );
  }, []);

  const handleClose = () => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) return;

    gsap.to(panel, { y: 40, opacity: 0, duration: 0.3, ease: "power2.in" });
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      delay: 0.1,
      onComplete: onClose,
    });
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(12,11,9,0.9)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(1rem, 4vw, 3rem)",
      }}
    >
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--color-surface)",
          border: "0.5px solid var(--color-border)",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "720px",
          maxHeight: "88vh",
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        {/* Header image */}
        <div
          style={{
            height: "200px",
            background: project.accent,
            borderRadius: "12px 12px 0 0",
            position: "relative",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(135deg, ${project.accent} 0%, #0C0B09 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "8rem",
                fontWeight: 700,
                color: "rgba(242,238,230,0.06)",
                letterSpacing: "-0.04em",
              }}
            >
              {project.num}
            </span>
          </div>

          <img
            src={project.image || ""}
            alt={project.name}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />

          {/* Close button */}
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(12,11,9,0.7)",
              border: "0.5px solid var(--color-border)",
              color: "var(--color-text-primary)",
              fontSize: "16px",
              cursor: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
            }}
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "2rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: "1rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--color-text-tertiary)",
                  letterSpacing: "0.12em",
                  marginBottom: "0.4rem",
                }}
              >
                {project.num} — PROJECT
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {project.name}
              </h2>
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: "10px" }}>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    color: "var(--color-bg)",
                    background: "var(--color-accent)",
                    padding: "8px 16px",
                    borderRadius: "2px",
                    textDecoration: "none",
                    textTransform: "uppercase",
                  }}
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    color: "var(--color-text-primary)",
                    background: "transparent",
                    padding: "8px 16px",
                    borderRadius: "2px",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    border: "0.5px solid var(--color-border)",
                  }}
                >
                  GitHub
                </a>
              )}
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: "0.5px",
              background: "var(--color-border)",
              marginBottom: "1.5rem",
            }}
          />

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--color-text-secondary)",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            {project.description}
          </p>

          {/* Stack */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--color-text-tertiary)",
              letterSpacing: "0.12em",
              marginBottom: "0.75rem",
              textTransform: "uppercase",
            }}
          >
            Stack
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.08em",
                  padding: "5px 12px",
                  borderRadius: "2px",
                  border: "0.5px solid var(--color-border)",
                  color: "var(--color-text-secondary)",
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