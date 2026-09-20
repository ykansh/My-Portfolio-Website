import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BrainCircuit,
  CloudCheck,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { education, certifications, achievements } from '../data/education';

const certIcons = {
  Award: Award,
  BrainCircuit: BrainCircuit,
  CloudCheck: CloudCheck || Award,
  Terminal: Terminal,
  Cpu: Cpu,
  Layers: Layers,
};

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-bg-alt relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <SectionHeader eyebrow="ACADEMIC" title="Education & Learning" />

        {/* Primary Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-border-light rounded-[1.5rem] p-7 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-accent-mid/60 hover:shadow-[0_20px_40px_-10px_rgba(79,142,247,0.12)] transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-10 items-start mb-16"
        >
          {/* Degree Icon */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-accent-light text-accent-primary flex items-center justify-center flex-shrink-0 shadow-sm">
            <GraduationCap className="w-8 h-8 md:w-10 md:h-10" />
          </div>

          {/* Education Details */}
          <div className="flex-grow w-full">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <span className="text-accent-primary font-extrabold text-xs md:text-sm tracking-wider uppercase">
                {education.degree}
              </span>
              <div className="flex items-center gap-1.5 text-text-muted text-sm font-semibold">
                <Calendar className="w-4 h-4 text-accent-primary" />
                <span>{education.period}</span>
              </div>
            </div>

            <h3 className="text-text-primary text-2xl md:text-3xl font-extrabold tracking-tight mb-1">
              {education.major}
            </h3>
            <p className="text-accent-hover text-base md:text-lg font-semibold mb-2">
              Specialization: {education.specialization}
            </p>

            <div className="flex items-center gap-2 text-text-secondary text-sm md:text-base font-medium mb-5">
              <MapPin className="w-4 h-4 text-text-muted" />
              <span>{education.institution} · {education.location}</span>
            </div>

            <p className="text-text-secondary text-base md:text-[1.05rem] leading-relaxed mb-6">
              {education.description}
            </p>

            {/* Academic Highlights */}
            <ul className="flex flex-col gap-2 pt-4 border-t border-border-light/70">
              {education.highlights.map((h, idx) => (
                <li
                  key={idx}
                  className="text-text-secondary text-sm md:text-base pl-6 relative"
                >
                  <span className="absolute left-0 top-0 text-accent-primary font-bold">
                    ▹
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-text-primary text-xl md:text-2xl font-bold tracking-tight mb-8">
            Certifications & Specialized Learning
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Achievements Section */}
        <div>
          <h3 className="text-text-primary text-xl md:text-2xl font-bold tracking-tight mb-8 flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-accent-primary" />
            <span>Key Achievements & Milestones</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white border border-border-light rounded-2xl p-6 shadow-sm hover:border-accent-mid/60 transition-all duration-200"
              >
                <h4 className="text-text-primary font-bold text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
