import React from 'react';
import { X, ShieldCheck, Sparkles } from 'lucide-react';

interface InterestModalProps {
  isOpen: boolean;
  type: string;
  onClose: () => void;
}

export const InterestModal: React.FC<InterestModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-white/10 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
            <Sparkles className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-bold text-white mb-2">Register Interest: {type}</h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            We are preparing the initial production batch of UK SmartTags. If you represent an
            organisation or want an early consumer tag allocation, you can submit a pilot inquiry
            or join the release notification list.
          </p>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 text-xs text-slate-400 text-left mb-6 space-y-2">
            <div className="flex items-center gap-2 text-slate-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Commercial Presentation Prototype</span>
            </div>
            <div>
              Physical SmartTag hardware and UK carrier masking routes will be announced as part of
              Phase 1 commercial onboarding.
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 rounded-xl font-bold text-xs text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-md transition-all cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
