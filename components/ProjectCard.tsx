import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col h-full group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-blue-50 text-blue-500 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
            <FolderGit2 size={24} />
        </div>
        <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-500 transition-colors"
        >
            <ExternalLink size={20} />
        </a>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full border border-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <a 
        href={project.link}
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-6 text-sm font-semibold text-blue-500 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        View Code <span className="text-lg">→</span>
      </a>
    </motion.div>
  );
};

export default ProjectCard;