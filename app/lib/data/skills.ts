export interface SkillCategory {
  label: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "AI & Agentic",
    items: [
      "LLM Integration",
      "RAG Pipelines",
      "Agentic Workflows",
      "LangChain",
      "Prompt Engineering",
      "Vector DB",
      "GPT APIs",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "GSAP",
      "Responsive Design",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "RESTful APIs",
      "Microservices",
      "JWT Authentication",
      "Authorization",
    ],
  },
  {
    label: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Schema Design",
      "SQL Optimization",
      "Indexing",
      "NoSQL",
    ],
  },
  {
    label: "Cloud & Tools",
    items: [
      "Vercel",
      "Render",
      "Git/GitHub",
      "Postman",
      "Figma",
      "Socket.IO",
      "Agile/Scrum",
      "SDLC",
    ],
  },
];