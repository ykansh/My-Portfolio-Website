import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
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
      className="min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Information */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm text-accent-primary text-xs md:text-sm font-bold tracking-wider uppercase mb-6 md:mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-primary pulse-dot" />
              <span>{profile.status}</span>
            </div>

            {/* Hero Name */}
            <h1 className="text-text-primary text-[clamp(3.2rem,6.5vw,5.2rem)] font-extrabold tracking-[-0.04em] leading-[1.08] mb-4">
              {profile.firstName}{' '}
              <span className="text-accent-primary">{profile.lastName}</span>
            </h1>

            {/* Subline */}
            <p className="text-text-muted text-base md:text-lg font-medium mb-5">
              {profile.subline}
            </p>

            {/* Intro Positioning Statement */}
            <p className="text-text-secondary text-lg md:text-xl font-normal leading-relaxed max-w-[620px] mb-8 md:mb-10">
              {profile.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="btn-primary group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={profile.resume}
                download="Ansh_Chourasiya_CV.pdf"
                className="btn-outline flex items-center gap-2 font-semibold text-accent-primary hover:text-accent-hover"
                title="Download original CV"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4 text-text-primary" />
                <span>GitHub</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-accent-primary" />
                <span>LinkedIn</span>
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
            <div className="relative w-[280px] sm:w-[320px] md:w-[340px] aspect-square group">
              {/* Offset Background Shadow Layer */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-[2rem] bg-white/70 border-2 border-accent-mid/60 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2 z-0" />

              {/* Main Photo Frame */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-white p-1 border-4 border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-10">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover object-[68%_25%] rounded-[1.8rem] transition-transform duration-500 ease-out group-hover:scale-105"
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
