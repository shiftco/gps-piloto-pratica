import React from 'react';
import { HERO_DATA } from '../data/courseData';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section 
      className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden bg-black text-white"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Subtle green & cyan neon glows over deep OLED black */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-[400px] h-[300px] bg-cyan-500/8 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Copy */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-xs sm:text-sm font-semibold shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{HERO_DATA.badgeText}</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            {HERO_DATA.headline}
          </h1>

          {/* Subheadline com a promessa principal mais destacada */}
          <div className="space-y-3 pt-1">
            <div>
              <span className="inline-block font-tech text-lg sm:text-2xl lg:text-3xl font-extrabold text-emerald-300 bg-emerald-950/70 border border-emerald-500/50 px-4 py-1.5 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                Aprenda mais de 50 configurações de GPS e piloto automático
              </span>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
              que todo operador precisa dominar para configurar, calibrar e operar máquinas agrícolas com precisão.
            </p>
          </div>
        </div>

        {/* HERO MOCKUP (POSICIONADO ENTRE A SUBHEADLINE E O BOTÃO) */}
        <div className="my-6 lg:my-8 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-500/50 shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_45px_rgba(16,185,129,0.2)] bg-black group">
            
            {/* Top Bar on Image */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-emerald-500/50 text-emerald-400 font-mono text-xs font-bold shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                TAXA VARIÁVEL • IMPLEMENTO • PILOTO RTK
              </span>
              <span className="hidden sm:inline-block px-3 py-1 rounded-lg bg-black/85 backdrop-blur-md text-cyan-300 font-mono text-[11px] border border-cyan-500/30">
                PRECISÃO RTK 1.8CM
              </span>
            </div>

            {/* Main Hero Image */}
            <img
              src="/images/hero-gps-monitor.jpg"
              alt="Operador configurando monitor de GPS e Piloto Automático na prática com telemetria holográfica"
              className="w-full h-auto object-cover max-h-[580px] group-hover:scale-[1.01] transition-transform duration-500"
            />

            {/* Bottom Caption Overlay */}
            <div className="p-4 sm:p-5 bg-gradient-to-t from-black via-black/95 to-black/80 border-t border-zinc-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="font-tech text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span className="text-emerald-400">●</span> Configuração Prática na Cabine
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-normal">
                  Domine taxa variável, mapa de prescrição, geometria do implemento, corte de seções e sensibilidade do piloto.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold bg-emerald-950/90 border border-emerald-500/40 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>+50 TELAS E PARÂMETROS</span>
              </div>
            </div>

          </div>
        </div>

        {/* Benefits & CTA Section (Abaixo do Mockup) */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mt-6">
          {/* Key benefits quick badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-200">
            <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+50 Configurações Práticas</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Carteirinha + Certificado Reconhecido</span>
            </div>
          </div>

          {/* Hero CTA Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto px-10 py-5 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-lg sm:text-xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-400/45 transition-all transform hover:-translate-y-0.5 cursor-pointer font-tech flex items-center justify-center gap-3 uppercase tracking-wide"
            >
              <span>QUERO APRENDER NA PRÁTICA</span>
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Trust text */}
          <div className="flex items-center justify-center gap-3 text-xs text-slate-400 pt-1 font-mono">
            <span className="flex items-center gap-1 font-medium text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Compra 100% Segura
            </span>
            <span>•</span>
            <span className="text-slate-300">Acesso Imediato</span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">Garantia Incondicional 7 Dias</span>
          </div>
        </div>

        {/* Metrics stats row */}
        <div className="pt-10 mt-10 border-t border-zinc-900 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {HERO_DATA.metrics.map((metric, i) => (
            <div key={i} className="text-center bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-900 backdrop-blur-sm">
              <div className="font-tech text-2xl sm:text-3xl font-extrabold text-emerald-400">{metric.value}</div>
              <div className="text-xs text-slate-400 font-semibold mt-0.5">{metric.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
