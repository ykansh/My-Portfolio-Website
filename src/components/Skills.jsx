import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Sparkles,
  Server,
  Cloud,
  Layout,
  Palette,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { skills } from '../data/skills';

const categoryIcons = {
  Code2: Code2,
  Database: Database,
  Sparkles: Sparkles,
  Server: Server,
  Cloud: Cloud,
  Layout: Layout,
  Palette: Palette,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <SectionHeader eyebrow="TOOLKIT" title="Technical Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((cat, index) => {
            const IconComponent = categoryIcons[cat.icon] || Code2;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white border border-border-light rounded-[1.5rem] p-7 md:p-8 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.06),0_4px_10px_-3px_rgba(15,23,42,0.04)] hover:border-accent-mid hover:shadow-[0_20px_40px_-10px_rgba(79,142,247,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f0f7ff] to-[#eaf6ff] border border-[#cbe7ff] shadow-[0_4px_12px_rgba(79,142,247,0.12)] flex items-center justify-center text-accent-primary flex-shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-text-primary text-xl font-bold tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Tag Chips */}
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-lg bg-bg-base border border-border-light/80 text-text-secondary font-medium text-xs md:text-sm hover:border-accent-mid/60 hover:text-accent-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
