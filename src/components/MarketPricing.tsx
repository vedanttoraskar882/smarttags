import React from 'react';
import {
  Users,
  Building2,
  CheckCircle2,
  TrendingUp,
  Tag,
  Sparkles,
  BarChart4,
  Store,
} from 'lucide-react';

interface MarketPricingProps {
  onRequestPilot: () => void;
  onRegisterInterest: (type: string) => void;
}

export const MarketPricing: React.FC<MarketPricingProps> = ({
  onRequestPilot,
  onRegisterInterest,
}) => {
  const revenueStreams = [
    {
      num: '01',
      title: 'SmartTag Hardware Sales',
      desc: 'One-time consumer SmartTag purchase covering the physical NFC + QR tag and lifetime activation.',
      icon: Tag,
    },
    {
      num: '02',
      title: 'Consumer Subscription',
      desc: 'Optional recurring premium functionality (SmartTags Plus) for multiple contacts and priority routing.',
      icon: Sparkles,
    },
    {
      num: '03',
      title: 'Fleet & Yard Licence',
      desc: 'Recurring B2B software licence charged per depot or fleet account based on tag volume and driver rosters.',
      icon: Building2,
    },
    {
      num: '04',
      title: 'Analytics Add-On',
      desc: 'Optional enterprise tier delivering deep operational KPI reports, raw data exports, and future TMS connectors.',
      icon: BarChart4,
    },
    {
      num: '05',
      title: 'Retail & Marketplace Partnerships',
      desc: 'Wholesale margin and distribution revenue on physical tags sold through automotive retailers and digital marketplaces.',
      icon: Store,
    },
  ];

  return (
    <section id="market-pricing" className="py-24 bg-[#070b14] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <span>Market Opportunity & Commercial Structure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans']">
            Built for Drivers Today. Built for Operations Tomorrow.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-['Inter']">
            Addressing immediate consumer privacy vulnerabilities while scaling into high-frequency
            commercial transport and depot management.
          </p>
        </div>

        {/* Market Overview: Consumer vs B2B Market */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Consumer Market */}
          <div className="glass-panel p-8 rounded-2xl border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    B2C Demographic
                  </span>
                  <h3 className="text-2xl font-bold text-white">Consumer Market</h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Target users include UK vehicle owners who regularly navigate congested or shared
                parking spaces and demand reliable reachability without revealing private phone
                numbers.
              </p>

              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  High-frequency parking environments:
                </div>
                {[
                  'Shared residential streets and permit-controlled zones',
                  'High-density streets with constrained roadside parking',
                  'Shared private driveways and tandem parking bays',
                  'Multi-storey car parks and commercial parking decks',
                  'Retail car parks and shopping centre visitor parking',
                  'Major sports and event arena temporary parking',
                  'Unfamiliar urban streets and roadside overnight stops',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200/90 leading-relaxed">
                <strong>Privacy-Conscious Driver Focus:</strong> Another key consumer segment includes
                individual drivers, sole tradespeople, and motorists who prioritize personal safety
                and refuse to leave exposed phone numbers on dashboards.
              </div>
            </div>
          </div>

          {/* B2B Market */}
          <div className="glass-panel p-8 rounded-2xl border-white/10 hover:border-teal-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                    Commercial Logistics
                  </span>
                  <h3 className="text-2xl font-bold text-white">B2B Market</h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Logistics operators and haulage yards where yard turnaround speed, bay accessibility,
                and driver responsiveness directly impact daily supply chain SLAs.
              </p>

              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Primary B2B customer segments:
                </div>
                {[
                  'UK logistics companies and 3PL courier networks',
                  'Warehouse operators and regional parcel distribution hubs',
                  'Haulage operators and container freight terminals',
                  'Cross-docking depots and fulfillment marshalling yards',
                  'Smaller and mid-sized commercial fleet operations',
                  'Logistics sites employing transient agency or subcontracted drivers',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-white/5 space-y-2 text-xs text-slate-400">
                <div className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
                  Future Adjacent Markets (Platform Roadmap):
                </div>
                <div className="flex flex-wrap gap-2 text-[11px]">
                  {['Residential Developments', 'Retail Parks', 'Universities', 'Hospital Campuses', 'Managed Property Sites'].map(
                    (adj, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-white/5"
                      >
                        {adj}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-400">
              <strong className="text-slate-300">Market Positioning Note:</strong> SmartTags is not
              intended as a replacement for full enterprise telematics or heavy yard-management
              systems (YMS). It provides targeted, lightweight, privacy-preserving driver contact.
            </div>
          </div>
        </div>

        {/* COMMERCIAL PRICING STRUCTURE (Strictly compliant with business plan - NO invented £ prices) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans']">
              Commercial Structure
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Designed around clear hardware, subscription, and depot licensing models aligned with operational scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Consumer SmartTag */}
            <div className="glass-panel p-6 rounded-2xl border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                  Consumer Hardware
                </div>
                <h4 className="text-xl font-bold text-white mb-2">SmartTag Purchase</h4>
                
                {/* Pricing Display */}
                <div className="my-4 py-3 px-4 rounded-xl bg-slate-950/70 border border-white/5">
                  <div className="text-lg font-bold text-cyan-300 font-['Plus_Jakarta_Sans']">
                    One-Time Purchase
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Physical Tag + Lifetime Activation</div>
                </div>

                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Purchase a physical NFC + QR SmartTag for individual vehicle use.
                </p>

                <div className="space-y-2.5 text-xs text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Physical SmartTag</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Tag activation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Secure tag identity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Basic privacy-first contact capability</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onRegisterInterest('Consumer SmartTag')}
                className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-slate-800 hover:bg-slate-700 border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer"
              >
                Register Interest
              </button>
            </div>

            {/* Card 2: Optional Consumer Subscription */}
            <div className="glass-panel p-6 rounded-2xl border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                  Consumer Optional
                </div>
                <h4 className="text-xl font-bold text-white mb-2">SmartTags Plus</h4>

                {/* Pricing Display */}
                <div className="my-4 py-3 px-4 rounded-xl bg-slate-950/70 border border-white/5">
                  <div className="text-lg font-bold text-cyan-300 font-['Plus_Jakarta_Sans']">
                    Optional Subscription
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Enhanced Feature Tier</div>
                </div>

                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Optional subscription for drivers seeking advanced multi-contact alerting.
                </p>

                <div className="space-y-2.5 text-xs text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Multiple emergency contacts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Priority notification routing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Extended activity history</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Enhanced account preferences</span>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 italic mb-4">
                  Note: Basic reachability is never locked behind subscription.
                </div>
              </div>

              <button
                type="button"
                onClick={() => onRegisterInterest('SmartTags Plus')}
                className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-slate-800 hover:bg-slate-700 border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer"
              >
                Register Interest
              </button>
            </div>

            {/* Card 3: Fleet & Yard Operations (Featured Commercial Product) */}
            <div className="rounded-2xl bg-gradient-to-b from-teal-950/40 via-slate-900 to-slate-950 p-6 border-2 border-teal-400/80 relative shadow-xl shadow-teal-500/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                    B2B Operations
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-teal-400 text-slate-950 font-bold uppercase">
                    Depot Tier
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Fleet & Yard Licence</h4>

                {/* Pricing Display */}
                <div className="my-4 py-3 px-4 rounded-xl bg-slate-950/90 border border-teal-500/30">
                  <div className="text-lg font-bold text-teal-300 font-['Plus_Jakarta_Sans']">
                    Per Depot / Fleet Account
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Pricing based on depot size and tag requirements
                  </div>
                </div>

                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Tailored multi-tag infrastructure for warehouses, depots, and logistics operations.
                </p>

                <div className="space-y-2.5 text-xs text-slate-200 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Multi-tag management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Driver directory & roster</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Vehicle / driver assignment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Masked contact routing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Fleet dashboards & dwell-time analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Response-time insights</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onRequestPilot}
                className="w-full py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-300 to-cyan-400 hover:from-teal-200 hover:to-cyan-300 shadow-md shadow-teal-500/20 transition-all cursor-pointer"
              >
                Request a Pilot
              </button>
            </div>

            {/* Card 4: Advanced Analytics Add-On */}
            <div className="glass-panel p-6 rounded-2xl border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                  Enterprise Add-On
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Analytics Add-On</h4>

                {/* Pricing Display */}
                <div className="my-4 py-3 px-4 rounded-xl bg-slate-950/70 border border-white/5">
                  <div className="text-lg font-bold text-blue-300 font-['Plus_Jakarta_Sans']">
                    Optional Upgrade
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Enterprise BI Extension</div>
                </div>

                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Deep operational reporting and automated metrics for large freight hubs.
                </p>

                <div className="space-y-2.5 text-xs text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Deeper operational reporting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Data export & CSV/API integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Enhanced analytics & anomaly trends</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Operational KPI reporting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Future TMS / telematics integration capability</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onRequestPilot}
                className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-slate-800 hover:bg-slate-700 border border-white/10 hover:border-blue-500/30 transition-all cursor-pointer"
              >
                Talk to Us
              </button>
            </div>
          </div>

          {/* Pricing Disclaimer Note */}
          <div className="mt-8 text-center text-xs text-slate-400 bg-slate-900/50 p-4 rounded-xl border border-white/5 max-w-3xl mx-auto">
            “Commercial pricing is expected to vary by tag volume, depot size, platform requirements
            and integration scope.”
          </div>
        </div>

        {/* REVENUE MODEL INFORMATION */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Commercial Sustainability</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans']">
              How the Business Model Works
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              A balanced revenue architecture transitioning from initial hardware adoption into high-margin recurring B2B software licences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {revenueStreams.map((stream, idx) => {
              const Icon = stream.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-950/70 p-5 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-cyan-400">{stream.num}</span>
                      <Icon className="w-4 h-4 text-slate-400" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">{stream.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{stream.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs sm:text-sm text-cyan-200/90 leading-relaxed">
            <strong className="text-white">Long-Term Growth Trajectory:</strong> While consumer tag
            sales create early market awareness, the platform’s core valuation and commercial
            scalability shift increasingly toward recurring Fleet & Yard and operational analytics
            subscriptions from UK logistics networks.
          </div>
        </div>
      </div>
    </section>
  );
};
