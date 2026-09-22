import React from 'react';
import { Zap, Shield, Layers, Sliders, CheckCircle2, ArrowRight } from 'lucide-react';

interface SimulatorBonusSectionProps {
  onOpenCheckout: () => void;
}

export const SimulatorBonusSection: React.FC<SimulatorBonusSectionProps> = ({
  onOpenCheckout
}) => {
  return (
    <section id="simulador" className="py-16 sm:py-20 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-tech font-bold uppercase tracking-wider shadow-xs">
              <Zap className="w-4 h-4 text-emerald-700" />
              BÔNUS EXCLUSIVO — ACESSO INCLUÍDO
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Simulador de GPS e Piloto Automático
            </h2>

            <p className="font-tech text-xl sm:text-2xl font-bold text-emerald-700">
              Não fique só assistindo. Treine.
            </p>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <p>
                Além das aulas, você recebe acesso ao <strong>Simulador de GPS e Piloto Automático</strong>.
              </p>
              <p>
                É um ambiente criado para você praticar configurações e entender a lógica do sistema antes mesmo de estar dentro da máquina.
              </p>
              <p>
                Você poderá treinar o que aprendeu nas aulas, testar configurações e ganhar mais familiaridade com os comandos de GPS e piloto automático.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto px-8 py-4.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-lg shadow-xl shadow-emerald-600/20 hover:shadow-emerald-500/35 transition-all transform hover:-translate-y-0.5 cursor-pointer font-tech flex items-center justify-center gap-3 uppercase tracking-wide"
              >
                <span>QUERO ACESSAR O TREINAMENTO</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Right Column: Bonus Display Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-slate-900 p-6 sm:p-8 border-2 border-emerald-500/40 shadow-2xl text-white space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                    <Sliders className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-tech text-lg font-bold text-white uppercase tracking-wide">SIMULADOR PRÁTICO INTERATIVO</h3>
                    <p className="text-xs text-slate-400 font-mono">Lógica universal das principais tecnologias agrícolas do mercado</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-tech font-bold">
                  BÔNUS 100% GRÁTIS
                </span>
              </div>

              {/* Graphic Feature Cards */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-semibold text-slate-200">Prática de gravação e alinhamento de Ponto A/B</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-semibold text-slate-200">Ajuste de sensibilidade do piloto e largura do implemento</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-semibold text-slate-200">Simulação de diagnóstico de sinal RTK e offset de antena</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-center space-y-1">
                <p className="font-tech text-emerald-300 font-bold text-sm">ACESSO IMEDIATO AO GARANTIR SUA VAGA</p>
                <p className="text-xs text-slate-300">Compatível com computador, tablet e celular.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

