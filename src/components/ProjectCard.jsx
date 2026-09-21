import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onSelect, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(project)}
      className="group bg-white border border-border-light rounded-[1.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-accent-mid hover:shadow-[0_25px_50px_-12px_rgba(79,142,247,0.18)] hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full overflow-hidden"
    >
      <div className="p-7 md:p-9 flex flex-col h-full">
        {/* Top: Category & Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-accent-primary font-bold text-xs md:text-sm tracking-wider uppercase">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-3 py-1 rounded-full bg-accent-light text-accent-primary text-[0.7rem] md:text-xs font-bold tracking-wider uppercase">
              Featured
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-text-primary text-xl md:text-2xl font-bold tracking-tight mb-2 group-hover:text-accent-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-text-muted text-sm md:text-base font-normal mb-6 flex-grow">
          {project.subtitle}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 py-4 mb-6 border-t border-b border-border-light/70">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-bg-base border border-border-light text-text-secondary text-xs font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-1 text-text-muted text-xs font-medium self-center">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

        {/* Footer: View Details CTA & Link Icons */}
        <div className="flex items-center justify-between pt-1 mt-auto">
          <span className="inline-flex items-center gap-1.5 text-accent-primary font-bold text-sm md:text-base group-hover:gap-2.5 transition-all">
            View Details <ArrowRight className="w-4 h-4" />
          </span>

          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-bg-base border border-border-light flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent-primary hover:border-accent-primary transition-all"
                title="View Source Code on GitHub"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-bg-base border border-border-light flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent-primary hover:border-accent-primary transition-all"
                title="Live Demo"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
