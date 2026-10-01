import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
  category: 'General' | 'Privacy & Security' | 'Fleet & Operations' | 'Technical';
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FAQItem[] = [
    {
      q: 'What is SmartTags?',
      a: 'SmartTags is a privacy-first NFC and QR contact platform that allows people to contact a vehicle owner or fleet driver without publicly exposing the recipient’s personal phone number.',
      category: 'General',
    },
    {
      q: 'How does SmartTags work?',
      a: 'A person taps the NFC-enabled SmartTag or scans its QR code. The platform securely identifies the registered owner or driver and routes communication according to configured preferences without displaying the owner’s private number.',
      category: 'General',
    },
    {
      q: 'Does the person scanning the SmartTag see my phone number?',
      a: 'No. The platform is designed so that the scanning party does not receive the owner’s real personal phone number.',
      category: 'Privacy & Security',
    },
    {
      q: 'Does someone need the SmartTags app to scan a tag?',
      a: 'The scanning experience is intended to work through NFC or QR using a smartphone browser, without requiring the scanning party to install a dedicated SmartTags application.',
      category: 'General',
    },
    {
      q: 'Does SmartTags track my vehicle?',
      a: 'No. SmartTags is not designed as a GPS, telematics, vehicle-location or driving-behaviour tracking platform.',
      category: 'Privacy & Security',
    },
    {
      q: 'Is SmartTags an anti-theft product?',
      a: 'No. The platform is designed to facilitate privacy-preserving communication rather than vehicle recovery or anti-theft tracking.',
      category: 'General',
    },
    {
      q: 'Can SmartTags be used by logistics and warehouse operators?',
      a: 'Yes. The planned Fleet & Yard Operations module is designed for UK logistics depots, warehouses and haulage environments where staff need to quickly contact particular drivers while also generating useful operational data.',
      category: 'Fleet & Operations',
    },
    {
      q: 'What analytics can Fleet & Yard Operations provide?',
      a: 'Planned operational analytics include driver responsiveness, interaction activity, dwell-time information and recurring congestion insights generated from SmartTags interaction events.',
      category: 'Fleet & Operations',
    },
    {
      q: 'How does SmartTags handle abusive use?',
      a: 'The platform roadmap includes anomaly scoring, rate limiting and human Trust & Safety review processes for suspicious patterns such as unusually repeated scans or contact attempts.',
      category: 'Privacy & Security',
    },
    {
      q: 'Can a lost SmartTag be deactivated?',
      a: 'Yes. The planned Tag Provisioning and Lifecycle Management module supports tag deactivation and replacement.',
      category: 'Technical',
    },
    {
      q: 'Will SmartTags support WhatsApp and masked voice calls?',
      a: 'The roadmap includes masked voice and WhatsApp communication in later development phases. The initial MVP is deliberately scoped around basic SMS-based communication.',
      category: 'Technical',
    },
    {
      q: 'Does SmartTags provide emergency services?',
      a: 'No. SmartTags is a contact-facilitation platform and should not be presented as a substitute for emergency services.',
      category: 'General',
    },
    {
      q: 'Will SmartTags integrate with fleet management software?',
      a: 'Future phases may support APIs and transport-management or telematics integrations once the core Fleet & Yard product has been validated with paying business customers.',
      category: 'Fleet & Operations',
    },
    {
      q: 'Who founded SmartTags?',
      a: 'SmartTags is founded by Vishnu Padmakumar, a Coventry-based data analyst and software engineer with professional experience in logistics analytics, warehouse operations, cloud data engineering and business intelligence.',
      category: 'General',
    },
  ];

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#0a0f1d] border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Answered Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans']">
            Questions & Answers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-['Inter']">
            Clear information about privacy boundaries, operational scoping, and platform capabilities.
          </p>

          {/* Search filter input */}
          <div className="mt-6 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions or keywords..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-sm">
              No matching questions found for "{searchQuery}".
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-900/90 border-cyan-500/40 shadow-lg shadow-cyan-500/5'
                      : 'bg-slate-900/40 border-white/5 hover:border-slate-700'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-2xl"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-white font-['Plus_Jakarta_Sans'] leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`p-1.5 rounded-lg bg-slate-800 text-slate-300 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 bg-cyan-500/20 text-cyan-300' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-['Inter'] animate-in fade-in duration-150">
                      <div className="pt-2 border-t border-white/5">{faq.a}</div>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                        <span>Category: {faq.category}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
