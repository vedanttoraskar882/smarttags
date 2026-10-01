import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Platform } from './components/Platform';
import { HowItWorks } from './components/HowItWorks';
import { MarketPricing } from './components/MarketPricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PilotModal } from './components/PilotModal';
import { InterestModal } from './components/InterestModal';
import { LegalModal } from './components/LegalModal';

export const App: React.FC = () => {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [interestModalData, setInterestModalData] = useState<{ isOpen: boolean; type: string }>({
    isOpen: false,
    type: '',
  });
  const [legalModalData, setLegalModalData] = useState<{ isOpen: boolean; title: string }>({
    isOpen: false,
    title: '',
  });

  const handleOpenPilotModal = () => {
    setIsPilotModalOpen(true);
  };

  const handleClosePilotModal = () => {
    setIsPilotModalOpen(false);
  };

  const handleOpenInterestModal = (type: string) => {
    setInterestModalData({ isOpen: true, type });
  };

  const handleCloseInterestModal = () => {
    setInterestModalData({ isOpen: false, type: '' });
  };

  const handleOpenLegalModal = (title: string) => {
    setLegalModalData({ isOpen: true, title });
  };

  const handleCloseLegalModal = () => {
    setLegalModalData({ isOpen: false, title: '' });
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar onRequestPilot={handleOpenPilotModal} />

      {/* Main Single-Page Content with Smooth Scrolling Sections */}
      <main className="flex-grow">
        {/* 1. Home / Hero Section */}
        <Hero onRequestPilot={handleOpenPilotModal} />

        {/* 2. About Section */}
        <About />

        {/* 3. Platform Section */}
        <Platform />

        {/* 4. How It Works Section (Includes Fleet Operations loop & Request a Pilot area) */}
        <HowItWorks onRequestPilotModal={handleOpenPilotModal} />

        {/* 5. Market & Pricing Section */}
        <MarketPricing
          onRequestPilot={handleOpenPilotModal}
          onRegisterInterest={handleOpenInterestModal}
        />

        {/* 6. FAQ Section */}
        <FAQ />
      </main>

      {/* 7. Footer */}
      <Footer
        onRequestPilot={handleOpenPilotModal}
        onRegisterInterest={handleOpenInterestModal}
        onOpenLegal={handleOpenLegalModal}
      />

      {/* Reusable Global Modals */}
      <PilotModal isOpen={isPilotModalOpen} onClose={handleClosePilotModal} />
      <InterestModal
        isOpen={interestModalData.isOpen}
        type={interestModalData.type}
        onClose={handleCloseInterestModal}
      />
      <LegalModal
        isOpen={legalModalData.isOpen}
        title={legalModalData.title}
        onClose={handleCloseLegalModal}
      />
    </div>
  );
};

export default App;
