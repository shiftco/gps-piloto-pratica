import React from 'react';
import { HERO_DATA } from '../data/courseData';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { GpsTerminalScreen } from './GpsTerminalScreen';

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
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-8">
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

          {/* Subheadline com o texto solicitado pelo usuário (cor cinza) */}
          <div className="pt-2 max-w-3xl mx-auto">
            <p className="text-lg sm:text-2xl lg:text-2xl text-slate-300 font-normal leading-relaxed">
              Aprenda todas as configurações de GPS e piloto automático que todo operador precisa dominar para configurar, calibrar e operar máquinas agrícolas com precisão
            </p>
          </div>
        </div>

        {/* HERO MOCKUP SUBSTITUÍDO PELA NOVA TELA DO TERMINAL DE GPS E GUIAMENTO */}
        <div className="my-6 lg:my-8 max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-2.5 sm:p-4 bg-[#141c16] border-2 border-emerald-500/40 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(16,185,129,0.18)] group">
            
            {/* Top Monitor Bezel Info Bar */}
            <div className="flex items-center justify-between px-3.5 py-2 mb-2.5 bg-[#0b120d] rounded-xl border border-zinc-800 text-[11px] font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-slate-200 font-bold">TERMINAL DE OPERAÇÃO • GUIAMENTO & PILOTO</span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-xs text-zinc-400">
                <span className="text-emerald-400 font-bold">RTK FIXO (±2.5cm)</span>
                <span>•</span>
                <span>PISTA AB RETA</span>
                <span>•</span>
                <span className="text-slate-300">13 SEÇÕES ATIVAS</span>
              </div>
            </div>

            {/* Main Terminal Screen Display (Rendered directly, ensuring 100% visibility & interactivity) */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <GpsTerminalScreen />
            </div>

            {/* Bottom Caption Overlay */}
            <div className="mt-3 p-3.5 sm:p-4 bg-[#0b120d] rounded-2xl border border-zinc-800/80 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="font-tech text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span className="text-emerald-400">●</span> Configuração Prática na Cabine
                </div>
                <p className="text-xs sm:text-sm text-slate-400 font-normal">
                  Monitores agrícolas reais: calibração de piloto automático, geometria de implementos, linhas A/B retas e curvas, e controle de corte de seções.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold bg-emerald-950/90 border border-emerald-500/40 px-3 py-1.5 rounded-lg shrink-0">
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
