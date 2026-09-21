import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar,
  Layers,
  AlertCircle,
  CheckCircle2,
  ListChecks,
  Network,
  HelpCircle,
  TrendingUp,
  ExternalLink,
  ArrowRight,
  ArrowDown,
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  // Lock background scrolling and handle Escape key
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-900/60 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white border border-border-light rounded-[1.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] max-w-[900px] w-full max-h-[90vh] overflow-y-auto relative flex flex-col my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white border border-border-light shadow-md flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-base transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="bg-bg-alt border-b border-border-light px-6 py-8 md:px-12 md:py-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-white border border-border-light text-accent-primary font-bold text-xs tracking-wider uppercase">
                {project.category}
              </span>
              <div className="flex items-center gap-1.5 text-text-muted text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5 text-accent-primary" />
                <span>{project.date}</span>
              </div>
            </div>

            <h2 className="text-text-primary text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-tight leading-tight mb-2">
              {project.title}
            </h2>
            <p className="text-text-secondary text-base md:text-lg font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-12 flex flex-col gap-10">
            {/* Overview Section */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-text-primary font-bold text-xl">
                <Layers className="w-5 h-5 text-accent-primary" />
                <h3>Overview</h3>
              </div>
              <p className="text-text-secondary text-base md:text-[1.05rem] leading-[1.75]">
                {project.description}
              </p>
              {project.overview && project.overview !== project.description && (
                <p className="text-text-secondary text-base md:text-[1.05rem] leading-[1.75]">
                  {project.overview}
                </p>
              )}
            </div>

            {/* Problem & Solution 2-Column Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem Box */}
              <div className="bg-bg-base border border-border-light rounded-2xl p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-text-primary font-bold text-lg">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  <h4>Problem</h4>
                </div>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution Box */}
              <div className="bg-accent-light/40 border border-accent-mid/30 rounded-2xl p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-text-primary font-bold text-lg">
                  <CheckCircle2 className="w-5 h-5 text-accent-primary" />
                  <h4>Solution</h4>
                </div>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5 text-text-primary font-bold text-xl">
                <ListChecks className="w-5 h-5 text-accent-primary" />
                <h3>Key Features</h3>
              </div>
              <ul className="grid grid-cols-1 gap-2.5">
                {project.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="text-text-secondary text-sm md:text-base leading-relaxed pl-6 relative"
                  >
                    <span className="absolute left-0 top-0 text-accent-primary font-bold">
                      ▹
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Architecture Flowchart Visual */}
            {project.architecture && project.architecture.length > 0 && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5 text-text-primary font-bold text-xl">
                  <Network className="w-5 h-5 text-accent-primary" />
                  <h3>Technical Architecture</h3>
                </div>

                <div className="bg-bg-base border border-border-light rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-2">
                    {project.architecture.map((item, idx) => {
                      const isLast = idx === project.architecture.length - 1;
                      return (
                        <React.Fragment key={idx}>
                          <div className="flex flex-col items-center text-center p-3.5 rounded-xl bg-white border border-border-light shadow-sm flex-1 min-w-[120px]">
                            <span className="text-text-primary font-bold text-xs md:text-sm mb-1">
                              {item.step}
                            </span>
                            <span className="text-text-muted text-[0.75rem] font-medium leading-tight">
                              {item.detail}
                            </span>
                          </div>

                          {!isLast && (
                            <>
                              <div className="hidden md:flex items-center justify-center text-accent-primary">
                                <ArrowRight className="w-4 h-4" />
                              </div>
                              <div className="flex md:hidden items-center justify-center text-accent-primary py-1">
                                <ArrowDown className="w-4 h-4" />
                              </div>
                            </>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Challenges & Impact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.challenges && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-text-primary font-bold text-lg">
                    <HelpCircle className="w-4 h-4 text-accent-primary" />
                    <h4>Technical Challenges</h4>
                  </div>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}

              {project.impact && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-text-primary font-bold text-lg">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <h4>Outcome & Impact</h4>
                  </div>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              )}
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-col gap-3 pt-4 border-t border-border-light">
              <span className="text-text-primary font-bold text-sm uppercase tracking-wider">
                Technologies Used
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-bg-base border border-border-light text-text-secondary font-medium text-xs md:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border-light">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Source Code</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-accent-primary" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
