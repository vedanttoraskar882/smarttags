import React, { useState } from 'react';
import {
  QrCode,
  Smartphone,
  ShieldCheck,
  Send,
  BarChart,
  ArrowRight,
  RotateCw,
  CheckCircle,
  Truck,
  Eye,
} from 'lucide-react';
import { PilotForm } from './PilotForm';
import { StoredRequestsModal } from './StoredRequestsModal';

interface HowItWorksProps {
  onRequestPilotModal?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = () => {
  const [showStoredModal, setShowStoredModal] = useState(false);

  const steps = [
    {
      num: '01',
      title: 'Attach the SmartTag',
      desc: 'A registered NFC and QR-enabled SmartTag is placed on the vehicle or relevant asset.',
      icon: QrCode,
      color: 'from-cyan-500/20 to-blue-500/20',
      border: 'border-cyan-500/40',
    },
    {
      num: '02',
      title: 'Tap or Scan',
      desc: 'A person taps the NFC tag or scans the QR code using their smartphone. No dedicated app should be required for the scanning party.',
      icon: Smartphone,
      color: 'from-blue-500/20 to-indigo-500/20',
      border: 'border-blue-500/40',
    },
    {
      num: '03',
      title: 'Secure Identity Resolution',
      desc: 'The platform validates the tag and securely resolves it to the correct vehicle owner or fleet driver.',
      icon: ShieldCheck,
      color: 'from-teal-500/20 to-emerald-500/20',
      border: 'border-teal-500/40',
    },
    {
      num: '04',
      title: 'Protected Communication',
      desc: 'SmartTags routes the interaction using the owner’s configured communication settings. The real personal number remains hidden.',
      icon: Send,
      color: 'from-cyan-500/20 to-teal-500/20',
      border: 'border-cyan-500/40',
    },
    {
      num: '05',
      title: 'Event Logged & Analysed',
      desc: 'The platform records the interaction for activity history, analytics, anomaly monitoring and, where relevant, fleet operational reporting.',
      icon: BarChart,
      color: 'from-indigo-500/20 to-purple-500/20',
      border: 'border-indigo-500/40',
    },
  ];

  const fleetSteps = [
    'Vehicle or driver is assigned a SmartTag',
    'Yard staff scans the tag',
    'SmartTags identifies the relevant driver',
    'Secure communication is routed',
    'Driver responds or relocates the vehicle',
    'Interaction is timestamped',
    'Dashboard updates',
    'Repeated interactions generate useful operational insights',
  ];

  const loopNodes = [
    'TAG VEHICLE',
    'SCAN',
    'CONTACT DRIVER',
    'DRIVER RESPONDS',
    'EVENT TIMESTAMPED',
    'DASHBOARD UPDATED',
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0a0f1d] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <span>Seamless Interaction Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans']">
            From Scan to Secure Contact in Seconds
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-['Inter']">
            Experience how the platform connects physical assets to privacy-shielded communication
            without friction or app store downloads.
          </p>
        </div>

        {/* Visually Connected 5-Step Workflow */}
        <div className="relative mb-24">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-cyan-500/30 via-blue-500/40 to-teal-500/30 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} border ${step.border} flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform shadow-md`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-sm font-extrabold text-slate-400 group-hover:text-cyan-400 transition-colors">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Step 0{idx + 1} of 05</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SUBSECTION: How Fleet & Yard Operations Works */}
        <div className="rounded-3xl bg-slate-900/90 border border-white/10 p-8 sm:p-12 mb-24 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-3">
              <Truck className="w-3.5 h-3.5" />
              <span>B2B Operational Mechanics</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans']">
              How Fleet & Yard Operations Works
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Transforming chaotic depot parking into a structured, accountable operational cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: 8-Step Sequential Workflow */}
            <div className="lg:col-span-6 space-y-3">
              {fleetSteps.map((stepText, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-white/5 hover:border-teal-500/30 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-300 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">{stepText}</span>
                </div>
              ))}
            </div>

            {/* Right: Operational Loop Visual */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-teal-500/30 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-teal-500/20">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center gap-2">
                    <RotateCw className="w-4 h-4 text-teal-400 animate-spin" style={{ animationDuration: '10s' }} />
                    Continuous Operational Loop
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                    Cycle 24/7
                  </span>
                </div>

                {/* Looping chain nodes */}
                <div className="space-y-3">
                  {loopNodes.map((node, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-900 border border-teal-500/20 text-xs font-bold text-slate-100 font-mono shadow-sm">
                        <span className="text-teal-400 text-[11px]">0{i + 1}</span>
                        <span>{node}</span>
                        <CheckCircle className="w-3.5 h-3.5 text-teal-400" />
                      </div>
                      {i < loopNodes.length - 1 && (
                        <div className="h-3 w-0.5 bg-gradient-to-b from-teal-400/80 to-teal-500/30 my-0.5" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Loop return indicator */}
                <div className="mt-4 pt-3 border-t border-teal-500/20 text-center">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-300">
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Drives Continuous Fleet & Yard Optimization ↺</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* REQUEST A PILOT SECTION (Embedded & High-Visibility Area) */}
        <div id="request-pilot" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
                  <span>Start Your Trial Deployment</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans'] leading-tight">
                  See SmartTags in Your Operation
                </h3>
                <p className="mt-4 text-base text-slate-300 leading-relaxed font-['Inter']">
                  Interested in privacy-first vehicle contact or testing SmartTags within a fleet,
                  depot or yard environment? Submit your details to request a pilot conversation.
                </p>

                <div className="mt-8 space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <strong className="text-white">UK-Centric Logistics Validation:</strong> Tailored
                      to British freight hubs, haulage corridors, and municipal depots.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <strong className="text-white">Zero App Installation:</strong> Gate staff and
                      marshals scan directly with standard smartphone cameras or NFC readers.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <strong className="text-white">Auditable Privacy Standards:</strong> Complies with
                      rigorous contact masking requirements and avoids GPS tracking controversy.
                    </div>
                  </div>
                </div>
              </div>

              {/* Stored Requests Viewer Button (Allows live review of localStorage entries) */}
              <div className="mt-10 pt-6 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setShowStoredModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>Inspect Local Submissions (localStorage inspector)</span>
                </button>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7">
              <PilotForm />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Inspector for Saved Submissions */}
      {showStoredModal && (
        <StoredRequestsModal onClose={() => setShowStoredModal(false)} />
      )}
    </section>
  );
};
