import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Download,
  Award,
  BrainCircuit,
  Cpu,
  ShieldCheck,
  ZoomIn,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon } from './Icons';

const iconMap = {
  Award,
  BrainCircuit,
  Cpu,
  Github: GithubIcon,
  ShieldCheck,
};

export default function CertificateModal({ item, onClose }) {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!item) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const isBadge = Boolean(item.badge);
  const IconComp = iconMap[item.icon] || Award;
  const displayImage = item.previewImage || item.badge;
  const documentUrl = item.fileUrl || item.badge;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-900/65 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white border border-border-light rounded-[1.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] max-w-[960px] w-full max-h-[92vh] overflow-hidden relative flex flex-col my-auto"
        >
          {/* Modal Header */}
          <div className="bg-bg-alt border-b border-border-light px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-accent-light text-accent-primary flex items-center justify-center flex-shrink-0 border border-accent-mid/30">
                <IconComp className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-border-light text-accent-primary font-bold text-[0.7rem] uppercase tracking-wider">
                    <CheckCircle2 className="w-3 h-3 text-accent-primary" />
                    Verified Credential
                  </span>
                  {item.category && (
                    <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-text-muted font-medium text-[0.7rem]">
                      {item.category}
                    </span>
                  )}
                </div>
                <h3 className="text-text-primary text-lg md:text-xl font-bold tracking-tight truncate">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-xs md:text-sm font-medium">
                  {item.issuer}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {documentUrl && (
                <a
                  href={documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-primary text-white font-semibold text-xs md:text-sm shadow-sm hover:bg-accent-primary-hover transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Full Document</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white border border-border-light shadow-sm flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-base transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Preview Canvas */}
          <div className="p-4 sm:p-6 md:p-8 bg-slate-900/[0.03] overflow-y-auto max-h-[calc(92vh-150px)] flex flex-col items-center justify-center">
            {displayImage ? (
              <div className="relative group max-w-full flex flex-col items-center">
                <a
                  href={documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Click to view full original document"
                  className="block relative overflow-hidden rounded-xl border border-border-light shadow-md bg-white hover:shadow-xl transition-shadow cursor-zoom-in"
                >
                  <img
                    src={displayImage}
                    alt={item.title}
                    className={`max-h-[64vh] w-auto max-w-full object-contain ${
                      isBadge ? 'p-8 max-h-[48vh]' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-sm backdrop-blur-[2px]">
                    <ZoomIn className="w-5 h-5" />
                    <span>Click to open full original</span>
                  </div>
                </a>

                {/* Mobile action button */}
                {documentUrl && (
                  <div className="sm:hidden mt-4 w-full flex justify-center">
                    <a
                      href={documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-primary text-white font-semibold text-sm shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open Full Document</span>
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-text-muted text-sm py-12">
                Preview not available for this credential.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
