import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onRequestPilot: () => void;
  onRegisterInterest: (type: string) => void;
  onOpenLegal: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onRequestPilot,
  onRegisterInterest,
  onOpenLegal,
}) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050811] text-slate-300 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-tight">
                SmartTags
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mt-1">
                “Reachable. Never Exposed.”
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-['Inter'] max-w-sm">
              Privacy-first NFC and QR contact technology for consumer vehicles, logistics fleets
              and yard operations.
            </p>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-1.5">
              <span>Engineered in Coventry, United Kingdom</span>
            </div>
          </div>

          {/* Group 1: PLATFORM */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-['Plus_Jakarta_Sans']">
              Platform
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a
                  href="#platform"
                  onClick={(e) => handleScroll(e, 'platform')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Consumer SmartTags
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => handleScroll(e, 'platform')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Fleet & Yard Operations
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => handleScroll(e, 'platform')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleScroll(e, 'how-it-works')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Group 2: COMPANY */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-['Plus_Jakarta_Sans']">
              Company
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScroll(e, 'about')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScroll(e, 'about')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Founder
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleScroll(e, 'faq')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onRequestPilot}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Group 3: GET STARTED */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-['Plus_Jakarta_Sans']">
              Get Started
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={onRequestPilot}
                  className="hover:text-cyan-300 transition-colors text-left flex items-center gap-1 text-cyan-400 font-semibold"
                >
                  <span>Request a Pilot</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onRegisterInterest('General Interest')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Register Interest
                </button>
              </li>
            </ul>
          </div>

          {/* Group 4: LEGAL */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-['Plus_Jakarta_Sans']">
              Legal
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenLegal('Privacy Policy');
                  }}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenLegal('Terms of Service');
                  }}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 SmartTags. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>UK Innovator Founder Visa Presentation Prototype</span>
            <span className="text-slate-400">·</span>
            <span>Frontend-Only Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
