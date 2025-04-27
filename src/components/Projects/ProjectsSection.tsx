import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-zinc-800/50 rounded-xl border border-zinc-700 overflow-hidden"
  >
    <div className="relative h-40">
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
    </div>
    <div className="p-4">
      <h3 className="text-base font-semibold mb-2 text-white">{project.title}</h3>
      <p className="text-zinc-400 text-sm mb-3 line-clamp-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-zinc-700 rounded-md text-xs text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
        >
          <ExternalLink className="w-4 h-4" /> Live Demo
        </a>
        <a
          href={`https://github.com/devjasani79/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
        >
          <Github className="w-4 h-4" /> Code
        </a>
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Explore my latest projects and creative works.
          </p>
        </motion.div>

        <div className="h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pr-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 