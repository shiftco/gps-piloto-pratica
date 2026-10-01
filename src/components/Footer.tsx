import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

interface FooterProps {
  onOpenCheckout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout }) => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 text-xs font-mono py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-200">
          
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-2">
            <p className="text-slate-600 text-xs font-sans max-w-md leading-relaxed">
              Formação prática em agricultura de precisão e tecnologia embarcada para operadores de máquinas agrícolas em todo o Brasil. Inprotec Treinamentos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 font-sans text-xs">
            <div className="font-tech font-bold text-emerald-800 uppercase tracking-wider text-xs">Navegação</div>
            <ul className="space-y-1.5 text-slate-700">
              <li><a href="#aprender" className="hover:text-emerald-700 transition-colors">O que Vai Aprender</a></li>
              <li><a href="#qualificacao" className="hover:text-emerald-700 transition-colors">Certificado e Carteirinha</a></li>
              <li><a href="#professor" className="hover:text-emerald-700 transition-colors">Professor Allyson Viana</a></li>
              <li><a href="#garantia" className="hover:text-emerald-700 transition-colors">Garantia de 7 Dias</a></li>
            </ul>
          </div>

          {/* Guarantee & Security */}
          <div className="space-y-3 font-sans text-xs">
            <div className="font-tech font-bold text-emerald-800 uppercase tracking-wider text-xs">Segurança & Suporte</div>
            <div className="space-y-2 text-slate-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Garantia de Satisfação de 7 Dias</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Checkout 100% Criptografado</span>
              </div>
            </div>
            <button
              onClick={onOpenCheckout}
              className="mt-2 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-tech font-bold uppercase tracking-wider cursor-pointer transition-all shadow-xs"
            >
              Matricular por R$ 97
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Inprotec Treinamentos Agrícolas. Todos os direitos reservados.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-emerald-700 transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-emerald-700 transition-colors">Políticas de Privacidade</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

