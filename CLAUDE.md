@AGENTS.md

# DevJ Portfolio — Project Context Document

## Project Overview
Building a modern, Awwwards-quality developer portfolio for Dev Jasani (@devj_portfolio on Instagram) — a full-stack engineer with expertise in AI/Agentic systems, React, Node.js, and product engineering. The goal is to showcase work, skills, and personality while pushing interactive design boundaries.

**Current Status:** Core sections built and functional. Ready for blog implementation. UI/UX refinements pending.

---

## What's Been Built

### Core Architecture
- **Framework:** Next.js 14 (App Router) + TypeScript
- **Animation:** GSAP (ScrollTrigger, SplitText)
- **Styling:** Tailwind CSS + custom CSS variables
- **Smooth Scroll:** Lenis synced with GSAP
- **Custom Cursor:** 4-state cursor (default, hover, view, drag)
- **Font Stack:** Syne (display), Inter (body), JetBrains Mono (mono)
- **Color Scheme:** Warm charcoal (#0C0B09), cream (#F2EEE6), accent lime (#C8F135)

### Sections Completed
1. **Hero** — TextScramble name reveal, oversized Syne typography, status indicator
2. **Projects** — Auto-looping carousel (seamless infinite scroll), card hover reveals, modal overlay with project details
3. **Services** — 4 service cards (Full-Stack, AI/Agentic, Backend, Database), grid layout
4. **Skills** — 5 categories (AI, Frontend, Backend, Databases, Cloud), badge-style layout
5. **Experience** — Timeline format, 3 roles with bullet descriptions
6. **About** — Bio + personal touch, blockquote
7. **Contact** — Email form (mailto), social links
8. **Footer** — Nav links + copyright

### Data Structure (Separation of Concerns)
```
app/lib/data/
├── projects.ts (Project interface + 4 projects)
├── services.ts (Service interface + 4 services)
├── skills.ts (SkillCategory interface + 5 categories)
└── experience.ts (Experience interface + 3 roles)
```

All components import from these files — clean, scalable, updatable without touching components.

### Component Tree
```
app/
├── layout.tsx (root + fonts + Navbar + SmoothScroll + CustomCursor)
├── page.tsx (routes all sections)
├── components/
│   ├── ui/
│   │   ├── CustomCursor.tsx (4-state cursor logic)
│   │   └── Noise.tsx (grain overlay)
│   ├── layout/
│   │   ├── Navbar.tsx (fixed top, hide-on-scroll)
│   │   ├── SmoothScroll.tsx (Lenis wrapper)
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Projects.tsx (carousel with modal)
│       ├── Services.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── About.tsx
│       └── Contact.tsx
└── globals.css (CSS variables, animations)
```

---

## Current State & Known Issues

### What Works
- ✅ Responsive layout (mostly)
- ✅ Smooth scroll with Lenis
- ✅ Custom cursor with 4 states
- ✅ Projects carousel (infinite loop)
- ✅ Modal overlays
- ✅ Form submission (mailto)
- ✅ Navigation
- ✅ Dark theme with design tokens

### What Needs Work (Documented for Later)
1. **Mobile Responsiveness** — Navbar cramped, services layout breaks on small screens
2. **Services Section** — Should be in horizontal scrollable container with expandable cards (tap to expand). Not full viewport scroll.
3. **Animations** — Services, Skills, Experience sections are static. Need GSAP stagger reveals on scroll.
4. **About Section** — Missing video container (right of text on desktop, below on mobile) for personal video compilation about music/art/dance.
5. **Scroll Uniqueness** — Current scroll is linear. Needs more personality:
   - Parallax on About section
   - Clip-path reveals on Experience
   - Staggered card reveals on Services/Skills
6. **Hero Entrance** — Currently clean but could be more dramatic
7. **Contact Form** — Currently mailto. Should integrate backend (Resend/SendGrid) for actual email delivery

### Mobile Issues Specific
- Navbar logo + links overflow on small screens
- Projects carousel images might scale poorly
- Services cards stack poorly
- Footer layout wraps awkwardly on mobile

---

## What's Next (Priority Order)

### Phase 1: Blog (Current Focus)
- **Blog Architecture:**
  - Notion as CMS (fetch via Notion API)
  - `app/blog/page.tsx` — blog listing
  - `app/blog/[slug]/page.tsx` — individual posts
  - Custom MDX rendering with portfolio typography
  - Reading progress bar
  - "Back to home" link

- **Implementation:**
  - Install `notion-client` + `notion-to-md`
  - Set up Notion database with posts
  - Create blog data fetching hook
  - Design post template matching portfolio aesthetic
  - Add blog to nav

### Phase 2: UI/UX Polish (After Blog)
1. Mobile responsive fixes (navbar, services, footer)
2. Services container → horizontal scroll + expandable cards
3. Add GSAP animations to all sections
4. About section video container (placeholder for now)
5. Scroll uniqueness — parallax, clip-path reveals, stagger effects
6. Contact form backend integration

### Phase 3: Launch & Monitoring
- Deploy to Vercel
- SEO setup (next/metadata per page)
- OG images for social sharing
- Analytics (Vercel Analytics or Plausible)
- Form backend (Resend or similar)

---

## Key Design Decisions

### Why This Stack?
- **GSAP** — Industry standard for production animations. SplitText for text reveals.
- **Lenis** — Momentum scrolling feels premium, works seamlessly with GSAP.
- **Custom Cursor** — Signals personality, shows attention to detail.
- **Data Separation** — Easy to update without touching components. Scales to blog posts.
- **CSS Variables** — Single source of truth for theme. Easy dark/light mode later.

### Why No UI Library?
- Shadcn would lock aesthetics into generic defaults.
- Every element is custom-built to match the design system.
- More flexible for animations and interactions.

### Why Notion for Blog?
- Write in familiar interface (Notion)
- Fetch via API, render with custom design
- No separate CMS infrastructure
- Free tier works for content up to ~100 posts

---

## File Locations & What's Missing

### What Exists
```
public/
├── resume.pdf (place your resume here)
└── images/
    └── projects/
        ├── googledev-drive.png (add screenshots)
        ├── smaranandh.png
        ├── whatsupdev.png
        └── freelancer.png
```

### What You Need to Add
1. **Resume** → `public/resume.pdf`
2. **Project Images** → 4 screenshots in `public/images/projects/`
3. **Blog Data** → Notion database setup (when doing blog phase)
4. **Video** → `public/videos/about-compilation.mp4` (for About section, later)

---

## Handoff Notes for Other AI Agents

### If Continuing This Project
1. **First:** Check the data files in `app/lib/data/` — all content lives here, not hardcoded in components.
2. **Animations:** GSAP is configured in each section. ScrollTrigger is registered globally in Lenis setup.
3. **Styling:** All colors/fonts are CSS variables in `app/globals.css`. Update there for theme changes.
4. **Mobile Issues:** See "What Needs Work" section above. Start with navbar and services overflow.
5. **Blog Setup:** Use Notion API. See Phase 1 outline.

### Code Standards
- Components are functional + React hooks
- Data = interface + array of objects
- Animations use GSAP + ScrollTrigger (not Framer Motion for scroll)
- No external UI libraries — styled with inline + global CSS
- Images fallback gracefully if missing

### Known Constraints
- GSAP paid plugins (InertiaPlugin) avoided — custom drag physics if needed
- No 3D (Three.js) — performance concern on older devices
- Cursor disabled on touch devices — custom cursor is desktop-only

---

## Contact & Social Links
- Email: devjasani79@gmail.com
- GitHub: github.com/devjasani79
- LinkedIn: linkedin.com/in/devjasani79
- Instagram: @devj_portfolio
- Portfolio: devj-portfolio.vercel.app

---

## Version & Last Updated
- **Version:** 1.0 (Core sections complete, ready for blog)
- **Last Updated:** April 2025
- **Framework Versions:** Next.js 16.2.4, React 19, TypeScript 5, GSAP 3.12+, Tailwind 4

---

## Questions for Next Agent
Before continuing:
1. Is blog the priority, or UI polish first?
2. Do you have the about video compiled, or should we use a placeholder?
3. Should contact form integrate with backend (Resend), or keep mailto?
4. Timeline: MVP launch by end of April? Or refinement first?

---

*This document should be referenced when handing off work to another AI agent or when resuming after a long break. It captures decisions, status, and immediate next steps.*