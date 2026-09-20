import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { profile } from '../data/profile';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section observer to update active nav item
  useEffect(() => {
    const sections = navLinks.map((link) => link.href.substring(1));
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-border-light shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-3.5'
          : 'bg-transparent py-5 md:py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center justify-center w-11 h-11 bg-accent-primary text-white rounded-xl font-extrabold text-lg shadow-[0_4px_12px_rgba(79,142,247,0.3)] hover:scale-105 transition-transform duration-200"
          aria-label="Ansh Chourasiya Home"
        >
          {profile.initials}
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[0.95rem] font-semibold transition-colors duration-200 relative ${
                  isActive
                    ? 'text-accent-primary font-bold'
                    : 'text-text-secondary hover:text-accent-primary'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-accent-primary rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Download CV */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.resume}
            download="Ansh_Chourasiya_CV.pdf"
            className="btn-outline !py-2 !px-4 !text-sm flex items-center gap-1.5 font-semibold"
            title="Download Ansh Chourasiya's CV"
          >
            <Download className="w-4 h-4 text-accent-primary" />
            Download CV
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-text-primary hover:text-accent-primary focus:outline-none transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border-light shadow-xl py-5 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col divide-y divide-border-light/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-3 text-base font-semibold transition-colors ${
                    isActive ? 'text-accent-primary font-bold' : 'text-text-secondary'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="pt-2">
            <a
              href={profile.resume}
              download="Ansh_Chourasiya_CV.pdf"
              className="btn-primary w-full !py-2.5 !text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
