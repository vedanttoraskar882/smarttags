import React from 'react';
import {
  UserCheck,
  Truck,
  ArrowRight,
  MapPin,
  CheckCircle,
  XCircle,
  Briefcase,
  Cpu,
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0f1d] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <span>The Communication & Privacy Dilemma</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans']">
            Contact Without Compromising Privacy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-['Inter']">
            Vehicle owners often face a difficult trade-off: remain unreachable when someone needs
            to contact them, or display a personal phone number publicly.
          </p>
        </div>

        {/* Narrative Problem Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl border-white/5 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-slate-300 mb-4 font-mono font-bold">
              01
            </div>
            <h3 className="text-base font-bold text-white mb-2">The Handwritten Note</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              A handwritten note on a dashboard is private, but slow and inefficient. It offers no
              reliable confirmation of receipt and cannot adapt when circumstances change.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border-white/5 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4 font-mono font-bold">
              02
            </div>
            <h3 className="text-base font-bold text-white mb-2">Exposed Mobile Numbers</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Displaying a mobile number is fast, but permanently exposes personal information to
              anyone passing by, introducing unsolicited calls, scam targets, and safety risks.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border-white/5 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 font-mono font-bold">
              03
            </div>
            <h3 className="text-base font-bold text-white mb-2">Yard Operational Friction</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Inside logistics depots and warehouse yards, reaching a specific driver depends on
              radios, manual paper manifests, calls to the transport office, or walking the yard.
            </p>
          </div>
        </div>

        {/* Comparison Visual: Traditional vs SmartTags Contact */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">The Contact Flow Comparison</h3>
            <p className="text-sm text-slate-400 mt-1">
              SmartTags is designed to create a secure middle layer between identification and communication.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* TRADITIONAL CONTACT */}
            <div className="rounded-2xl bg-gradient-to-b from-rose-950/20 via-slate-900/60 to-slate-950 p-6 sm:p-8 border border-rose-500/30 relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-rose-500/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white uppercase tracking-wider">Traditional Contact</h4>
                    <span className="text-xs text-rose-300">Vulnerable & Uncontrolled Exposure</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  High Risk
                </span>
              </div>

              {/* Flow Steps */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 bg-slate-950/60 p-3.5 rounded-xl border border-rose-500/10">
                  <div className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center text-xs font-mono font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Vehicle Issue Arises</div>
                    <div className="text-xs text-slate-400">Blocked bay, open window, hazard or parking concern</div>
                  </div>
                </div>

                <div className="flex justify-center text-rose-400/50">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                <div className="flex items-start gap-3.5 bg-slate-950/60 p-3.5 rounded-xl border border-rose-500/20">
                  <div className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center text-xs font-mono font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-rose-300">Phone Number Displayed Publicly</div>
                    <div className="text-xs text-slate-400">Mobile number placed on dashboard or handwritten sheet</div>
                  </div>
                </div>

                <div className="flex justify-center text-rose-400/50">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                <div className="flex items-start gap-3.5 bg-slate-950/60 p-3.5 rounded-xl border border-rose-500/20">
                  <div className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center text-xs font-mono font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-rose-300">Owner Exposed</div>
                    <div className="text-xs text-slate-400">Anyone in public can photograph, store, or share private contact details</div>
                  </div>
                </div>

                <div className="flex justify-center text-rose-400/50">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                <div className="flex items-start gap-3.5 bg-rose-950/40 p-3.5 rounded-xl border border-rose-500/30">
                  <div className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-mono font-bold mt-0.5">
                    4
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-rose-200">Privacy, Misuse & Harassment Risk</div>
                    <div className="text-xs text-rose-300/80">Permanent spam, personal vulnerability, and zero operational logging</div>
                  </div>
                </div>
              </div>
            </div>

            {/* SMARTTAGS CONTACT */}
            <div className="rounded-2xl bg-gradient-to-b from-cyan-950/30 via-slate-900/60 to-slate-950 p-6 sm:p-8 border border-cyan-500/40 relative shadow-xl shadow-cyan-500/5">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-cyan-500/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white uppercase tracking-wider">SmartTags Contact</h4>
                    <span className="text-xs text-cyan-300">Protected Physical-to-Digital Bridge</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  Privacy-First
                </span>
              </div>

              {/* Flow Steps */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 bg-slate-950/60 p-3.5 rounded-xl border border-cyan-500/10">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xs font-mono font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Vehicle Issue Arises</div>
                    <div className="text-xs text-slate-400">Blocked bay, open window, hazard or parking concern</div>
                  </div>
                </div>

                <div className="flex justify-center text-cyan-400/50">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                <div className="flex items-start gap-3.5 bg-slate-950/60 p-3.5 rounded-xl border border-cyan-500/20">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xs font-mono font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-cyan-300">NFC Tap or QR Scan</div>
                    <div className="text-xs text-slate-400">Immediate browser-based interaction without downloading any app</div>
                  </div>
                </div>

                <div className="flex justify-center text-cyan-400/50">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                <div className="flex items-start gap-3.5 bg-slate-950/60 p-3.5 rounded-xl border border-cyan-500/20">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xs font-mono font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-cyan-300">Secure SmartTags Routing</div>
                    <div className="text-xs text-slate-400">Platform resolves identity, validates rate limits & dispatches notification</div>
                  </div>
                </div>

                <div className="flex justify-center text-cyan-400/50">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                <div className="flex items-start gap-3.5 bg-cyan-950/40 p-3.5 rounded-xl border border-cyan-500/40">
                  <div className="w-6 h-6 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center text-xs font-mono font-bold mt-0.5">
                    4
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-cyan-200">Owner Contacted Privately</div>
                    <div className="text-xs text-cyan-300/80">Personal number remains 100% hidden; event logged for operational insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Major Use Case Cards: Consumer vs Business */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* FOR INDIVIDUAL DRIVERS */}
          <div className="glass-panel p-8 rounded-2xl border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    Consumer Solution
                  </span>
                  <h3 className="text-2xl font-bold text-white">For Individual Drivers</h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Privacy-preserving vehicle contact giving peace of mind whenever you park on public
                roads, residential bays, or unfamiliar areas.
              </p>

              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Designed for situations such as:
                </div>
                {[
                  'Blocked access or obstructed driveways',
                  'Vehicle lights left on draining battery',
                  'Parking courtesy in congested urban neighbourhoods',
                  'Minor incidents, scratches or parking scrapes',
                  'Urgent vehicle relocation or security alerts',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Physical SmartTag on Windscreen</span>
              <span className="text-cyan-400 font-semibold">Instant SMS dispatch</span>
            </div>
          </div>

          {/* FOR BUSINESSES */}
          <div className="glass-panel p-8 rounded-2xl border-white/10 hover:border-teal-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                    B2B Operations
                  </span>
                  <h3 className="text-2xl font-bold text-white">For Businesses</h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Fleet & Yard Operations tailored for UK logistics hubs, depots, and transport yards
                where rapid communication drives turnaround speed.
              </p>

              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Purpose-built for operational environments:
                </div>
                {[
                  'Logistics depots and distribution cross-docks',
                  'Warehouses and fulfilment sorting facilities',
                  'Haulage yards and container freight stations',
                  'Multi-driver and shared tractor unit environments',
                  'Agency driver and transient crew environments',
                  'Subcontracted driver operations and 3PL partners',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Depot Console & Dwell Telemetry</span>
              <span className="text-teal-400 font-semibold">Zero Radio Chatter</span>
            </div>
          </div>
        </div>

        {/* FOUNDER SUBSECTION */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 blur-[100px] pointer-events-none" />

          {/* Heading */}
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Founder & Industry Provenance</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans']">
              Built from Real Operational Experience
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Founder Bio Profile */}
            <div className="lg:col-span-4 bg-slate-900/80 p-6 sm:p-7 rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold text-white">Vishnu Padmakumar</h4>
              <div className="text-cyan-400 text-sm font-semibold mt-1">Founder & Technical Lead</div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Coventry, United Kingdom</span>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Professional Experience:</span>
                  <span className="font-semibold text-white">7+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Core Domain:</span>
                  <span className="font-semibold text-cyan-300">Logistics Data & BI</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Platform Ownership:</span>
                  <span className="font-semibold text-white">Architecture & Analytics</span>
                </div>
              </div>
            </div>

            {/* Right Narrative & Corporate Background */}
            <div className="lg:col-span-8 space-y-6">
              <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  SmartTags is led by <strong className="text-white">Vishnu Padmakumar</strong>, a
                  Coventry-based data and software professional with more than seven years of
                  experience across logistics analytics, cloud data engineering and business
                  intelligence.
                </p>
                <p>
                  His experience at <strong className="text-white">DHL</strong> and{' '}
                  <strong className="text-white">Ceva Logistics</strong> provides direct exposure to
                  warehouse, depot and yard communication challenges, while his previous engineering
                  experience at <strong className="text-white">Allianz Technology</strong> supports
                  the platform’s data, automation and anomaly-detection capabilities.
                </p>
                <p className="text-slate-400 text-sm">
                  The Fleet & Yard Operations idea was born directly from first-hand observation of
                  costly bottlenecks inside UK freight yards—where finding a driver often meant
                  wasting 15 to 30 minutes walking between vehicle bays or shouting over radios.
                </p>
              </div>

              {/* Verified Career Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-950/70 p-4 rounded-xl border border-white/5">
                  <div className="text-xs font-bold text-cyan-400">DHL</div>
                  <div className="text-xs text-white font-medium mt-0.5">Operations Data Analyst</div>
                  <div className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                    Warehouse performance analytics, productivity monitoring, scan accuracy,
                    operational KPI dashboards & planning automation.
                  </div>
                </div>

                <div className="bg-slate-950/70 p-4 rounded-xl border border-white/5">
                  <div className="text-xs font-bold text-teal-400">Ceva Logistics</div>
                  <div className="text-xs text-white font-medium mt-0.5">Data Admin / Inventory Analyst</div>
                  <div className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                    WMS management, inventory reconciliation, operational reporting automation,
                    and yard data quality.
                  </div>
                </div>

                <div className="bg-slate-950/70 p-4 rounded-xl border border-white/5">
                  <div className="text-xs font-bold text-blue-400">Allianz Technology</div>
                  <div className="text-xs text-white font-medium mt-0.5">Software Engineer</div>
                  <div className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                    End-to-end ETL pipelines, financial anomaly detection, data cleansing, Power
                    BI, Tableau and automated workflows.
                  </div>
                </div>
              </div>

              {/* Technical Stack Tags & Operational Boundary Note */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-semibold text-slate-400 mb-2">
                  Technical Foundation & Stack Expertise:
                </div>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {['Python', 'SQL', 'Power BI', 'Tableau', 'Kafka', 'Spark', 'AWS', 'Azure', 'ETL Pipelines', 'Anomaly Detection', 'Real-Time Analytics'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <div className="mt-4 p-3.5 rounded-xl bg-slate-950/80 border border-cyan-500/20 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Clear Operational Boundary:</strong> Core founder
                    responsibilities encompass platform architecture, data engineering, analytics,
                    and notification routing. Physical tag manufacturing and telecom/masking carrier
                    infrastructure are strategically outsourced to vetted tier-one specialists.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
