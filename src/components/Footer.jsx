import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-border-light py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col gap-1.5 items-center md:items-start">
          <span className="text-text-primary text-xl font-extrabold tracking-tight">
            {profile.name}
          </span>
          <p className="text-text-secondary text-sm">
            © {currentYear} · Built by {profile.name}
          </p>
        </div>

        {/* Right Side: Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-bg-base border border-border-light flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent-primary hover:border-accent-primary transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-bg-base border border-border-light flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent-primary hover:border-accent-primary transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-bg-base border border-border-light flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-mid transition-all"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
