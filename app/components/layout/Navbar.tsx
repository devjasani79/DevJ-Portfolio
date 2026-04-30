"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: "Work", href: "#work" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.from(nav, {
      y: -80,
      opacity: 0,
      duration: 1,
      delay: 2.2,
      ease: "power3.out",
    });

    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current && y > 80) {
        gsap.to(nav, { y: -80, duration: 0.4, ease: "power2.in" });
      } else {
        gsap.to(nav, { y: 0, duration: 0.5, ease: "power3.out" });
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.5rem clamp(1.5rem, 5vw, 5rem)",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "18px",
          fontWeight: 700,
          color: "var(--color-text-primary)",
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        DEVJ<span style={{ color: "var(--color-accent)" }}>.</span>
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
        {links.map((link) =>
          link.href.startsWith("/") ? (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.1em",
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </Link>
          ) : (
            <button
              key={link.label}
              onClick={() => scroll(link.href)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.1em",
                color: "var(--color-text-secondary)",
                background: "none",
                border: "none",
                cursor: "none",
                textTransform: "uppercase",
                padding: 0,
              }}
            >
              {link.label}
            </button>
          )
        )}

        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.1em",
            color: "var(--color-bg)",
            background: "var(--color-text-primary)",
            padding: "8px 18px",
            borderRadius: "2px",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
