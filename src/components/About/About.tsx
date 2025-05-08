import { motion } from 'framer-motion';
import { Code, Award, Users, Palette, Briefcase } from 'lucide-react';

const skills = {
  technical: [
    "HTML", "CSS", "JavaScript", "Tailwind CSS", "SASS",
    "React.js", "Node.js", "Express.js", "MongoDB",
    "Object-Oriented Programming (OOPs)",
    "C", "C++", "Java", "Python", "R", "SQL"
  ],
  soft: [
    "Problem Solving", "Team Collaboration", "Communication",
    "Time Management", "Adaptability", "Critical Thinking"
  ],
  creative: [
    "UI/UX Design", "Brand Management", "Content Creation",
    "Visual Design", "Creative Direction"
  ],
  tools: [
    "Netlify", "Vercel", "Render", "Git", "GitHub",
    "VS Code", "Figma", "Postman", "MongoDB Compass"
  ]
};

const certifications = [
  {
    title: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Johns Hopkins University (Coursera)",
    type: "Frontend Development"
  },
  {
    title: "Node.js, Express.js, and MongoDB for Web Developers",
    issuer: "Infosys Springboard",
    type: "Backend Development"
  },
  {
    title: "Full Stack Development Master Course",
    issuer: "GREAT LEARNING",
    type: "Full Stack Development"
  },
  {
    title: "Advanced SEO Certification",
    issuer: "GREAT LEARNING",
    type: "SEO"
  },
  {
    title: "Software Testing",
    issuer: "Infosys Springboard",
    type: "Testing"
  }
];

const experiences = [
  {
    role: "Web Development Intern",
    company: "TechSolutions Inc.",
    duration: "June 2023 - August 2023",
    description: "Worked on developing and maintaining web applications using React.js and Node.js. Collaborated with the team to implement new features and fix bugs. Gained hands-on experience with modern web development practices and tools.",
    achievements: [
      "Developed and deployed 3 new features that improved user engagement by 25%",
      "Reduced application load time by 40% through code optimization",
      "Collaborated with senior developers to implement best practices"
    ]
  }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A passionate full-stack developer with a strong foundation in both frontend and backend technologies. 
            Currently pursuing BBA(CA) at Haribhai V. Desai College with a GPA of 8.53/10. 
            My journey in technology is complemented by my academic excellence, having scored 77.60% in Higher Secondary 
            and 76.60% in Secondary Education. I specialize in building modern web applications while continuously 
            expanding my knowledge through various certifications and practical projects.
          </p>
        </motion.div>

        {/* Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue-400" />
            Professional Experience
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-800/50 rounded-xl border border-zinc-700 p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <p className="text-zinc-400 mt-2 md:mt-0">{exp.duration}</p>
                </div>
                <p className="text-zinc-300 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-zinc-400">{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-400" />
            Skills & Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-800/50 rounded-xl border border-zinc-700 p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-400" />
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-zinc-700 rounded-md text-sm text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-zinc-800/50 rounded-xl border border-zinc-700 p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-zinc-700 rounded-md text-sm text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-zinc-800/50 rounded-xl border border-zinc-700 p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-blue-400" />
                Creative Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.creative.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-zinc-700 rounded-md text-sm text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-zinc-800/50 rounded-xl border border-zinc-700 p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-400" />
                Tools & Platforms
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-zinc-700 rounded-md text-sm text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-400" />
            Certifications
          </h3>
          <div className="h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800 pr-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-800/50 rounded-xl border border-zinc-700 p-6"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                  <p className="text-zinc-400 mb-1">{cert.issuer}</p>
                  <p className="text-blue-400">{cert.type}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 