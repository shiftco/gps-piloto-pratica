import React from 'react';
import { PRICING_DATA } from '../data/courseData';
import { ShieldCheck, Zap, Lock, Clock, ArrowRight, Star } from 'lucide-react';

interface PricingOfferSectionProps {
  onOpenCheckout: () => void;
}

export const PricingOfferSection: React.FC<PricingOfferSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="oferta" className="py-16 sm:py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-tech font-bold uppercase tracking-widest shadow-xs">
            <Zap className="w-4 h-4 text-emerald-700" />
            OFERTA DE LOTE ESPECIAL
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Entre hoje para o Curso de GPS e Piloto Automático
          </h2>
        </div>

        {/* Main Offer Card */}
        <div className="bg-white rounded-3xl border-2 border-emerald-500/60 shadow-xl p-6 sm:p-10 lg:p-12 space-y-8 relative overflow-hidden">
          
          {/* Top Banner Ribbon */}
          <div className="absolute -right-12 top-7 bg-amber-500 text-slate-950 font-tech font-extrabold text-xs uppercase px-12 py-1.5 rotate-45 shadow-md tracking-wider">
            67% OFF HOJE
          </div>

          {/* Intro Checklist text */}
          <div className="space-y-4">
            <h3 className="font-tech text-xl sm:text-2xl font-bold text-slate-900">
              Ao fazer sua matrícula, você recebe:
            </h3>

            {/* Checklist items */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-base text-slate-800 font-semibold">
              {PRICING_DATA.benefits.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-emerald-600/10 border border-emerald-600 flex items-center justify-center text-emerald-700 font-bold shrink-0">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Box Area */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white text-center space-y-4 border border-slate-800 shadow-inner">
            <div className="space-y-1">
              <span className="text-sm font-tech text-slate-400 line-through tracking-wider">
                De {PRICING_DATA.originalPrice}
              </span>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg font-tech text-emerald-400 font-bold">POR APENAS</span>
                <span className="font-tech text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                  {PRICING_DATA.currentPrice}
                </span>
              </div>
            </div>

            <div className="space-y-1 text-sm font-medium text-slate-300">
              <p className="font-bold text-emerald-400 font-tech uppercase tracking-wide">Pagamento único.</p>
              <p>Você entra hoje e já pode começar a estudar.</p>
            </div>

            {/* Main Buy Button */}
            <div className="pt-2">
              <a
                href="https://pay.hotmart.com/Q106808393M?off=6iutm2z2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 px-8 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-lg sm:text-xl shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/50 transition-all transform hover:-translate-y-0.5 cursor-pointer font-tech uppercase tracking-wide flex items-center justify-center gap-3 no-underline"
              >
                <span>QUERO DOMINAR GPS E PILOTO AUTOMÁTICO</span>
                <ArrowRight className="w-6 h-6 text-white" />
              </a>
            </div>

            {/* Footer Trust badge line */}
            <div className="pt-2 text-xs sm:text-sm font-mono text-slate-400 flex flex-wrap items-center justify-center gap-3">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Lock className="w-4 h-4 text-emerald-400" /> Compra segura
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Clock className="w-4 h-4 text-emerald-400" /> Acesso imediato
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 7 dias de garantia
              </span>
            </div>
          </div>

          {/* Student rating badge */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-600 pt-1">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
              ))}
            </div>
            <span className="font-semibold">4.9/5 estrelas de avaliação dos operadores</span>
          </div>

        </div>

      </div>
    </section>
  );
};

