// components/ProjectCard.tsx
import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  link: string;
  github?: string;
}

const ProjectCard = ({ title, description, tech, images, link, github }: ProjectCardProps) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: number;
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <div
      className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-blue-500/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Carousel */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent z-10" />
        <img
          src={images[index]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {images.length > 1 && (
          <div className="absolute bottom-2 right-2 z-20 flex space-x-1">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === index ? "bg-blue-400" : "bg-zinc-600"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
            {tech.map((tag) => (
              <span
                key={tag}
              className="px-2 py-1 text-xs font-medium bg-zinc-800 text-blue-400 rounded-full"
              >
                {tag}
              </span>
            ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
            Live Demo <ExternalLink className="w-4 h-4" />
        </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Source <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
