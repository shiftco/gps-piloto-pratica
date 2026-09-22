import React from 'react';
import { 
  Radio, 
  Cpu, 
  Activity, 
  Wifi, 
  Layers, 
  Sliders, 
  CheckCircle2, 
  Target, 
  Zap, 
  Gauge, 
  Crosshair,
  Satellite,
  Compass
} from 'lucide-react';

export const GpsHolographicMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-4 sm:py-8 select-none">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-10 w-48 h-48 bg-cyan-500/15 rounded-full blur-[70px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-56 h-56 bg-emerald-400/15 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Grid container: Left HUDs + Center Monitor + Right HUDs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">

        {/* LEFT HOLOGRAPHIC HUD: SINAL RTK & CONSTELAÇÃO */}
        <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col gap-4">
          <div className="relative rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-cyan-500/40 p-4.5 shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:border-cyan-400 transition-all group">
            {/* Hologram Corner Accents */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>

            {/* Header */}
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2.5 mb-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="font-mono text-xs font-bold tracking-wider text-cyan-300 uppercase">
                  SINAL RTK & GNSS
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-500/40 font-mono text-[10px] font-bold text-cyan-200">
                FIXO ±1.4CM
              </span>
            </div>

            {/* Radar / Constellation Mini Visualization */}
            <div className="relative h-28 w-full bg-slate-900/90 rounded-xl border border-cyan-900/60 flex items-center justify-center overflow-hidden mb-3">
              {/* Polar Grid Circles */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-24 h-24 rounded-full border border-cyan-500/20"></div>
                <div className="w-16 h-16 rounded-full border border-cyan-500/25"></div>
                <div className="w-8 h-8 rounded-full border border-cyan-500/30"></div>
                <div className="w-full h-[1px] bg-cyan-500/20 absolute"></div>
                <div className="h-full w-[1px] bg-cyan-500/20 absolute"></div>
              </div>

              {/* Satellites blips */}
              <div className="absolute top-4 left-6 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse"></div>
              <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></div>
              <div className="absolute bottom-6 left-12 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></div>
              <div className="absolute bottom-5 right-7 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></div>
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#fff]"></div>

              {/* Center crosshair */}
              <div className="relative z-10 text-center font-mono text-[11px] text-cyan-200">
                <div className="text-white font-bold text-xs">21 SATÉLITES</div>
                <div className="text-[10px] text-cyan-400">GPS • GLONASS • GALILEO</div>
              </div>
            </div>

            {/* Telemetry Stats List */}
            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400 text-[11px]">Latência Correção:</span>
                <span className="text-cyan-300 font-bold">0.8s</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400 text-[11px]">Rádio Base UHF:</span>
                <span className="text-emerald-400 font-bold">450 MHz (98%)</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400 text-[11px]">Desvio Lateral:</span>
                <span className="text-emerald-300 font-bold">0.3 cm</span>
              </div>
            </div>

            {/* Projection connector tag (Desktop) */}
            <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"></div>
          </div>
        </div>

        {/* CENTER COLUMN: RUGGED GPS MONITOR */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          {/* Outer Rugged Bezel Frame */}
          <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-black p-3 sm:p-4 border-4 border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(16,185,129,0.25)]">
            
            {/* Bezel Screw Accents */}
            <div className="absolute top-2 left-3 w-2 h-2 rounded-full bg-slate-700 border border-slate-600"></div>
            <div className="absolute top-2 right-3 w-2 h-2 rounded-full bg-slate-700 border border-slate-600"></div>
            <div className="absolute bottom-2 left-3 w-2 h-2 rounded-full bg-slate-700 border border-slate-600"></div>
            <div className="absolute bottom-2 right-3 w-2 h-2 rounded-full bg-slate-700 border border-slate-600"></div>

            {/* Monitor Header Label */}
            <div className="flex items-center justify-between px-3 py-1 mb-1.5 text-[10px] font-mono text-slate-400 tracking-wider">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                AG-COMMANDER 10.4"
              </span>
              <span className="text-slate-500 font-mono">CALIBRAÇÃO ATIVA</span>
            </div>

            {/* ACTUAL MONITOR SCREEN */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border-2 border-emerald-500/50 shadow-inner">
              
              {/* TOP STATUS & LIGHTBAR */}
              <div className="bg-slate-900/95 border-b border-emerald-500/30 p-2 sm:px-3 text-white">
                {/* Upper telemetry indicators */}
                <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
                      PISTA A/B #04
                    </span>
                    <span className="text-slate-300 hidden sm:inline">RUMO: 184° SUL</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold">7.2 KM/H</span>
                    <span className="text-slate-400">10:42:15</span>
                  </div>
                </div>

                {/* Lightbar (LED Guidance Line) */}
                <div className="flex items-center justify-center gap-1 py-1 bg-slate-950/80 rounded-md border border-slate-800 px-2">
                  {/* Left Red/Yellow LEDs */}
                  <span className="w-2 sm:w-2.5 h-2 rounded-xs bg-red-950"></span>
                  <span className="w-2 sm:w-2.5 h-2 rounded-xs bg-yellow-950"></span>
                  <span className="w-2 sm:w-2.5 h-2 rounded-xs bg-yellow-900"></span>
                  <span className="w-2 sm:w-2.5 h-2 rounded-xs bg-yellow-700"></span>
                  
                  {/* Center Green Target LEDs */}
                  <span className="w-2 sm:w-2.5 h-2 rounded-xs bg-emerald-600"></span>
                  <span className="w-3.5 sm:w-4 h-2.5 rounded-xs bg-emerald-400 shadow-[0_0_8px_#34d399] border border-white animate-pulse"></span>
                  <span className="w-2 sm:w-2.5 h-2 rounded-xs bg-emerald-600"></span>

                  {/* Right Red/Yellow LEDs */}
                  <span className="w-2 sm:w-2.5 h-2 rounded-xs bg-yellow-700"></span>
                  <span className="w-2 sm:w-2.5 h-2 rounded-xs bg-yellow-900"></span>
                  <span className="w-2 sm:w-2.5 h-2 rounded-xs bg-yellow-950"></span>
                  <span className="w-2 sm:w-2.5 h-2 rounded-xs bg-red-950"></span>
                </div>
              </div>

              {/* MAIN GPS WORKING FIELD SCREEN (SVG CANVAS) */}
              <div className="relative h-56 sm:h-72 w-full bg-gradient-to-b from-[#0b2416] via-[#081b11] to-[#040e09] overflow-hidden flex items-center justify-center">
                
                {/* 3D Perspective Field Soil & Grid Lines */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 300">
                  <defs>
                    <linearGradient id="swathGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#059669" stopOpacity="0.75" />
                    </linearGradient>
                    <linearGradient id="abLineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                  </defs>

                  {/* Background Soil Furrows / Grid (Perspective lines converging to horizon) */}
                  <g stroke="#1e3a29" strokeWidth="0.8" opacity="0.6">
                    <line x1="200" y1="20" x2="-50" y2="300" />
                    <line x1="200" y1="20" x2="30" y2="300" />
                    <line x1="200" y1="20" x2="110" y2="300" />
                    <line x1="200" y1="20" x2="160" y2="300" />
                    <line x1="200" y1="20" x2="240" y2="300" />
                    <line x1="200" y1="20" x2="290" y2="300" />
                    <line x1="200" y1="20" x2="370" y2="300" />
                    <line x1="200" y1="20" x2="450" y2="300" />
                  </g>

                  {/* Horizon Line */}
                  <line x1="0" y1="25" x2="400" y2="25" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />

                  {/* Previous Worked Swath Coverage (Left) */}
                  <polygon points="160,25 110,300 20,300 120,25" fill="url(#swathGrad)" opacity="0.5" />
                  
                  {/* Current Active Swath (Center Pass) */}
                  <polygon points="190,25 210,25 270,300 130,300" fill="url(#swathGrad)" opacity="0.65" />

                  {/* MASTER A-B GUIDANCE LINE (Glowing Center Vector) */}
                  <line 
                    x1="200" y1="25" 
                    x2="200" y2="300" 
                    stroke="url(#abLineGrad)" 
                    strokeWidth="3.5" 
                    strokeDasharray="6,4"
                    className="drop-shadow-[0_0_8px_#10b981]" 
                  />

                  {/* Point A Marker */}
                  <circle cx="200" cy="240" r="4.5" fill="#34d399" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="210" y="244" fill="#34d399" fontSize="10" fontFamily="monospace" fontWeight="bold">PONTO A</text>

                  {/* Point B Marker Horizon */}
                  <circle cx="200" cy="40" r="3.5" fill="#34d399" stroke="#ffffff" strokeWidth="1" />
                  <text x="208" y="44" fill="#34d399" fontSize="9" fontFamily="monospace" fontWeight="bold">PONTO B</text>

                  {/* TRACTOR + IMPLEMENT TOP-DOWN ICON */}
                  <g transform="translate(182, 175)">
                    {/* Implement Bar (e.g. 18m Planter / Sprayer bar with active sections) */}
                    <rect x="-30" y="42" width="96" height="5" rx="2" fill="#10b981" stroke="#34d399" strokeWidth="1" />
                    
                    {/* Hitch Link */}
                    <line x1="18" y1="28" x2="18" y2="42" stroke="#64748b" strokeWidth="2.5" />

                    {/* Tractor Body */}
                    <rect x="5" y="0" width="26" height="32" rx="4" fill="#047857" stroke="#34d399" strokeWidth="1.5" />
                    
                    {/* Tractor Cab / Roof */}
                    <rect x="9" y="8" width="18" height="15" rx="2" fill="#064e3b" />
                    
                    {/* StarFire GPS Antenna Dome on Cab */}
                    <circle cx="18" cy="15" r="4" fill="#facc15" stroke="#ffffff" strokeWidth="1" className="animate-pulse" />

                    {/* Front Tires */}
                    <rect x="0" y="2" width="5" height="10" rx="1.5" fill="#0f172a" />
                    <rect x="31" y="2" width="5" height="10" rx="1.5" fill="#0f172a" />

                    {/* Rear Dual Tires */}
                    <rect x="-2" y="18" width="7" height="15" rx="2" fill="#0f172a" />
                    <rect x="31" y="18" width="7" height="15" rx="2" fill="#0f172a" />
                  </g>
                </svg>

                {/* On-Screen Touch Buttons (Right Sidebar) */}
                <div className="absolute right-2 top-2 bottom-2 w-10 flex flex-col justify-between py-1 font-mono text-[9px] text-white">
                  <div className="bg-slate-900/80 border border-slate-700 rounded p-1 text-center hover:bg-emerald-600 transition-colors cursor-pointer">
                    A-B
                  </div>
                  <div className="bg-slate-900/80 border border-slate-700 rounded p-1 text-center hover:bg-emerald-600 transition-colors cursor-pointer">
                    PISTA
                  </div>
                  <div className="bg-slate-900/80 border border-slate-700 rounded p-1 text-center hover:bg-emerald-600 transition-colors cursor-pointer">
                    TALHÃO
                  </div>
                  <div className="bg-slate-900/80 border border-slate-700 rounded p-1 text-center hover:bg-emerald-600 transition-colors cursor-pointer">
                    MENU
                  </div>
                </div>

                {/* Floating GPS HUD Tag inside screen */}
                <div className="absolute bottom-2 left-2 bg-slate-950/85 backdrop-blur-md border border-emerald-500/40 px-2.5 py-1.5 rounded-lg text-white font-mono text-[10px] space-y-0.5">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    PILOTO: ATIVO (AUTO-STEER)
                  </div>
                  <div className="text-slate-300">
                    LARGURA: 18.00M | ERRO: 0.3CM
                  </div>
                </div>

              </div>

              {/* BOTTOM MONITOR CONTROL BAR */}
              <div className="bg-slate-900 p-2 px-3 border-t border-slate-800 text-white flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
                  <span className="font-bold text-white text-[11px] sm:text-xs">PRECISÃO RTK CONECTADA</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-slate-400">
                  <span>ÁREA: 38.4 HA</span>
                  <span className="text-emerald-400 font-bold">100% EMBARCADO</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* RIGHT HOLOGRAPHIC HUDS: SEÇÕES + PILOTO */}
        <div className="lg:col-span-3 order-3 flex flex-col gap-4">
          
          {/* HUD 2: CONTROLE DE SEÇÕES E TAXA */}
          <div className="relative rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-emerald-500/40 p-4.5 shadow-[0_0_25px_rgba(16,185,129,0.2)] hover:border-emerald-400 transition-all group">
            {/* Hologram Corner Accents */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-emerald-400"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-emerald-400"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-emerald-400"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-emerald-400"></div>

            {/* Header */}
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2.5 mb-2.5">
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs font-bold tracking-wider text-emerald-300 uppercase">
                  CORTE DE SEÇÕES
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 font-mono text-[10px] font-bold text-emerald-300">
                16 SEÇÕES
              </span>
            </div>

            {/* 16 Sections Graphical Display */}
            <div className="mb-3">
              <div className="text-[10px] font-mono text-slate-400 mb-1.5 flex justify-between">
                <span>BARRA ATIVA (16 SEÇÕES):</span>
                <span className="text-emerald-400 font-bold">100% OPERANDO</span>
              </div>
              <div className="grid grid-cols-8 gap-1 p-1.5 bg-slate-900 rounded-lg border border-slate-800">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-4 rounded-xs bg-emerald-500 shadow-[0_0_5px_#10b981] flex items-center justify-center text-[8px] font-mono font-bold text-slate-950"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Flow Rate & Savings */}
            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400 text-[11px]">Taxa Alvo:</span>
                <span className="text-emerald-300 font-bold">140 L/ha</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400 text-[11px]">Sobreposição:</span>
                <span className="text-cyan-400 font-bold">0.0% (Automático)</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400 text-[11px]">Economia Insumo:</span>
                <span className="text-emerald-400 font-bold">-8.5%</span>
              </div>
            </div>

            {/* Projection connector tag (Desktop) */}
            <div className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-[2px] bg-gradient-to-l from-emerald-400 to-transparent"></div>
          </div>

          {/* HUD 3: PILOTO AUTOMÁTICO & COMPENSAÇÃO TCM */}
          <div className="relative rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-emerald-400/40 p-4.5 shadow-[0_0_25px_rgba(52,211,153,0.2)] hover:border-emerald-300 transition-all group">
            {/* Hologram Corner Accents */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-emerald-300"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-emerald-300"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-emerald-300"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-emerald-300"></div>

            {/* Header */}
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2.5 mb-2.5">
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs font-bold tracking-wider text-emerald-300 uppercase">
                  PILOTO & TCM
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 font-mono text-[10px] font-bold text-emerald-300">
                ENGATADO
              </span>
            </div>

            {/* Steer Status Row */}
            <div className="p-2.5 rounded-xl bg-slate-900 border border-emerald-500/30 flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Gauge className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-bold text-white">AUTO-STEER ON</div>
                  <div className="text-[9px] font-mono text-emerald-400">Esterçamento Hidráulico</div>
                </div>
              </div>
              <span className="text-xs font-mono font-extrabold text-emerald-400">98% GAIN</span>
            </div>

            {/* TCM Pitch & Roll */}
            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400 text-[11px]">Compensação TCM:</span>
                <span className="text-emerald-300 font-bold">Ativa (3D)</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400 text-[11px]">Inclinação (Roll):</span>
                <span className="text-cyan-300 font-bold">+1.2°</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400 text-[11px]">Arfagem (Pitch):</span>
                <span className="text-cyan-300 font-bold">-0.5°</span>
              </div>
            </div>

            {/* Projection connector tag (Desktop) */}
            <div className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-[2px] bg-gradient-to-l from-emerald-400 to-transparent"></div>
          </div>

        </div>

      </div>

      {/* Bottom Technical Banner */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-slate-300 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>COMPATÍVEL COM: JOHN DEERE (GS3/GS4) • TRIMBLE • CASE IH (PRO700) • TOPCON • AGRES • STARA</span>
        </div>
      </div>
    </div>
  );
};
