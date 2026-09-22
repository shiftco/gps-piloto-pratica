import React, { useState } from 'react';
import { Award, CreditCard, ShieldCheck, CheckCircle2, QrCode, UserCheck, Sparkles, ArrowRight, Printer } from 'lucide-react';

interface OperatorCertificationSectionProps {
  onOpenCheckout: () => void;
}

export const OperatorCertificationSection: React.FC<OperatorCertificationSectionProps> = ({
  onOpenCheckout
}) => {
  const [studentName, setStudentName] = useState('JOÃO SILVA SANTOS');
  const [machineSpecialty, setMachineSpecialty] = useState('Tratores, Colheitadeiras e Pulverizadores');

  return (
    <section id="qualificacao" className="py-16 sm:py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Copy */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-tech font-bold uppercase tracking-widest">
            <Award className="w-4 h-4 text-emerald-700" />
            COMPROVAÇÃO PROFISSIONAL NO CAMPO
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Sua qualificação não termina na última aula
          </h2>

          <p className="text-lg text-slate-700 font-normal">
            Ao concluir o treinamento, você recebe:
          </p>
        </div>

        {/* 2 Main Items: Certificado + Carteirinha Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          
          {/* Card 1: CERTIFICADO DE CONCLUSÃO (WHITE CERTIFICATE CARD AS REQUESTED) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-emerald-500 transition-all shadow-md">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <span className="text-xs font-tech text-amber-700 font-bold uppercase tracking-wider">DOCUMENTO OFICIAL</span>
                  <h3 className="font-tech text-xl sm:text-2xl font-bold text-slate-900 tracking-wide">
                    CERTIFICADO DE CONCLUSÃO
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed">
                Comprove que você concluiu sua formação em GPS e Piloto Automático e adicione mais uma qualificação ao seu currículo.
              </p>

              {/* Certificate Visual Box Preview (WHITE BACKGROUND AS REQUESTED) */}
              <div className="p-6 rounded-2xl bg-white border-4 border-amber-400 relative overflow-hidden shadow-xl space-y-3">
                <div className="absolute top-0 right-0 w-16 h-16 bg-amber-100 rounded-bl-full pointer-events-none opacity-60"></div>
                <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                  <span className="text-[10px] font-mono text-amber-800 uppercase tracking-widest font-extrabold">INPROTEC — TREINAMENTOS AGRÍCOLAS</span>
                  <span className="text-[10px] font-mono text-slate-500 font-bold">REG: #GPS-2026-8849</span>
                </div>
                <div className="text-center py-3 space-y-1">
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">CERTIFICAMOS QUE</p>
                  <p className="font-tech text-xl sm:text-2xl font-extrabold text-slate-900 uppercase tracking-wide border-b-2 border-amber-300 pb-1 inline-block">
                    {studentName || 'SEU NOME AQUI'}
                  </p>
                  <p className="text-xs text-slate-600 pt-1">concluiu com êxito o treinamento prático de</p>
                  <p className="text-xs font-extrabold text-emerald-800 font-tech uppercase tracking-wide">
                    GPS E PILOTO AUTOMÁTICO EM MÁQUINAS AGRÍCOLAS
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-amber-200 text-[10px] text-slate-600 font-mono font-medium">
                  <span>Carga Horária: 20 Horas</span>
                  <span className="text-amber-800 font-bold">Assinado: Prof. Allyson Viana</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Válido em todo o território nacional para comprovação em fazendas.</span>
            </div>
          </div>

          {/* Card 2: CARTEIRINHA DO OPERADOR */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-emerald-500 transition-all shadow-md">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                  <CreditCard className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-tech text-emerald-700 font-bold uppercase tracking-wider">IDENTIFICAÇÃO DE CAMPO</span>
                  <h3 className="font-tech text-xl sm:text-2xl font-bold text-slate-900 tracking-wide">
                    CARTEIRINHA DO OPERADOR
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed">
                Você também recebe sua Carteirinha do Operador personalizada, identificando sua formação no treinamento.
              </p>

              {/* Carteirinha Badge Preview */}
              <div className="p-5 rounded-2xl bg-slate-900 border-2 border-emerald-500/50 relative overflow-hidden shadow-xl space-y-3 text-white">
                <div className="flex items-center justify-between border-b border-emerald-500/30 pb-2">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-400" />
                    <span className="font-tech font-bold text-xs text-white">CARTEIRINHA DO OPERADOR</span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">OPERADOR QUALIFICADO</span>
                </div>

                <div className="grid grid-cols-12 gap-3 items-center">
                  <div className="col-span-8 space-y-1">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">NOME DO OPERADOR:</div>
                    <div className="font-tech text-sm sm:text-base font-bold text-emerald-300 truncate">{studentName || 'SEU NOME COMPLETO'}</div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono pt-1">ESPECIALIZAÇÃO:</div>
                    <div className="text-xs text-slate-200 font-medium truncate">{machineSpecialty}</div>
                  </div>
                  <div className="col-span-4 flex flex-col items-center justify-center border-l border-emerald-800/50 pl-2">
                    <div className="w-14 h-14 bg-white p-1 rounded border border-emerald-500/40 flex items-center justify-center">
                      <QrCode className="w-12 h-12 text-slate-900" />
                    </div>
                    <span className="text-[8px] font-mono text-slate-400 mt-1">VERIFICÁVEL</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-emerald-800/40 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>INPROTEC TECNOLOGIA AGRÍCOLA</span>
                  <span className="text-emerald-400 font-bold">VALIDAÇÃO 2026</span>
                </div>
              </div>
            </div>

            {/* Interactive Name Input Field */}
            <div className="pt-2 border-t border-slate-100">
              <label className="block text-xs font-mono text-slate-600 mb-1 font-semibold">Digite seu nome para testar sua Carteirinha/Certificado:</label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value.toUpperCase())}
                placeholder="SEU NOME COMPLETO"
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 focus:border-emerald-600 text-xs font-tech text-slate-900 outline-none transition-colors"
              />
            </div>
          </div>

        </div>

        {/* Conclusion text from prompt */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-base sm:text-xl text-slate-800 font-medium leading-relaxed">
            Mais do que assistir às aulas, você terá uma forma de comprovar que buscou qualificação em uma das tecnologias mais importantes das máquinas agrícolas modernas.
          </p>

          <button
            onClick={onOpenCheckout}
            className="px-8 py-4.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-lg shadow-xl shadow-emerald-600/20 hover:shadow-emerald-500/35 transition-all transform hover:-translate-y-0.5 cursor-pointer font-tech inline-flex items-center gap-3 uppercase tracking-wide"
          >
            <span>QUERO ME QUALIFICAR</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};
