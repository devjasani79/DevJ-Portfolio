import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, image, technologies, githubUrl, liveUrl }: ProjectCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-zinc-800/50 rounded-xl border border-zinc-700 overflow-hidden"
  >
    <div className="relative h-40">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-zinc-400 text-sm mb-3 line-clamp-2">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {technologies.map((tech: string) => (
          <span
            key={tech}
            className="px-2 py-1 bg-zinc-700 rounded-md text-xs text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            <Github className="w-4 h-4" /> Code
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default ProjectCard; 