import React, { useState } from 'react';
import {
  Tag,
  KeyRound,
  Send,
  ShieldAlert,
  Truck,
  LineChart,
  CreditCard,
  Smartphone,
  Database,
  CheckCircle2,
  Clock,
  Lock,
  Radio,
} from 'lucide-react';

export const Platform: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'roadmap'>('architecture');

  const modules = [
    {
      id: 1,
      title: 'Tag Provisioning & Lifecycle Management',
      icon: Tag,
      badge: 'Core Foundation',
      description:
        'Handles manufacturing batch identifiers, tag activation, re-assignment between vehicles or drivers, deactivation and replacement of lost or damaged tags.',
    },
    {
      id: 2,
      title: 'Identity & Masking Engine',
      icon: KeyRound,
      badge: 'Privacy Core',
      description:
        'The platform core that resolves scanned SmartTags to the correct owner or fleet driver while keeping real contact information protected within the privacy layer.',
    },
    {
      id: 3,
      title: 'Notification Routing',
      icon: Send,
      badge: 'Multi-Channel',
      description:
        'Routes protected communication through supported channels including SMS, masked voice calling, WhatsApp and push notifications, with support for retry and offline message queuing in later phases.',
    },
    {
      id: 4,
      title: 'Fraud & Abuse Detection',
      icon: ShieldAlert,
      badge: 'Trust & Safety',
      description:
        'Analyses scan and contact behaviour for unusual activity, applies rate limits where necessary and supports human Trust & Safety review of suspicious usage patterns.',
    },
    {
      id: 5,
      title: 'Fleet & Yard Operations',
      icon: Truck,
      badge: 'B2B Operations',
      description:
        'Provides multi-tag depot management, driver directories, vehicle or driver assignment, dwell-time analytics, responsiveness insights and recurring congestion analysis for business accounts.',
    },
    {
      id: 6,
      title: 'Analytics & BI Dashboards',
      icon: LineChart,
      badge: 'Operational BI',
      description:
        'Transforms interaction data into useful reporting, including owner activity history and fleet operational KPIs such as response time, usage behaviour and dwell-time information.',
    },
    {
      id: 7,
      title: 'Billing & Subscription',
      icon: CreditCard,
      badge: 'Commercial Hub',
      description:
        'Supports the planned commercial structure including one-time tag purchases, optional consumer subscriptions, fleet licences and analytics add-ons.',
    },
    {
      id: 8,
      title: 'Owner Web & Mobile Experience',
      icon: Smartphone,
      badge: 'User Portal',
      description:
        'The customer-facing environment for tag registration, contact preferences, emergency or secondary contact configuration and activity review.',
    },
  ];

  return (
    <section id="platform" className="py-24 bg-[#070b14] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <span>Modular Platform Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans']">
            One Platform. Eight Connected Modules.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-['Inter']">
            SmartTags is designed as a modular platform where each functional component connects
            through a central data layer rather than operating as an isolated system.
          </p>
        </div>

        {/* 8 Connected Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                className="glass-panel p-6 rounded-2xl border-white/10 hover:border-cyan-500/40 glass-panel-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                      Module 0{mod.id}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {mod.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">{mod.badge}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Platform Flow Diagram (With Fraud & Abuse alongside) */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-10 mb-24 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Central Platform Event Flow</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              End-to-end data pipeline connecting physical NFC/QR interaction to secure contact and operational intelligence.
            </p>
          </div>

          {/* Main Pipeline Horizontal Flow on Desktop, Stacking on Mobile */}
          <div className="relative">
            {/* Horizontal flow line */}
            <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/40 to-teal-500/20 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
              {/* Step 1 */}
              <div className="bg-slate-950/90 border border-cyan-500/30 p-3.5 rounded-xl text-center flex flex-col items-center shadow-lg">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 mb-2">
                  <Radio className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-white">NFC / QR Tag</div>
                <div className="text-[10px] text-slate-400 mt-1">Physical Scan</div>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-950/90 border border-slate-700 p-3.5 rounded-xl text-center flex flex-col items-center shadow-lg">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 mb-2">
                  <Tag className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-white">Tag Provisioning</div>
                <div className="text-[10px] text-slate-400 mt-1">Lifecycle Validated</div>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-950/90 border border-blue-500/40 p-3.5 rounded-xl text-center flex flex-col items-center shadow-lg">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300 mb-2">
                  <Lock className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-white">Identity Masking</div>
                <div className="text-[10px] text-blue-300 mt-1">Privacy Layer</div>
              </div>

              {/* Step 4 */}
              <div className="bg-slate-950/90 border border-slate-700 p-3.5 rounded-xl text-center flex flex-col items-center shadow-lg">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 mb-2">
                  <Send className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-white">Notification Routing</div>
                <div className="text-[10px] text-slate-400 mt-1">SMS / Channels</div>
              </div>

              {/* Step 5 */}
              <div className="bg-slate-950/90 border border-emerald-500/40 p-3.5 rounded-xl text-center flex flex-col items-center shadow-lg">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300 mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-white">Secure Contact</div>
                <div className="text-[10px] text-emerald-300 mt-1">Zero Exposure</div>
              </div>

              {/* Step 6 */}
              <div className="bg-slate-950/90 border border-cyan-500/30 p-3.5 rounded-xl text-center flex flex-col items-center shadow-lg">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 mb-2">
                  <Database className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-white">Central Data Platform</div>
                <div className="text-[10px] text-cyan-300 mt-1">Unified Data Layer</div>
              </div>

              {/* Step 7 */}
              <div className="bg-slate-950/90 border border-teal-500/40 p-3.5 rounded-xl text-center flex flex-col items-center shadow-lg sm:col-span-2 lg:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-300 mb-2">
                  <LineChart className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-white">Dashboards & BI</div>
                <div className="text-[10px] text-teal-300 mt-1">Fleet & Consumer</div>
              </div>
            </div>

            {/* Fraud & Abuse Detection Working Alongside Event Flow */}
            <div className="mt-6 pt-5 border-t border-slate-800">
              <div className="bg-gradient-to-r from-amber-950/30 via-slate-950 to-amber-950/30 border border-amber-500/30 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span>Fraud & Abuse Detection Engine</span>
                      <span className="text-[10px] font-mono uppercase bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                        Parallel Monitor
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">
                      Continuously evaluates scan rates, origin entropy, contact velocity, and flags anomalous spikes for Trust & Safety review.
                    </div>
                  </div>
                </div>
                <div className="shrink-0 flex items-center gap-2 text-xs font-medium text-amber-300 bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-500/20">
                  <span>Dynamic Rate Limiting Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Tabs: Architecture Layers vs Practical Roadmap */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('architecture')}
              type="button"
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'architecture'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Platform Architecture (Privacy by Design)
            </button>
            <button
              onClick={() => setActiveTab('roadmap')}
              type="button"
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'roadmap'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Practical Phases (MVP Roadmap)
            </button>
          </div>
        </div>

        {/* TAB 1: Platform Architecture (Privacy by Design - 5 Technical Layers in plain language) */}
        {activeTab === 'architecture' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-white">Built Around Privacy by Design</h3>
              <p className="text-sm text-slate-400 mt-1">
                Five simple, integrated layers engineered to separate identification from communication.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Layer 1 */}
              <div className="glass-panel p-6 rounded-2xl border-white/10">
                <div className="text-cyan-400 font-mono text-xs font-bold uppercase mb-2">Layer 01</div>
                <h4 className="text-lg font-bold text-white mb-2">Physical & Edge Layer</h4>
                <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
                  The physical interface placed on the asset or vehicle windscreen.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    High-durability NFC microchip
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    High-contrast printed QR fallback
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Cryptographically unique tag identifier
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Weather-resistant, UV-stable physical format
                  </li>
                </ul>
              </div>

              {/* Layer 2 */}
              <div className="glass-panel p-6 rounded-2xl border-cyan-500/20 bg-cyan-950/10">
                <div className="text-cyan-400 font-mono text-xs font-bold uppercase mb-2">Layer 02</div>
                <h4 className="text-lg font-bold text-white mb-2">Identity & Masking Layer</h4>
                <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
                  The privacy barrier between the public scanner and the vehicle owner.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Resolves scanned tag to account
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Manages granular privacy & contact controls
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Keeps real telephone numbers strictly concealed
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Zero personal profile data returned to scanner
                  </li>
                </ul>
              </div>

              {/* Layer 3 */}
              <div className="glass-panel p-6 rounded-2xl border-white/10">
                <div className="text-cyan-400 font-mono text-xs font-bold uppercase mb-2">Layer 03</div>
                <h4 className="text-lg font-bold text-white mb-2">Notification & Routing Layer</h4>
                <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
                  Delivers messages securely across modern telecom channels.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    SMS-based notifications (MVP core)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Masked two-way voice routing (Roadmap)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    WhatsApp business routing (Roadmap)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Offline message queuing & retry logic
                  </li>
                </ul>
              </div>

              {/* Layer 4 */}
              <div className="glass-panel p-6 rounded-2xl border-white/10">
                <div className="text-teal-400 font-mono text-xs font-bold uppercase mb-2">Layer 04</div>
                <h4 className="text-lg font-bold text-white mb-2">Intelligence & Analytics Layer</h4>
                <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
                  Converts physical contact events into operational intelligence.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    Cryptographic event logging & timestamping
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    Anomaly detection & abuse scoring
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    Driver response latency tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    Depot dwell-time metrics & BI reporting
                  </li>
                </ul>
              </div>

              {/* Layer 5 */}
              <div className="glass-panel p-6 rounded-2xl border-white/10 md:col-span-2 lg:col-span-2">
                <div className="text-blue-400 font-mono text-xs font-bold uppercase mb-2">Layer 05</div>
                <h4 className="text-lg font-bold text-white mb-2">Platform & Integration Layer</h4>
                <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
                  The scalable cloud backend, customer interfaces, and future enterprise connectors.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Cloud infrastructure & data pipelines
                  </div>
                  <div className="flex items-center gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Consumer preference & emergency centre
                  </div>
                  <div className="flex items-center gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Fleet depot console & driver directory
                  </div>
                  <div className="flex items-center gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Billing & future partner TMS integrations
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MVP Roadmap (Built in Practical Phases) */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-white">Built in Practical Phases</h3>
              <p className="text-sm text-slate-400 mt-1">
                A disciplined engineering plan distinguishing the active MVP baseline from planned B2B iterations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Phase 1 / MVP */}
              <div className="rounded-2xl bg-gradient-to-b from-cyan-950/40 via-slate-900 to-slate-950 p-6 border-2 border-cyan-400/80 relative shadow-xl shadow-cyan-500/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-400 text-slate-950">
                    Phase 1 / MVP
                  </span>
                  <span className="text-[11px] font-semibold text-cyan-300">Active Scope</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">Consumer & Core Engine</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>One consumer tag SKU (NFC + QR)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Web-based owner registration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>SMS-based notification routing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Owner preference centre</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Basic tag provisioning engine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Identity and masking core</span>
                  </li>
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl bg-slate-900/60 p-6 border border-white/10 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
                    Phase 2
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">Planned Roadmap</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">Multi-Channel Routing</h4>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>Masked voice calling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>WhatsApp secure routing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>Offline message queuing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>Consumer anomaly & abuse scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>Expanded push notifications</span>
                  </li>
                </ul>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl bg-slate-900/60 p-6 border border-white/10 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-950/80 text-teal-300 border border-teal-500/30">
                    Phase 3
                  </span>
                  <span className="text-[11px] font-semibold text-teal-400">Planned Fleet B2B</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">Fleet & Yard Operations</h4>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Fleet & Yard Operations module</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Multi-tag depot management console</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Driver directory & roster</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Manual tag-to-driver assignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Depot dwell-time analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Fleet operational KPI dashboards</span>
                  </li>
                </ul>
              </div>

              {/* Phase 4 / Later */}
              <div className="rounded-2xl bg-slate-900/60 p-6 border border-white/10 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
                    Phase 4
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">Future Capability</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">Enterprise Integrations</h4>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>Analytics-as-a-Service tier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>Advanced BI reporting & data exports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>TMS (Transport Management) integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>Telematics & dispatch connectors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>Campus & managed property expansion</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 text-center text-xs text-slate-400">
              <span className="text-cyan-400 font-semibold">Strict Commercial Clarity:</span> Phases 2, 3, and 4 represent the active engineering roadmap and are not positioned as already operational.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
