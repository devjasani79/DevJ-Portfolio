import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, image, technologies, githubUrl, liveUrl }: ProjectCardProps) => {
  const [index, setIndex] = useState(0);
  const images = image.split(',').filter(img => img.trim());

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-zinc-800/50 rounded-xl border border-zinc-700 overflow-hidden group hover:border-blue-500/50 transition-all duration-300"
    >
      <div className="relative aspect-video">
        <img
          src={images[index]}
          alt={`${title} - Image ${index + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                prevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-zinc-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-zinc-900 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-zinc-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-zinc-900 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex space-x-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  setIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === index ? "bg-blue-400" : "bg-zinc-600 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-zinc-700/50 rounded-full text-xs text-zinc-300 border border-zinc-600 hover:border-blue-500/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
            >
              <Github className="w-4 h-4" /> Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 