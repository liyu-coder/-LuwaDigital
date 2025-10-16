import React from 'react';
import type { Project } from '../types';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, tags, imageUrl, liveUrl, repoUrl } = project;

  return (
    <motion.div
      className="bg-light-navy rounded-lg overflow-hidden group flex flex-col"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-navy/50"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-lightest-slate group-hover:text-green transition-colors duration-300">{title}</h3>
            <div className="flex items-center space-x-4 text-light-slate">
                {repoUrl && (
                    <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors duration-300" aria-label="GitHub Repository">
                        <Github size={22} />
                    </a>
                )}
                {liveUrl && (
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors duration-300" aria-label="Live Demo">
                        <ExternalLink size={22} />
                    </a>
                )}
            </div>
        </div>
        <p className="text-light-slate mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-mono bg-lightest-navy text-green px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
