import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

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
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.images[0]}
                  technologies={project.tech}
                  githubUrl={`https://github.com/devjasani79/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  liveUrl={project.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 