import React from 'react';
import { PRICING_DATA } from '../data/courseData';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface GuaranteeSectionProps {
  onOpenCheckout: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="garantia" className="py-16 sm:py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-slate-50 rounded-3xl border-2 border-emerald-500/40 p-8 sm:p-12 shadow-lg relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            
            {/* Guarantee Shield Icon */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center shadow-md">
                <ShieldCheck className="w-16 h-16 text-emerald-700" />
              </div>
              <span className="font-tech text-xs text-emerald-800 font-bold uppercase tracking-wider mt-3">
                100% SEM RISCO
              </span>
            </div>

            {/* Guarantee Text Copy */}
            <div className="space-y-4 text-center md:text-left flex-1">
              <div>
                <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {PRICING_DATA.guaranteeHeadline}
                </h2>
                <p className="font-tech text-lg text-emerald-700 font-bold mt-1">
                  {PRICING_DATA.guaranteeSubhead}
                </p>
              </div>

              <div className="space-y-3 text-base text-slate-700 font-normal leading-relaxed">
                {PRICING_DATA.guaranteeText.map((paragraph, index) => (
                  <p key={index} className={index === 4 ? "p-3 rounded-lg bg-emerald-100/60 border border-emerald-300 text-emerald-900 font-semibold" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenCheckout}
                  className="w-full sm:w-auto px-8 py-4.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-lg shadow-xl shadow-emerald-600/20 hover:shadow-emerald-500/35 transition-all transform hover:-translate-y-0.5 cursor-pointer font-tech inline-flex items-center justify-center gap-3 uppercase tracking-wide"
                >
                  <span>QUERO COMEÇAR AGORA</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

