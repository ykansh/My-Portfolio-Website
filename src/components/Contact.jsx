import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import SectionHeader from './SectionHeader';
import { profile } from '../data/profile';

export default function Contact() {
  const contactLinks = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    },
    {
      id: 'github',
      icon: GithubIcon,
      label: 'GitHub',
      value: profile.githubHandle,
      href: profile.github,
    },
    {
      id: 'linkedin',
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: profile.linkedinHandle,
      href: profile.linkedin,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <SectionHeader eyebrow="GET IN TOUCH" title="Let's Connect" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Invitation & Interactive Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              {profile.contactText}
            </p>

            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target={link.id !== 'email' ? '_blank' : undefined}
                    rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                    className="group bg-white border border-border-light rounded-2xl p-4 md:p-5 flex items-center gap-4 text-text-primary font-semibold text-base md:text-lg hover:border-accent-mid hover:shadow-[0_10px_20px_rgba(79,142,247,0.1)] hover:translate-x-2 transition-all duration-200"
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent-light text-accent-primary flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex flex-col min-w-0 flex-grow">
                      <span className="text-xs text-text-muted uppercase tracking-wider font-semibold">
                        {link.label}
                      </span>
                      <span className="truncate text-text-primary text-sm md:text-base font-bold">
                        {link.value}
                      </span>
                    </div>

                    <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Start a Conversation Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white border border-border-light rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent-light text-accent-primary flex items-center justify-center mb-6 shadow-sm">
                <Mail className="w-8 h-8 md:w-10 md:h-10" />
              </div>

              <h3 className="text-text-primary text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
                Start a conversation
              </h3>
              <p className="text-text-secondary text-sm md:text-base font-normal mb-3">
                Have a project idea, opportunity, or collaboration in mind?
              </p>

              <span className="text-accent-primary text-lg md:text-xl font-bold tracking-tight mb-8 break-all">
                {profile.email}
              </span>

              <a
                href={`mailto:${profile.email}`}
                className="btn-primary w-full max-w-xs flex items-center justify-center gap-2 !py-3.5 text-base font-semibold"
              >
                <Send className="w-4 h-4" />
                <span>Reach Out Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
