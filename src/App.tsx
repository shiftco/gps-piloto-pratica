import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TopicsSection } from './components/TopicsSection';
import { SimulatorBonusSection } from './components/SimulatorBonusSection';
import { OperatorCertificationSection } from './components/OperatorCertificationSection';
import { InstructorSection } from './components/InstructorSection';
import { PricingOfferSection } from './components/PricingOfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [recentNotification, setRecentNotification] = useState<{ name: string; city: string } | null>(null);

  // Simulated social proof toast notification
  useEffect(() => {
    const recentStudents = [
      { name: "Marcos V.", city: "Rondonópolis/MT" },
      { name: "Eduardo S.", city: "Cascavel/PR" },
      { name: "Rafael M.", city: "Rio Verde/GO" },
      { name: "Lucas F.", city: "Luís Eduardo Magalhães/BA" },
      { name: "Gabriel P.", city: "Dourados/MS" }
    ];

    let index = 0;
    const interval = setInterval(() => {
      setRecentNotification(recentStudents[index]);
      index = (index + 1) % recentStudents.length;

      // Hide toast after 4 seconds
      setTimeout(() => {
        setRecentNotification(null);
      }, 4000);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSuccessEnrollment = (studentName: string) => {
    // Keep checkout modal open in success state or trigger carteirinha update
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-600 selection:text-white">
      
      {/* Sticky Top Header */}
      <Header
        onOpenCheckout={handleScrollToOffer}
      />

      {/* Main Page Sections */}
      <main>
        <HeroSection
          onOpenCheckout={handleScrollToOffer}
        />

        <TopicsSection
          onOpenCheckout={handleScrollToOffer}
        />

        <SimulatorBonusSection
          onOpenCheckout={handleScrollToOffer}
        />

        <OperatorCertificationSection
          onOpenCheckout={handleScrollToOffer}
        />

        <InstructorSection />

        <PricingOfferSection
          onOpenCheckout={handleScrollToOffer}
        />

        <GuaranteeSection
          onOpenCheckout={handleScrollToOffer}
        />

        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenCheckout={handleScrollToOffer} />

      {/* Modals */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onSuccessEnrollment={handleSuccessEnrollment}
      />

      {/* Floating Bottom Sticky Bar on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-30 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 lg:hidden shadow-2xl flex items-center justify-between gap-2">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 font-mono">Lote de Hoje:</span>
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-400 line-through font-mono">R$ 297</span>
            <span className="font-tech text-lg font-bold text-emerald-700">R$ 97</span>
          </div>
        </div>
        <button
          onClick={handleScrollToOffer}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-tech font-bold text-xs uppercase tracking-wide shadow-md cursor-pointer flex items-center gap-1.5 shrink-0"
        >
          <span>QUERO ME MATRICULAR</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Social Proof Live Notification Toast */}
      {recentNotification && (
        <div className="fixed bottom-16 sm:bottom-6 left-4 z-40 max-w-xs bg-white border border-emerald-500/40 p-3 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-3 animate-fade-in">
          <div className="w-9 h-9 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 font-bold shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <p className="font-bold text-slate-900 font-tech">{recentNotification.name} se matriculou!</p>
            <p className="text-[10px] text-emerald-700 font-mono font-medium">{recentNotification.city} • Há poucos minutos</p>
          </div>
        </div>
      )}

    </div>
  );
}

