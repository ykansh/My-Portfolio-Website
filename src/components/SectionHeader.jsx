import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left', className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 max-w-3xl ${align === 'center' ? 'text-center mx-auto' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-accent-primary font-bold text-sm md:text-base tracking-[0.15em] uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-text-primary text-[clamp(2.2rem,4.5vw,3.5rem)] font-extrabold tracking-[-0.03em] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary text-lg md:text-xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
