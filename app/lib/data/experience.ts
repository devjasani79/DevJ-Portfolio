export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

export const experience: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "Labmentix Edtech Pvt Ltd",
    duration: "Jun 2025 â€“ Sep 2025",
    location: "Remote, India",
    description: [
      "Engineered 8+ production-grade RESTful APIs using Node.js, Express.js, and TypeScript",
      "Reduced PostgreSQL query latency by ~20% through schema optimization and indexing",
      "Managed authentication, environment config, and deployment pipelines on Render",
      "Collaborated with frontend team via Git workflows, 100% sprint delivery",
      "Produced comprehensive API documentation for clean integration",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "NEX TechSolutions Inc",
    duration: "Oct 2024 â€“ Jan 2025",
    location: "Pune, Maharashtra",
    description: [
      "Developed 10+ responsive web interfaces using React.js, HTML5, CSS3",
      "Improved app performance by 25% through React optimization and code refactoring",
      "Restructured navigation flows and enhanced UX based on stakeholder feedback",
      "Participated in peer code reviews and mentored responsive design principles",
    ],
  },
  {
    id: 3,
    title: "Microsoft Learn Student Ambassador",
    company: "Aadi Foundation",
    duration: "Jan 2025 â€“ Feb 2025",
    location: "Delhi, India (Remote)",
    description: [
      "Built 3+ static web applications reinforcing frontend fundamentals",
      "Explored Azure Cloud services and AI cognitive services",
      "Collaborated in structured full-stack learning cohort",
    ],
  },
];
