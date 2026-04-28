export interface Service {
  id: number;
  num: string;
  title: string;
  description: string;
  includes: string[];
}

export const services: Service[] = [
  {
    id: 1,
    num: "01",
    title: "Full-Stack Development",
    description:
      "End-to-end application development from database design to deployment. I build scalable, production-ready web apps with clean architecture.",
    includes: [
      "Next.js & React applications",
      "Node.js/Express backend APIs",
      "PostgreSQL/MongoDB database design",
      "API integration & REST design",
      "Deployment to Vercel/Render",
    ],
  },
  {
    id: 2,
    num: "02",
    title: "AI & Agentic Systems",
    description:
      "Integrate LLMs, build RAG pipelines, and deploy agentic workflows. I turn AI into production features that actually work.",
    includes: [
      "LLM integration (GPT, Groq, Llama)",
      "RAG pipeline architecture",
      "Agentic workflow design",
      "Vector database setup (Supabase pgvector)",
      "Prompt engineering & optimization",
    ],
  },
  {
    id: 3,
    num: "03",
    title: "Backend & API Architecture",
    description:
      "Robust backend systems that scale. RESTful APIs, microservices, real-time features, and secure authentication.",
    includes: [
      "RESTful API design & optimization",
      "Real-time systems (Socket.IO, WebSockets)",
      "JWT auth & role-based access control",
      "Database optimization & indexing",
      "Caching & performance tuning",
    ],
  },
  {
    id: 4,
    num: "04",
    title: "Database Design & Optimization",
    description:
      "Schema design, query optimization, and scalable data architecture. Fast, reliable databases that grow with your app.",
    includes: [
      "PostgreSQL/MongoDB schema design",
      "SQL optimization & indexing",
      "Data migration & backup strategies",
      "NoSQL best practices",
      "Performance profiling",
    ],
  },
];