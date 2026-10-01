import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, title, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-white/10 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <span className="text-xs text-slate-400">Frontend Prototype Specification</span>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed py-2">
          <p>
            This website is a frontend-only demonstration and business presentation prototype for
            the <strong>SmartTags</strong> platform.
          </p>
          <p>
            Official legal policies (including GDPR Compliance Notices, Data Protection Officer details,
            and Operational Terms of Service) will be finalized prior to commercial deployment in the
            United Kingdom.
          </p>
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/5 text-xs text-slate-400">
            SmartTags is built on strict Privacy by Design principles. Vehicle phone numbers and personal
            identities remain entirely concealed behind the masking engine.
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
