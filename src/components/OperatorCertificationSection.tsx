import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';
import { InprotecCertificateMockup } from './InprotecCertificateMockup';

interface OperatorCertificationSectionProps {
  onOpenCheckout: () => void;
}

export const OperatorCertificationSection: React.FC<OperatorCertificationSectionProps> = ({
  onOpenCheckout
}) => {
  return (
    <section id="qualificacao" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Copy */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-tech font-bold uppercase tracking-widest">
            <Award className="w-4 h-4 text-emerald-700" />
            COMPROVAÇÃO PROFISSIONAL NO CAMPO
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Sua qualificação não termina na última aula
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-normal">
            Ao concluir o treinamento, você recebe seu <strong>Certificado Oficial</strong> e sua <strong>Carteirinha do Operador</strong> reconhecida:
          </p>
        </div>

        {/* UNIFIED MOCKUP: TABLET CERTIFICADO + CARTEIRINHA DO OPERADOR */}
        <InprotecCertificateMockup studentName="SEU NOME COMPLETO" />

        {/* Official Certification Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12 mt-10">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-tech font-bold text-slate-900 text-sm">Válido em Todo o Brasil</h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Reconhecido por fazendas, usinas e empresas de maquinário agrícola de norte a sul.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-tech font-bold text-slate-900 text-sm">Normas NR-12 e NR-31</h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Base legal Portaria 3.214/78 do MTE com responsabilidade técnica de engenheiro mecânico.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-tech font-bold text-slate-900 text-sm">QR Code de Autenticidade</h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Qualquer contratante pode apontar a câmera do celular para conferir seu registro imediato.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion CTA */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-base sm:text-xl text-slate-800 font-medium leading-relaxed">
            Mais do que assistir às aulas, você terá uma forma de comprovar que buscou qualificação em uma das tecnologias mais importantes das máquinas agrícolas modernas.
          </p>

          <button
            onClick={onOpenCheckout}
            className="px-8 sm:px-10 py-4.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base sm:text-lg shadow-xl shadow-emerald-600/20 hover:shadow-emerald-500/35 transition-all transform hover:-translate-y-0.5 cursor-pointer font-tech inline-flex items-center gap-3 uppercase tracking-wide"
          >
            <span>QUERO ME QUALIFICAR</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};
