import React from 'react';
import {
  ShieldCheck,
  QrCode,
  Radio,
  Lock,
  ArrowRight,
  CheckCircle2,
  Building2,
  Activity,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react';

interface HeroProps {
  onRequestPilot: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestPilot }) => {
  const handleScrollToPlatform = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('platform');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustBadges = [
    { title: 'Privacy-First Contact', icon: ShieldCheck },
    { title: 'NFC + QR Enabled', icon: Radio },
    { title: 'Consumer & Fleet Use', icon: Building2 },
    { title: 'Operational Analytics', icon: Activity },
    { title: 'UK-Focused Platform', icon: Layers },
  ];

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern border-b border-white/5"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/15 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-teal-500/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6 shadow-sm shadow-cyan-500/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>UK-Based Privacy-First Physical-to-Digital Platform</span>
            </div>

            {/* ONLY ONE H1 ON THE PAGE */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-tight">
              Reachable.{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                Never Exposed.
              </span>
            </h1>

            {/* Supporting Headline */}
            <h2 className="mt-5 text-xl sm:text-2xl font-semibold text-slate-200 tracking-tight">
              Privacy-first NFC & QR contact technology for vehicles, fleets and yard operations.
            </h2>

            {/* Supporting Copy */}
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-['Inter']">
              SmartTags helps people securely contact vehicle owners and drivers without exposing
              personal phone numbers. One tap or QR scan can create a protected communication
              route while generating useful interaction and operational data.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onRequestPilot}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </button>

              <a
                href="#platform"
                onClick={handleScrollToPlatform}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-cyan-500/30 shadow-sm transition-all duration-200"
              >
                <span>Explore the Platform</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Trust and Value Statements Badges */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 w-full">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Key Architectural Foundations
              </div>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {trustBadges.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-white/10 text-xs font-medium text-slate-300 shadow-sm hover:border-cyan-500/40 hover:text-white transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{badge.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Technology Illustration (SCAN → ROUTING → CONTACT → ANALYTICS) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-teal-500/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Main Visual Container */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-white/10 p-5 sm:p-6 shadow-2xl shadow-black/80 backdrop-blur-xl">
                {/* Visual Header / Process Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-xs font-mono text-slate-400 ml-2">SmartTags Protected Gateway</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-cyan-400 bg-cyan-950/70 px-2 py-0.5 rounded-full border border-cyan-800/40">
                    <Zap className="w-3 h-3 text-cyan-400" /> Live Demo Mode
                  </span>
                </div>

                {/* 1. Vehicle Windscreen & SmartTag Physical Edge Representation */}
                <div className="relative rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30 p-4 border border-cyan-500/20 overflow-hidden">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>1. Vehicle Windscreen Physical Edge</span>
                    <span className="text-cyan-400 text-[10px]">No App Required for Scanner</span>
                  </div>

                  {/* Windscreen Glass Mockup */}
                  <div className="relative h-32 rounded-lg bg-gradient-to-b from-sky-950/40 to-slate-900/80 border border-sky-400/20 flex items-center justify-between px-4 overflow-hidden">
                    {/* Windscreen reflection glare */}
                    <div className="absolute -top-10 -right-10 w-44 h-44 bg-cyan-400/5 rotate-45 pointer-events-none" />

                    {/* Windscreen Tag Badge */}
                    <div className="flex items-center gap-3 bg-slate-900/90 border border-cyan-400/50 p-2.5 rounded-xl shadow-lg shadow-cyan-500/10">
                      <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center relative">
                        <QrCode className="w-6 h-6 text-cyan-300" />
                        <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-400"></span>
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                          <span>ST-UK-9842</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">NFC+QR</span>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Asset: HGV Bay #04 / Logistics</div>
                      </div>
                    </div>

                    {/* Tap / Scan Interaction Badge */}
                    <div className="flex flex-col items-end">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-500/40 animate-pulse">
                        <Radio className="w-3.5 h-3.5" />
                        <span>Instant Tap / Scan</span>
                      </div>
                      <span className="text-[9px] text-slate-400 mt-1">Browser-native launch</span>
                    </div>
                  </div>
                </div>

                {/* Vertical Process Connection */}
                <div className="flex justify-center my-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-3 bg-gradient-to-b from-cyan-400 to-blue-500" />
                    <span className="text-[10px] font-mono text-cyan-400 bg-slate-900 px-2 py-0.5 rounded-full border border-cyan-500/30">
                      SCAN → SECURE ROUTING
                    </span>
                    <div className="w-0.5 h-3 bg-gradient-to-b from-blue-500 to-indigo-500" />
                  </div>
                </div>

                {/* 2. Identity Masking Engine (Personal Number Completely Hidden) */}
                <div className="rounded-xl bg-slate-900/90 border border-blue-500/30 p-4 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold text-white">Identity & Number Masking Engine</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-500/30">
                      100% Protected
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-950/60 p-2.5 rounded-lg border border-white/5">
                      <div className="text-[10px] text-slate-400">Scanner Sees</div>
                      <div className="font-semibold text-slate-300 mt-0.5 flex items-center gap-1">
                        <span>SmartTags Protected</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">Direct Web Dispatch</div>
                    </div>
                    <div className="bg-slate-950/60 p-2.5 rounded-lg border border-white/5">
                      <div className="text-[10px] text-slate-400">Real Driver Number</div>
                      <div className="font-mono font-bold text-emerald-400 mt-0.5 tracking-wider">
                        +44 7••• ••••••
                      </div>
                      <div className="text-[10px] text-emerald-300/80 mt-1">Never Exposed to Public</div>
                    </div>
                  </div>
                </div>

                {/* Vertical Process Connection */}
                <div className="flex justify-center my-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-3 bg-gradient-to-b from-indigo-500 to-teal-500" />
                    <span className="text-[10px] font-mono text-teal-400 bg-slate-900 px-2 py-0.5 rounded-full border border-teal-500/30">
                      CONTACT → OPERATIONAL ANALYTICS
                    </span>
                    <div className="w-0.5 h-3 bg-gradient-to-b from-teal-500 to-cyan-500" />
                  </div>
                </div>

                {/* 3. Operational Analytics Telemetry (Fleet / Depot Context) */}
                <div className="rounded-xl bg-slate-900/90 border border-teal-500/30 p-3.5">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-teal-400" />
                      Fleet & Yard Analytics Stream
                    </span>
                    <span className="text-[10px] text-slate-400">Depot Hub: Coventry UK</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-slate-950/70 p-2 rounded-lg border border-white/5">
                      <div className="text-[10px] text-slate-400">Routing Latency</div>
                      <div className="text-xs font-bold text-cyan-300 font-mono mt-0.5">&lt; 1.4s</div>
                    </div>
                    <div className="bg-slate-950/70 p-2 rounded-lg border border-white/5">
                      <div className="text-[10px] text-slate-400">Driver Response</div>
                      <div className="text-xs font-bold text-teal-300 font-mono mt-0.5">3.8 mins</div>
                    </div>
                    <div className="bg-slate-950/70 p-2 rounded-lg border border-white/5">
                      <div className="text-[10px] text-slate-400">Dwell Efficiency</div>
                      <div className="text-xs font-bold text-emerald-300 font-mono mt-0.5">+42%</div>
                    </div>
                  </div>
                </div>

                {/* Architecture Clarity Badge (Strict Compliance: NOT GPS) */}
                <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Privacy-First Architecture
                  </span>
                  <span className="text-slate-400">Zero location tracking · Zero GPS hardware</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
