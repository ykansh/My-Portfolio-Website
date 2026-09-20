import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Brain } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { profile } from '../data/profile';

const infoIcons = {
  MapPin: MapPin,
  GraduationCap: GraduationCap,
  Brain: Brain,
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <SectionHeader eyebrow="BACKGROUND" title="About Me" />

        <div className="max-w-4xl">
          {/* Narrative paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 text-text-secondary text-lg md:text-xl font-normal leading-[1.8]"
          >
            {profile.about.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </motion.div>

          {/* Info Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 pt-10 border-t border-border-light flex flex-wrap items-center gap-6 md:gap-10"
          >
            {profile.infoStrip.map((item) => {
              const IconComponent = infoIcons[item.icon] || MapPin;
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-border-light shadow-sm flex items-center justify-center text-accent-primary group-hover:border-accent-mid group-hover:scale-105 transition-all duration-200">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-text-primary font-semibold text-base md:text-lg">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
