import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Calendar,
  Award,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { education, certifications, googleBadges } from '../data/education';
import CertificateModal from './CertificateModal';

export default function Education() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="education" className="py-20 md:py-32 bg-bg-alt relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <SectionHeader eyebrow="ACADEMIC" title="Education & Learning" />

        {/* Primary Education Card - Exact match to reference layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-border-light rounded-[1.5rem] p-7 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-accent-mid/60 hover:shadow-[0_20px_40px_-10px_rgba(79,142,247,0.12)] transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-10 items-start mb-16"
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
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8">
            <div>
              <h3 className="text-text-primary text-xl md:text-2xl font-bold tracking-tight">
                Certifications & Specialized Learning
              </h3>
              <p className="text-text-muted text-sm mt-1">
                Click any certificate to view credential details and preview the official document.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {certifications.map((cert, index) => (
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
                onClick={() => setSelectedItem(cert)}
                className="group bg-white border border-border-light rounded-2xl p-5 md:p-6 shadow-sm hover:border-accent-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-grow">
                  {/* Authentic Logo Container */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-border-light shadow-2xs group-hover:border-accent-mid/60 group-hover:shadow-sm flex items-center justify-center p-2 flex-shrink-0 transition-all">
                    {cert.logo ? (
                      <img
                        src={cert.logo}
                        alt={cert.title}
                        className="w-8 h-8 object-contain group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <Award className="w-6 h-6 text-accent-primary" />
                    )}
                  </div>

                  <div className="min-w-0 flex-grow">
                    <h4 className="text-text-primary font-bold text-sm sm:text-base leading-snug mb-1 group-hover:text-accent-primary transition-colors line-clamp-1">
                      {cert.title}
                    </h4>
                    <p className="text-text-secondary text-xs sm:text-sm font-medium leading-tight line-clamp-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-lg bg-bg-base border border-border-light flex items-center justify-center text-text-muted group-hover:text-accent-primary group-hover:bg-accent-light group-hover:border-accent-mid/40 transition-colors flex-shrink-0">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Google Cloud Skill Badges Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-accent-primary text-xs font-extrabold tracking-wider uppercase mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hands-On Cloud Labs</span>
              </div>
              <h3 className="text-text-primary text-xl md:text-2xl font-bold tracking-tight">
                Google Cloud Skill Badges
              </h3>
            </div>
            <span className="text-text-muted text-xs md:text-sm font-medium">
              Verified by Google Cloud Skills Boost
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {googleBadges.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setSelectedItem(badge)}
                className="group bg-white border border-border-light rounded-2xl p-6 shadow-sm hover:border-accent-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center cursor-pointer relative overflow-hidden"
              >
                {/* Category Chip */}
                <span className="mb-4 px-2.5 py-0.5 rounded-full bg-bg-base border border-border-light text-text-muted text-[0.7rem] font-semibold tracking-wide uppercase">
                  {badge.category}
                </span>

                {/* Badge Graphic */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4 relative flex items-center justify-center">
                  <img
                    src={badge.badge}
                    alt={badge.title}
                    className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h4 className="text-text-primary font-bold text-sm md:text-base leading-snug mb-2 group-hover:text-accent-primary transition-colors flex-grow">
                  {badge.title}
                </h4>

                {/* Issuer */}
                <p className="text-text-muted text-xs font-medium">
                  {badge.issuer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Certificate / Badge Modal */}
      <CertificateModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
