import React from 'react';
import { DescomplicandoGpsLogo } from './DescomplicandoGpsLogo';

interface HeaderProps {
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-4">
        {/* Brand logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <DescomplicandoGpsLogo className="h-10 sm:h-12 md:h-13 w-auto group-hover:scale-105 transition-transform duration-200" />
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
            className="px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-md hover:shadow-lg hover:shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer font-tech uppercase tracking-wide"
          >
            Garantir Vaga
          </button>
        </div>
      </div>
    </header>
  );
};
