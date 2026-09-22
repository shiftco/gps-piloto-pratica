import React from 'react';
import { ShieldCheck, Cpu } from 'lucide-react';

interface HeaderProps {
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      {/* Top micro bar with real-time GNSS RTK ticker */}
      <div className="bg-emerald-50 border-b border-emerald-100 text-xs py-1.5 px-4 text-emerald-900 font-tech">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-600/10 border border-emerald-600/30 text-emerald-700 font-semibold text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping"></span>
              SINAL GNSS RTK
            </span>
            <span className="hidden sm:inline text-slate-600">Precisão: <strong className="text-emerald-700 font-mono">±2.5cm</strong> | Satélites: <strong className="text-emerald-700 font-mono">18 Fixos</strong></span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1 text-slate-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Garantia 7 Dias
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="hidden md:inline text-amber-600 font-bold">
              Vagas Com Desconto Especial
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-0.5 shadow-md group-hover:shadow-emerald-600/30 transition-all">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-tech text-base sm:text-lg font-bold tracking-tight text-slate-900 flex items-center gap-1.5">
              GPS & PILOTO
              <span className="text-xs px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono font-bold">
                PRÁTICO
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <a href="#aprender" className="hover:text-emerald-600 transition-colors">O que Vai Aprender</a>
          <a href="#qualificacao" className="hover:text-emerald-600 transition-colors">Certificado & Carteirinha</a>
          <a href="#professor" className="hover:text-emerald-600 transition-colors">Professor</a>
          <a href="#garantia" className="hover:text-emerald-600 transition-colors">Garantia</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenCheckout}
            className="px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-md hover:shadow-lg hover:shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5 cursor-pointer font-tech uppercase tracking-wide"
          >
            Garantir Vaga
          </button>
        </div>
      </div>
    </header>
  );
};

