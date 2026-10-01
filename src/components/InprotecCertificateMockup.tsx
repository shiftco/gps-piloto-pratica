import React from 'react';
import { Award, ShieldCheck, QrCode, CheckCircle2, Check } from 'lucide-react';
import { ImageDropSlot } from './ImageDropSlot';

interface InprotecCertificateMockupProps {
  studentName?: string;
}

export const InprotecCertificateMockup: React.FC<InprotecCertificateMockupProps> = ({
  studentName = 'SEU NOME COMPLETO'
}) => {
  const displayName = studentName.trim() ? studentName.toUpperCase() : 'SEU NOME COMPLETO';

  return (
    <ImageDropSlot
      slot="certificate"
      alt="Certificado Oficial Inprotec e Carteirinha do Operador"
      defaultSrc="/images/inprotec-certificado-tablet.png"
      aspectClass="aspect-auto"
      bgClass="bg-transparent"
      buttonLabel="Trocar Imagem do Certificado"
      className="w-full max-w-5xl mx-auto my-6 sm:my-8 bg-transparent"
    >
      <div className="relative w-full max-w-5xl mx-auto select-none overflow-hidden">
        {/* Background Soft Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Main Composite Container */}
        <div className="relative flex flex-col items-center">

          {/* ======================================================== */}
          {/* 1. TABLET MOCKUP IN THE BACKGROUND                     */}
          {/* ======================================================== */}
          <div className="w-full max-w-4xl bg-[#111827] rounded-[22px] sm:rounded-[36px] p-2 sm:p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_0_30px_rgba(16,185,129,0.12)] border border-slate-700/60 relative">
          
          {/* Tablet Front Camera Pinhole */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-cyan-500/60"></div>
            </div>
          </div>

          {/* Tablet Screen Surface */}
          <div className="bg-white rounded-[20px] sm:rounded-[26px] overflow-hidden border border-slate-200 relative p-5 sm:p-9 shadow-inner text-slate-900">
            
            {/* Certificate Decorative Green Corner Waves */}
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-bl from-emerald-600/25 via-emerald-500/10 to-transparent rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-tr from-emerald-600/20 via-emerald-500/10 to-transparent rounded-full pointer-events-none"></div>

            {/* Certificate Inner Double Border */}
            <div className="border border-emerald-600/50 rounded-xl p-4 sm:p-7 relative z-10">
              
              {/* Header Row: FDO Logo (Left) + CERTIFICADO (Center) + Gear Badge (Right) */}
              <div className="flex items-center justify-between gap-2 border-b border-emerald-100 pb-4 mb-5">
                
                {/* Left: Faculdade do Operador Badge */}
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-extrabold text-sm sm:text-base shadow-sm">
                    FD
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] sm:text-xs font-black tracking-wider text-emerald-800 uppercase font-tech">
                      FACULDADE DO
                    </span>
                    <span className="text-[10px] sm:text-xs font-black tracking-wider text-emerald-600 uppercase font-tech">
                      OPERADOR
                    </span>
                  </div>
                </div>

                {/* Center Title: CERTIFICADO */}
                <div className="text-center">
                  <h3 className="font-tech text-2xl sm:text-4xl md:text-5xl font-extrabold text-emerald-700 tracking-wider">
                    CERTIFICADO
                  </h3>
                </div>

                {/* Right: Orange & Green Cog Gear Badge */}
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 p-1 flex items-center justify-center shadow-md">
                  <div className="w-full h-full rounded-full bg-emerald-700 border-2 border-white flex items-center justify-center text-white">
                    <Award className="w-5 h-5 sm:w-7 sm:h-7 text-amber-300" />
                  </div>
                </div>

              </div>

              {/* Certificate Body Text */}
              <div className="text-center space-y-3 py-1">
                <p className="text-xs sm:text-sm md:text-base font-bold text-slate-800">
                  O instituto Inprotec certifica que o senhor(a):
                </p>

                {/* Student's Dynamic Name */}
                <div className="py-1">
                  <span className="inline-block font-tech text-lg sm:text-2xl md:text-3xl font-extrabold text-slate-900 border-b-2 border-emerald-600 px-4 pb-0.5 tracking-wide">
                    {displayName}
                  </span>
                </div>

                <div className="text-[11px] sm:text-xs text-slate-600 space-y-0.5 font-medium max-w-xl mx-auto">
                  <p>Portador do CPF: ***.***.***-**</p>
                  <p>Por ter participado das atividades teóricas e práticas, concluindo de forma satisfatória o curso de:</p>
                </div>

                {/* Course Name Highlight Banner */}
                <div className="bg-emerald-50 border border-emerald-200 py-2 px-4 rounded-lg inline-block shadow-xs">
                  <span className="font-tech text-xs sm:text-sm md:text-base font-extrabold text-emerald-900 tracking-wide">
                    GPS E PILOTO AUTOMÁTICO EM MÁQUINAS AGRÍCOLAS
                  </span>
                </div>

                <p className="text-[10px] sm:text-xs text-slate-500 font-mono">
                  Carga Horária: 20 Horas • Conforme Normas Regulamentadoras NR-12 e NR-31
                </p>
              </div>

              {/* Signatures & Official INPROTEC Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-center">
                
                {/* Director Signature */}
                <div className="flex-1 min-w-[130px]">
                  <div className="h-7 flex items-center justify-center">
                    <span className="font-serif italic text-slate-800 text-sm font-semibold tracking-wider">
                      Alyson Nogueira Viana
                    </span>
                  </div>
                  <div className="w-32 mx-auto border-t border-slate-400 mt-0.5 pt-0.5">
                    <p className="text-[10px] font-bold text-slate-800">Alyson Nogueira Viana</p>
                    <p className="text-[9px] text-slate-500">Diretor Geral</p>
                  </div>
                </div>

                {/* Engineer Signature */}
                <div className="flex-1 min-w-[130px]">
                  <div className="h-7 flex items-center justify-center">
                    <span className="font-serif italic text-slate-800 text-sm font-semibold tracking-wider">
                      Thiago Pereira Soares
                    </span>
                  </div>
                  <div className="w-36 mx-auto border-t border-slate-400 mt-0.5 pt-0.5">
                    <p className="text-[10px] font-bold text-slate-800">Thiago Pereira Soares</p>
                    <p className="text-[9px] text-slate-500">Eng. Seg. Trabalho / CREA 185889D</p>
                  </div>
                </div>

                {/* INPROTEC Seal */}
                <div className="flex items-center justify-center gap-1.5 flex-1 min-w-[110px]">
                  <div className="w-8 h-8 rounded-full border-2 border-emerald-600 bg-emerald-50 flex items-center justify-center text-emerald-700">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-extrabold text-emerald-800 font-tech">INPROTEC</p>
                    <p className="text-[8px] text-slate-500 uppercase font-mono">Registro Nacional</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* 2. FOREGROUND CARTEIRINHA DO OPERADOR                    */}
        {/* Posicionamento adaptativo: limpo no mobile e sobreposto no desktop */}
        {/* ======================================================== */}
        <div className="w-full max-w-2xl mt-4 sm:-mt-20 md:-mt-24 z-20 px-1 sm:px-4 transform sm:-rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4),0_0_20px_rgba(16,185,129,0.15)] border-2 border-emerald-600/60 overflow-hidden text-slate-900">
            
            {/* Carteirinha Grid: Left Panel (ID) + Right Panel (NRs & Syllabus) */}
            <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              
              {/* LEFT FLAP: Identification & Machines */}
              <div className="md:col-span-6 p-4 sm:p-5 flex gap-3 relative bg-gradient-to-r from-emerald-50/60 to-white">
                
                {/* Vertical Green Spine */}
                <div className="w-8 sm:w-9 bg-emerald-700 rounded-lg flex flex-col items-center justify-between py-2 text-white font-tech font-extrabold shrink-0 shadow-xs">
                  <span className="text-xs">NR</span>
                  <span className="text-sm tracking-widest writing-vertical font-tech -rotate-90 my-auto">
                    2026
                  </span>
                  <Award className="w-3.5 h-3.5 text-emerald-200" />
                </div>

                {/* Flap Content */}
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-extrabold text-emerald-800 font-tech uppercase leading-tight">
                        INPROTEC
                      </p>
                      <p className="text-[9px] text-slate-600 font-medium">Profissões e Treinamentos</p>
                    </div>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                      OPERADOR
                    </span>
                  </div>

                  {/* Qualified Machines Checklist */}
                  <div className="space-y-0.5 text-[10px] font-bold text-slate-800 pt-1">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>Colheitadeira de Grãos</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-700">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>GPS e Piloto Automático</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>Trator Agrícola de Roda</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>Pulverizador Autopropelido</span>
                    </div>
                  </div>

                  {/* Operator Name Field */}
                  <div className="bg-white border border-emerald-400 rounded-lg p-2 shadow-xs mt-2">
                    <p className="text-[8px] font-mono text-emerald-700 font-bold uppercase">NOME DO OPERADOR:</p>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900 font-tech truncate">
                      {displayName}
                    </p>
                  </div>

                  {/* CPF & Date */}
                  <div className="flex items-center justify-between text-[9px] text-slate-500 font-mono pt-1">
                    <span>Data: 2026</span>
                    <span>CPF: XXX.XXX.XXX-XX</span>
                  </div>

                  <p className="text-[8px] text-emerald-700 font-mono font-bold text-center pt-1">
                    www.inprotectreinamentos.com.br
                  </p>
                </div>

              </div>

              {/* RIGHT FLAP: Ministry of Labor NR regulations & Syllabus */}
              <div className="md:col-span-6 p-4 sm:p-5 flex flex-col justify-between space-y-2.5 bg-white">
                
                <div>
                  <div className="flex items-center justify-between pb-1">
                    <p className="text-[11px] font-extrabold text-slate-900 font-tech">
                      CONTEÚDO PROGRAMÁTICO
                    </p>
                    <span className="text-[8px] font-mono text-slate-400">REG: #2026-BR</span>
                  </div>

                  {/* Legal NR Box */}
                  <div className="p-2 rounded-lg bg-red-50/80 border border-red-200 text-left space-y-0.5">
                    <p className="text-[9px] font-extrabold text-red-900">
                      Base Legal: Portaria 3.214/78 (NR-12 e NR-31)
                    </p>
                    <p className="text-[8px] text-red-700 leading-tight">
                      Documento válido por 12 meses. Reciclagem anual de acordo com a portaria 3.214/78 do MTE.
                    </p>
                  </div>

                  {/* Modules quick bullets */}
                  <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[8.5px] text-slate-600 pt-2 font-medium">
                    <p>• Segurança na Operação</p>
                    <p>• Calibração de Sensores</p>
                    <p>• Direcionamento A/B</p>
                    <p>• Compensação TCM</p>
                    <p>• Correção RTK & GNSS</p>
                    <p>• Check-list de Campo</p>
                  </div>
                </div>

                {/* Bottom QR Code & Verification */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded bg-slate-900 text-white">
                      <QrCode className="w-9 h-9" />
                    </div>
                    <div className="text-[8px] font-mono text-slate-600">
                      <p className="font-bold text-emerald-800">QR-CODE OFICIAL</p>
                      <p>Validação via câmera</p>
                    </div>
                  </div>

                  <div className="text-right text-[8px] font-mono text-slate-500">
                    <p className="font-bold text-slate-800">INPROTEC TREINAMENTOS</p>
                    <p>Uberlândia / MG</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
      </div>
    </ImageDropSlot>
  );
};
