import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-bg-alt relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <SectionHeader eyebrow="CAREER" title="Work Experience" />

        <div className="flex flex-col gap-8 max-w-4xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-border-light rounded-[1.5rem] p-7 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-accent-mid hover:shadow-[0_20px_40px_-10px_rgba(79,142,247,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-8 items-start"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-accent-light text-accent-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                <Briefcase className="w-7 h-7" />
              </div>

              {/* Experience Body */}
              <div className="flex-grow w-full min-w-0">
                {/* Top Row: Role, Company & Meta */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-text-primary text-xl md:text-2xl font-bold tracking-tight mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-accent-primary text-base md:text-lg font-semibold">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap md:flex-col md:items-end gap-3 md:gap-1.5 text-text-muted text-sm font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-accent-primary" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-text-muted" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="flex flex-col gap-2.5 my-5">
                  {exp.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-text-secondary text-base md:text-[1.05rem] leading-relaxed pl-6 relative"
                    >
                      <span className="absolute left-0 top-0 text-accent-primary font-bold">
                        ▹
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Technology Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border-light/60">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-bg-base border border-border-light text-text-secondary text-xs md:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
