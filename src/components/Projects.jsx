import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../data/projects';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Show 6 featured projects initially, expand to all 8 on toggle
  const visibleProjects = showAll
    ? projects
    : projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section id="projects" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="WORK"
          title="Featured Projects"
          subtitle="A selection of machine learning systems, GenAI workflows, computer vision models, and production web applications."
        />

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* View More / Show Less Toggle Button */}
        {projects.length > 6 && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline !py-3 !px-7 text-sm md:text-base font-semibold inline-flex items-center gap-2 group"
            >
              <span>{showAll ? 'Show Fewer Projects' : `View All Projects (${projects.length})`}</span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* Project Breakdown Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
