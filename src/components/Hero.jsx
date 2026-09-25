import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profile } from '../data/profile';

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-40 lg:pb-28 flex items-center relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left Column: Typography & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm text-accent-primary text-[0.72rem] sm:text-xs lg:text-sm font-bold tracking-wider uppercase mb-3.5 sm:mb-4 lg:mb-7">
              <span className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-accent-primary pulse-dot" />
              <span>{profile.status}</span>
            </div>

            {/* Hero Name in Accent Blue */}
            <h1 className="text-accent-primary text-[clamp(2.25rem,8vw,3.1rem)] lg:text-[clamp(3.3rem,6vw,5.2rem)] font-extrabold tracking-[-0.04em] leading-[1.12] lg:leading-[1.08] mb-3 sm:mb-3.5 lg:mb-5">
              {profile.name}
            </h1>

            {/* Positioning statement */}
            <p className="text-text-secondary text-[0.95rem] sm:text-base lg:text-[1.2rem] font-normal leading-[1.6] lg:leading-[1.65] max-w-[580px] mb-3 lg:mb-4 px-1 sm:px-0">
              {profile.tagline}
            </p>

            {/* Subline below description */}
            <p className="text-text-muted text-xs sm:text-sm lg:text-base font-medium mb-6 sm:mb-7 lg:mb-10">
              {profile.subline}
            </p>

            {/* Strictly two buttons: View Work & GitHub */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="btn-primary group !py-2.5 !px-5 sm:!py-3 sm:!px-5 lg:!py-3.5 lg:!px-6 text-sm lg:text-base"
              >
                <span>View Work</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2 sm:gap-2.5 !py-2.5 !px-5 sm:!py-3 sm:!px-5 lg:!py-3.5 lg:!px-6 text-sm lg:text-base"
              >
                <GithubIcon className="w-4 h-4 text-text-primary" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Photograph Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center items-center"
          >
            <div className="relative w-[210px] sm:w-[250px] lg:w-[340px] aspect-square group">
              {/* Offset Background Shadow Layer */}
              <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-3 sm:translate-y-3 lg:translate-x-4 lg:translate-y-4 rounded-[1.6rem] lg:rounded-[2rem] bg-white/70 border-2 border-accent-mid/60 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2 z-0" />

              {/* Main Photo Frame */}
              <div className="relative w-full h-full rounded-[1.6rem] lg:rounded-[2rem] overflow-hidden bg-white p-1 border-3 lg:border-4 border-white shadow-[0_15px_30px_rgba(0,0,0,0.08)] lg:shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-10">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover object-[68%_25%] rounded-[1.35rem] lg:rounded-[1.8rem] transition-transform duration-500 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://ui-avatars.com/api/?name=Ansh+Chourasiya&background=4F8EF7&color=fff&size=512&bold=true";
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
