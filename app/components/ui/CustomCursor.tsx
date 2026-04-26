"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type CursorState = "default" | "hover" | "view" | "drag";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const crossRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<CursorState>("default");

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const view = viewRef.current;

    if (!dot || !ring || !view) return;

    // Smooth cursor follow using quickTo for performance
    const xTo = gsap.quickTo([dot, ring, view], "x", {
      duration: 0.4,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo([dot, ring, view], "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    // Dot follows cursor with less lag
    const xDot = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3.out" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xTo(e.clientX);
      yTo(e.clientY);
    };

    // State: hover — on any link or button
    const onEnterHover = () => setState("hover");
    const onLeaveHover = () => setState("default");

    // State: view — on project cards
    const onEnterView = () => setState("view");
    const onLeaveView = () => setState("default");

    // State: drag
    const onMouseDown = () => {
      if (stateRef.current !== "view") setState("drag");
    };
    const onMouseUp = () => setState("default");

    function setState(state: CursorState) {
      stateRef.current = state;
      const isHover = state === "hover";
      const isView = state === "view";
      const isDrag = state === "drag";

      gsap.to(dot, {
        scale: isDrag ? 0.5 : isHover ? 0 : 1,
        opacity: isView ? 0 : 1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(ring, {
        scale: isHover ? 1.8 : isDrag ? 0 : 1,
        opacity: isView || isDrag ? 0 : isHover ? 1 : 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(view, {
        scale: isView ? 1 : 0,
        opacity: isView ? 1 : 0,
        duration: 0.4,
        ease: "back.out(1.7)",
      });

      if (crossRef.current) {
        gsap.to(crossRef.current, {
          scale: isDrag ? 1 : 0,
          opacity: isDrag ? 1 : 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }

    // Magnetic pull on buttons and links
    const magneticEls = document.querySelectorAll("[data-magnetic]");
    magneticEls.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const mx = (e as MouseEvent).clientX - rect.left - rect.width / 2;
        const my = (e as MouseEvent).clientY - rect.top - rect.height / 2;
        gsap.to(el, {
          x: mx * 0.25,
          y: my * 0.25,
          duration: 0.4,
          ease: "power2.out",
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
      });
    });

    // Register all interactive elements
    const links = document.querySelectorAll("a, button");
    const projectCards = document.querySelectorAll("[data-cursor='view']");

    links.forEach((el) => {
      el.addEventListener("mouseenter", onEnterHover);
      el.addEventListener("mouseleave", onLeaveHover);
    });

    projectCards.forEach((el) => {
      el.addEventListener("mouseenter", onEnterView);
      el.addEventListener("mouseleave", onLeaveView);
    });

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      {/* Default dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: -5,
          left: -5,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "var(--color-text-primary)",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Hover ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: -20,
          left: -20,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1px solid var(--color-text-primary)",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%) scale(0)",
          opacity: 0,
        }}
      />

      {/* VIEW rotate circle */}
      <div
        ref={viewRef}
        style={{
          position: "fixed",
          top: -44,
          left: -44,
          width: 88,
          height: 88,
          borderRadius: "50%",
          border: "1px solid rgba(242,238,230,0.3)",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%) scale(0)",
          opacity: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          viewBox="0 0 88 88"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            animation: "rotateCursor 6s linear infinite",
          }}
        >
          <path
            id="circle-path"
            d="M 44,44 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
            fill="none"
          />
          <text
            style={{
              fontSize: "9px",
              fill: "var(--color-text-primary)",
              fontFamily: "var(--font-mono)",
              letterSpacing: "3px",
            }}
          >
            <textPath href="#circle-path">VIEW · VIEW · VIEW ·</textPath>
          </text>
        </svg>
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "var(--color-text-primary)",
          }}
        />
      </div>

      {/* Drag crosshair */}
      <div
        ref={crossRef}
        style={{
          position: "fixed",
          top: -16,
          left: -16,
          width: 32,
          height: 32,
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%) scale(0)",
          opacity: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: "100%",
            height: 1,
            background: "var(--color-text-primary)",
            transform: "translateY(-50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: 1,
            height: "100%",
            background: "var(--color-text-primary)",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      <style>{`
        @keyframes rotateCursor {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}