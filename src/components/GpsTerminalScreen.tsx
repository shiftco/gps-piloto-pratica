import React, { useState } from 'react';

export const GpsTerminalScreen: React.FC = () => {
  const [pilotEngaged, setPilotEngaged] = useState(false);
  const [implementRaised, setImplementRaised] = useState(false);
  const [sensitivity, setSensitivity] = useState(55);

  return (
    <div className="w-full bg-[#090e0b] rounded-2xl overflow-hidden border border-zinc-700/80 shadow-2xl select-none font-sans text-slate-800">
      
      {/* ================= TOP STATUS BAR ================= */}
      <div className="h-10 bg-[#121b15] border-b border-[#223026] px-3 flex items-center justify-between text-white text-xs">
        {/* Menu Button */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#17241c] hover:bg-[#1f3025] rounded border border-[#2d3e32] cursor-pointer transition-colors">
          <span className="font-bold text-sm">Menu</span>
          <div className="w-4 h-4 rounded border border-zinc-500/70 flex items-center justify-center text-[10px] text-zinc-300">
            ◀
          </div>
        </div>

        {/* Center: Erro Lateral & Lightbar */}
        <div className="flex items-center gap-3">
          <span className="text-zinc-300 font-semibold text-xs hidden sm:inline">Erro lateral</span>
          
          {/* Lightbar segment display */}
          <div className="flex items-center gap-1 bg-[#1a261e] border border-[#2b3d30] px-2 py-1 rounded">
            <span className="text-[10px] text-zinc-400 font-mono">━</span>
            <div className="w-24 sm:w-44 h-3 bg-[#0d1610] rounded-sm relative flex items-center justify-center border border-zinc-700/50">
              <div className="w-4 h-4 bg-white rounded-xs shadow-sm border border-zinc-400"></div>
            </div>
            <span className="text-[10px] text-zinc-400 font-mono">━ m</span>
          </div>

          {/* Nudge Arrows */}
          <div className="flex items-center gap-1 bg-[#1a261e] border border-[#2b3d30] px-2 py-0.5 rounded text-[11px] text-zinc-300">
            <span className="cursor-pointer hover:text-white">«</span>
            <span className="text-[9px]">◈</span>
            <span className="cursor-pointer hover:text-white">»</span>
          </div>
        </div>

        {/* Right: Erro de rumo */}
        <div className="text-zinc-300 text-xs font-semibold">
          Erro de rumo <span className="font-mono text-zinc-400">━</span>
        </div>
      </div>

      {/* ================= MAIN SPLIT: SIDEBAR + FIELD VIEWPORT ================= */}
      <div className="flex flex-col md:flex-row min-h-[440px] lg:min-h-[520px]">
        
        {/* ========== LEFT CONTROL PANEL ========== */}
        <div className="w-full md:w-[280px] lg:w-[300px] bg-[#e6e9e7] border-r border-[#c2c8c4] p-2.5 flex flex-col justify-between shrink-0 space-y-3">
          
          <div>
            {/* Top 6 Navigation Matrix */}
            <div className="grid grid-cols-3 gap-1.5 mb-3">
              <button type="button" className="p-1.5 bg-white hover:bg-slate-50 border border-slate-300 rounded shadow-xs text-center flex flex-col items-center justify-center gap-0.5">
                <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                <span className="text-[11px] font-semibold text-slate-800">Mapa</span>
              </button>

              <button type="button" className="p-1.5 bg-white hover:bg-slate-50 border border-slate-300 rounded shadow-xs text-center flex flex-col items-center justify-center gap-0.5">
                <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                <span className="text-[11px] font-semibold text-slate-800">Talhões</span>
              </button>

              {/* GUIAMENTO (ACTIVE SOLID GREEN) */}
              <button type="button" className="p-1.5 bg-[#1b7a2d] border border-[#135e21] rounded shadow-xs text-center flex flex-col items-center justify-center gap-0.5 text-white">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                <span className="text-[11px] font-bold text-white">Guiamento</span>
              </button>

              <button type="button" className="p-1.5 bg-white hover:bg-slate-50 border border-slate-300 rounded shadow-xs text-center flex flex-col items-center justify-center gap-0.5">
                <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                <span className="text-[11px] font-semibold text-slate-800">Máquina</span>
              </button>

              <button type="button" className="p-1.5 bg-white hover:bg-slate-50 border border-slate-300 rounded shadow-xs text-center flex flex-col items-center justify-center gap-0.5">
                <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                <span className="text-[11px] font-semibold text-slate-800">Implemento</span>
              </button>

              <button type="button" className="p-1.5 bg-white hover:bg-slate-50 border border-slate-300 rounded shadow-xs text-center flex flex-col items-center justify-center gap-0.5">
                <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
                <span className="text-[11px] font-semibold text-slate-800">GNSS</span>
              </button>

              <button type="button" className="p-1.5 bg-white hover:bg-slate-50 border border-slate-300 rounded shadow-xs text-center flex flex-col items-center justify-center gap-0.5">
                <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                <span className="text-[11px] font-semibold text-slate-800">Trabalho</span>
              </button>
            </div>

            {/* Section: Tipo de linha */}
            <div className="space-y-1.5 border-t border-slate-300 pt-2">
              <span className="text-xs font-bold text-slate-900 block">Tipo de linha</span>
              
              <div className="grid grid-cols-2 gap-1.5">
                {/* AB Reta (Active Green) */}
                <button type="button" className="p-2 bg-[#1b7a2d] text-white border border-[#135e21] rounded-md flex flex-col items-center justify-center shadow-xs">
                  <div className="flex gap-1 mb-1">
                    <span className="w-0.5 h-3.5 bg-white rounded-full"></span>
                    <span className="w-0.5 h-4 bg-white rounded-full"></span>
                    <span className="w-0.5 h-3.5 bg-white rounded-full"></span>
                  </div>
                  <span className="text-xs font-bold">AB reta</span>
                </button>

                {/* AB Curva */}
                <button type="button" className="p-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-md flex flex-col items-center justify-center shadow-xs">
                  <span className="text-xs font-mono mb-1">〰️</span>
                  <span className="text-xs font-semibold">AB curva</span>
                </button>

                {/* Contorno */}
                <button type="button" className="p-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-md flex flex-col items-center justify-center shadow-xs">
                  <span className="text-xs font-mono mb-1">∩</span>
                  <span className="text-xs font-semibold">Contorno</span>
                </button>

                {/* Círculo */}
                <button type="button" className="p-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-md flex flex-col items-center justify-center shadow-xs">
                  <span className="text-xs font-mono mb-1">◎</span>
                  <span className="text-xs font-semibold">Círculo</span>
                </button>
              </div>

              {/* Marcar A & Marcar B */}
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <button type="button" className="py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs rounded border border-slate-300 text-center">
                  Marcar A
                </button>
                <button type="button" className="py-1.5 bg-[#0d6e27] hover:bg-[#0b5a20] text-white font-bold text-xs rounded border border-[#084819] text-center">
                  Marcar B
                </button>
              </div>

              {/* Nenhuma linha criada */}
              <div className="pt-1">
                <span className="text-[11px] font-medium text-slate-700 block mb-1">Nenhuma linha criada</span>
                <div className="grid grid-cols-3 gap-1 text-[11px]">
                  <button type="button" className="py-1 bg-slate-200 text-slate-700 rounded text-center font-mono">-5 cm</button>
                  <button type="button" className="py-1 bg-slate-200 text-slate-700 rounded text-center font-mono">+5 cm</button>
                  <button type="button" className="py-1 bg-slate-200 text-slate-700 rounded text-center font-semibold">Apagar</button>
                </div>
              </div>
            </div>

            {/* Section: Piloto Automático */}
            <div className="space-y-2 border-t border-slate-300 pt-2.5">
              <span className="text-xs font-bold text-slate-900 block">Piloto automático</span>

              {/* Engatar piloto (BIG AMBER BUTTON) */}
              <button 
                type="button" 
                onClick={() => setPilotEngaged(!pilotEngaged)}
                className={`w-full py-2.5 px-3 rounded-lg font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer ${
                  pilotEngaged 
                    ? 'bg-[#1b7a2d] text-white hover:bg-[#156625]' 
                    : 'bg-[#e5ac00] hover:bg-[#d49e00] text-slate-950'
                }`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path d="M12 3v6m0 6v6M3 12h6m6 0h6" /></svg>
                <span>{pilotEngaged ? 'PILOTO ENGATADO' : 'Engatar piloto'}</span>
              </button>

              {/* Sensibilidade Slider */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-800 font-semibold">Sensibilidade</span>
                  <span className="text-slate-950 font-bold font-mono text-sm">{sensitivity}</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="100" 
                  value={sensitivity} 
                  onChange={(e) => setSensitivity(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-[#1b7a2d]"
                />
                <p className="text-[9px] text-slate-600 leading-tight">
                  Valores altos corrigem mais rápido, mas provocam oscilação sobre a linha.
                </p>
              </div>

              {/* Levantar Implemento Button */}
              <button 
                type="button"
                onClick={() => setImplementRaised(!implementRaised)}
                className="w-full py-2 bg-[#0d6e27] hover:bg-[#0a571f] text-white font-bold text-xs rounded-md shadow-xs transition-colors cursor-pointer"
              >
                {implementRaised ? 'Abaixar implemento' : 'Levantar implemento'}
              </button>
            </div>

          </div>

        </div>

        {/* ========== CENTER: AGRICULTURAL FIELD VIEWPORT ========== */}
        <div className="flex-1 bg-[#3a291d] relative overflow-hidden flex flex-col justify-between min-h-[380px] lg:min-h-[460px]">
          
          {/* Soil Pattern Texture */}
          <div 
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, #302015, #302015 2px, transparent 2px, transparent 24px)`
            }}
          />

          {/* Worked Swath (Rastro Verde de Plantio/Cobertura) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 bottom-0 w-24 sm:w-28 bg-gradient-to-b from-[#1b8535] via-[#22a442] to-[#15803d] border-x border-[#166534] shadow-[0_0_20px_rgba(34,197,94,0.35)] opacity-95">
            {/* Centerline dashed guide inside swath */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] border-r border-dashed border-[#86efac]/60"></div>
          </div>

          {/* Yellow Guidance Centerline Ahead of Tractor */}
          <div className="absolute top-14 left-1/2 -translate-x-1/2 h-28 w-[3px] bg-gradient-to-t from-[#ffd000] to-[#ffd000]/70 rounded-full shadow-[0_0_8px_#ffd000]"></div>

          {/* ================= TRACTOR & SEEDER IMPLEMENT GRAPHIC ================= */}
          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
            
            {/* Tractor */}
            <div className="relative w-10 sm:w-12 h-14 sm:h-16 flex flex-col items-center">
              {/* Front Tires */}
              <div className="absolute top-1 -left-2 w-2.5 h-6 bg-zinc-950 rounded-sm"></div>
              <div className="absolute top-1 -right-2 w-2.5 h-6 bg-zinc-950 rounded-sm"></div>
              {/* Rear Tires (Duals) */}
              <div className="absolute bottom-1 -left-3.5 w-3.5 h-8 bg-zinc-950 rounded-sm"></div>
              <div className="absolute bottom-1 -right-3.5 w-3.5 h-8 bg-zinc-950 rounded-sm"></div>

              {/* Tractor Body (John Deere Green) */}
              <div className="w-7 sm:w-8 h-full bg-gradient-to-b from-[#409c2d] via-[#2c771c] to-[#1e5812] rounded-md border border-[#14470c] shadow-md flex flex-col items-center justify-between p-1">
                {/* Yellow Front Grill */}
                <div className="w-4 h-1.5 bg-[#ffd000] rounded-xs mt-0.5"></div>
                {/* Cab Tinted Windshield */}
                <div className="w-5 h-4 bg-sky-200/90 rounded-xs border border-slate-700/80 my-auto relative">
                  {/* StarFire GPS Receiver on Cab Roof */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#ffd000] border border-amber-600 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-white"></div>
                  </div>
                </div>
                {/* Rear Hitch Point */}
                <div className="w-2 h-1 bg-zinc-800"></div>
              </div>
            </div>

            {/* Planter / Seeder Implement */}
            <div className="w-24 sm:w-28 relative -mt-0.5 flex flex-col items-center">
              {/* Hitch connector */}
              <div className="w-1.5 h-2.5 bg-zinc-800"></div>
              
              {/* Main Implement Toolbar */}
              <div className="w-full h-2.5 bg-[#1b7a2d] border border-[#145e22] rounded-xs shadow-sm flex items-center justify-between px-1">
                {/* 3 Seed Hoppers (Yellow Boxes) */}
                <div className="w-6 h-3 -mt-2 bg-[#ffd000] border border-amber-600 rounded-xs"></div>
                <div className="w-7 h-3 -mt-2 bg-[#ffd000] border border-amber-600 rounded-xs"></div>
                <div className="w-6 h-3 -mt-2 bg-[#ffd000] border border-amber-600 rounded-xs"></div>
              </div>

              {/* 13 Planting Row Units / Discs */}
              <div className="w-full flex justify-between px-0.5 pt-0.5">
                {[...Array(13)].map((_, i) => (
                  <span key={i} className="w-[1.5px] h-2 bg-zinc-950"></span>
                ))}
              </div>
            </div>

          </div>

          {/* Floating Controls Overlay (Left) */}
          <div className="absolute top-3 left-3 flex flex-col gap-1 z-20">
            <button type="button" className="w-7 h-7 bg-white/95 hover:bg-white text-slate-800 font-bold rounded border border-slate-300 flex items-center justify-center text-sm shadow-sm">+</button>
            <button type="button" className="w-7 h-7 bg-white/95 hover:bg-white text-slate-800 font-bold rounded border border-slate-300 flex items-center justify-center text-sm shadow-sm">−</button>
            <button type="button" className="w-7 h-7 bg-white/95 hover:bg-white text-slate-800 rounded border border-slate-300 flex items-center justify-center text-xs shadow-sm">👁️</button>
            <button type="button" className="w-7 h-7 bg-white/95 hover:bg-white text-slate-800 font-bold rounded border border-slate-300 flex items-center justify-center text-[10px] shadow-sm">N↑</button>
            <button type="button" className="w-7 h-7 bg-white/95 hover:bg-white text-slate-800 rounded border border-slate-300 flex items-center justify-center text-xs shadow-sm">🎯</button>
          </div>

          {/* Top Right Badge: Piloto DESLIGADO / LIGADO */}
          <div className="absolute top-3 right-3 z-20">
            <div className="px-3.5 py-1.5 bg-[#141b16]/95 border border-[#2b3a2e] rounded-md text-right shadow-md">
              <span className="text-[10px] text-zinc-400 font-semibold block">Piloto</span>
              <span className={`font-black tracking-wider text-sm ${pilotEngaged ? 'text-emerald-400' : 'text-white'}`}>
                {pilotEngaged ? 'ENGATADO' : 'DESLIGADO'}
              </span>
            </div>
          </div>

          {/* Bottom Left Badge: Rumo & Posição GPS */}
          <div className="absolute bottom-3 left-3 z-20">
            <div className="bg-[#0b120e]/95 border border-zinc-800 rounded-md p-1.5 flex items-center gap-2.5 text-white shadow-md text-xs">
              <div className="pl-1">
                <span className="text-[9px] text-zinc-400 block font-semibold">Rumo</span>
                <span className="font-extrabold text-sm font-mono">360°</span>
              </div>
              <div className="w-[1px] h-6 bg-zinc-700"></div>
              <div className="pr-1">
                <span className="text-[9px] text-zinc-400 block font-semibold">Posição</span>
                <span className="font-mono text-[11px] text-zinc-200">12°32'51.10" S 55°43'17.84" W</span>
              </div>
            </div>
          </div>

          {/* Bottom Right Badge: Implemento & Automático */}
          <div className="absolute bottom-3 right-3 z-20">
            <div className="bg-[#0b120e]/95 border border-zinc-800 rounded-md p-1.5 flex items-center gap-2.5 text-white shadow-md text-xs">
              <div className="pl-1 text-center">
                <span className="text-[9px] text-zinc-400 block">Implemento</span>
                <span className="font-extrabold text-[11px] text-emerald-400">
                  {implementRaised ? 'LEVANTADO' : 'ABAIXADO'}
                </span>
              </div>
              <div className="w-[1px] h-6 bg-zinc-700"></div>
              <div className="pr-1 text-center">
                <span className="text-[9px] text-zinc-400 block">Automático</span>
                <span className="font-extrabold text-[11px] text-zinc-300">OFF</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ================= BOTTOM BAR: SEÇÕES & STATUS METRICS ================= */}
      <div className="bg-[#edf0ee] border-t border-slate-300 text-slate-900">
        
        {/* Top Strip: Seções 13/13 */}
        <div className="px-3 sm:px-4 py-2 border-b border-slate-300 flex items-center justify-between gap-2">
          <span className="text-xs font-bold text-slate-800 whitespace-nowrap">Seções 13/13</span>
          
          {/* 13 Active Section Green Rectangles */}
          <div className="flex-1 max-w-xl mx-2 flex gap-1 items-center">
            {[...Array(13)].map((_, i) => (
              <div 
                key={i} 
                className="flex-1 h-3 sm:h-3.5 bg-[#15803d] rounded-xs shadow-xs" 
                title={`Seção ${i + 1} ativa`}
              />
            ))}
          </div>

          <span className="text-xs font-bold text-slate-800 whitespace-nowrap">Corte 0.00 ha</span>
        </div>

        {/* 4 Bottom Metric Panels */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-slate-300 text-center">
          
          <div className="py-2 px-1">
            <span className="text-[10px] text-slate-600 block font-semibold">Área plantada</span>
            <span className="font-extrabold text-sm sm:text-base text-slate-900 font-mono">0.02 ha</span>
          </div>

          <div className="py-2 px-1">
            <span className="text-[10px] text-slate-600 block font-semibold">Cobertura</span>
            <span className="font-extrabold text-sm sm:text-base text-[#16a34a] font-mono">0.1%</span>
          </div>

          {/* Corte de seções (ACTIVE SOLID GREEN) */}
          <div className="py-2 px-1 bg-[#0d6e27] text-white">
            <span className="text-[10px] text-emerald-200 block font-semibold">Corte de seções</span>
            <span className="font-extrabold text-sm sm:text-base text-white tracking-wide">ATIVADO</span>
          </div>

          <div className="py-2 px-1">
            <span className="text-[10px] text-slate-600 block font-semibold">Sobreposição</span>
            <span className="font-extrabold text-sm sm:text-base text-slate-900 font-mono">0.00%</span>
          </div>

        </div>

      </div>

    </div>
  );
};
