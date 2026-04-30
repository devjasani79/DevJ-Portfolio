export interface Project {
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

export const projects: Project[] = [
  {
    id: 1,
    num: "01",
    name: "GoogleDev Drive",
    tagline: "AI-powered cloud storage for developers",
    description:
      "Secure cloud storage with integrated AI that reads, analyzes, and answers questions about uploaded files â€” PDFs, images, documents. Per-user ACL isolation, real-time storage tracking, Groq-powered vision models.",
    tags: ["Next.js", "TypeScript", "Appwrite", "Groq", "AI"],
    live: "https://googledev-drive.vercel.app",
    github: null,
    image: "/images/projects/googledev-drive.png",
    accent: "#0d2b1a",
  },
  {
    id: 2,
    num: "02",
    name: "SmarAnandh",
    tagline: "Digital elder care companion for Indian families",
    description:
      "Dual-mode app for 140M+ Indian seniors. Guardian dashboard for remote care. Senior interface with 80px touch targets, Hinglish labels, one-action-per-screen. Medication tracking, SOS, joy configuration.",
    tags: ["React", "TypeScript", "Supabase", "Framer Motion", "PostgreSQL"],
    live: "https://smar-anandh.vercel.app",
    github: "https://github.com/devjasani79/Smar-Anandh",
    image: "/images/projects/smaranandh.png",
    accent: "#2a1505",
  },
  {
    id: 3,
    num: "03",
    name: "WhatsUpDev",
    tagline: "Real-time full-stack chat application",
    description:
      "Full-stack messaging with Socket.IO real-time delivery. One-on-one and group chats, multimedia, read receipts, typing indicators, Google OAuth, vCard import. JWT + bcrypt security.",
    tags: ["React", "Node.js", "Socket.IO", "MongoDB", "JWT"],
    live: "https://whats-up-dev.vercel.app",
    github: "https://github.com/devjasani79/WhatsUpDev",
    image: "/images/projects/whatsupdev.png",
    accent: "#05152a",
  },
  {
    id: 4,
    num: "04",
    name: "Freelancer Marketplace",
    tagline: "Full-stack platform connecting clients and freelancers",
    description:
      "End-to-end marketplace with gig creation, purchasing, role-based access, real-time messaging via WebSockets, ImageKit optimization. Client, Freelancer, Admin roles with Google OAuth.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO", "Passport.js"],
    live: null,
    github: null,
    image: "/images/projects/freelancer.png",
    accent: "#12052a",
  },
];
