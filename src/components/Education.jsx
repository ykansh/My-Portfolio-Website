import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Calendar,
  Award,
  BrainCircuit,
  Cpu,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { education, certifications } from '../data/education';

const certIcons = {
  Award: Award,
  BrainCircuit: BrainCircuit,
  Cpu: Cpu,
};

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-bg-alt relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <SectionHeader eyebrow="ACADEMIC" title="Education & Learning" />

        {/* Primary Education Card - Exact match to reference screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-border-light rounded-[1.5rem] p-7 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-accent-mid/60 hover:shadow-[0_20px_40px_-10px_rgba(79,142,247,0.12)] transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-10 items-start mb-14"
        >
          {/* Book Icon Container */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-accent-light text-accent-primary flex items-center justify-center flex-shrink-0 shadow-sm">
            <BookOpen className="w-8 h-8 md:w-9 md:h-9" />
          </div>

          {/* Body */}
          <div className="flex-grow w-full">
            {/* Degree & CGPA Meta Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <span className="text-accent-primary font-extrabold text-xs md:text-sm tracking-[0.1em] uppercase">
                {education.degree}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white border border-border-light text-text-primary text-xs md:text-sm font-bold shadow-sm">
                {education.gpa}
              </span>
            </div>

            {/* Major */}
            <h3 className="text-text-primary text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
              {education.major}
            </h3>

            {/* School */}
            <p className="text-text-secondary text-base md:text-lg font-normal mb-5">
              {education.school}
            </p>

            {/* Period */}
            <div className="flex items-center gap-2 text-text-muted text-sm md:text-base font-semibold">
              <Calendar className="w-4 h-4 text-accent-primary" />
              <span>{education.period}</span>
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div>
          <h3 className="text-text-primary text-xl md:text-2xl font-bold tracking-tight mb-8">
            Certifications & Specialized Learning
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const IconComp = certIcons[cert.icon] || Award;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="bg-white border border-border-light rounded-2xl p-5 md:p-6 shadow-sm hover:border-border-focus hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-bg-base border border-border-light flex items-center justify-center text-accent-primary flex-shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-bold text-base leading-snug mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-text-secondary text-xs md:text-sm font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
