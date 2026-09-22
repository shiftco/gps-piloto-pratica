import React, { useState } from 'react';
import { X, Radio, Compass, Cpu, Settings, Map, Play, RefreshCw, CheckCircle2, AlertTriangle, Layers, Sliders, Wifi, Volume2, Shield, Eye } from 'lucide-react';

interface SimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnrollClick: () => void;
}

type MachineTerminal = 'GS4_PRO' | 'INTELLIVIEW_IV' | 'PRO_700' | 'TRIMBLE_GFX';

export const SimulatorModal: React.FC<SimulatorModalProps> = ({
  isOpen,
  onClose,
  onEnrollClick
}) => {
  const [terminal, setTerminal] = useState<MachineTerminal>('GS4_PRO');
  const [guidanceType, setGuidanceType] = useState<'RETA_AB' | 'CURVA_AB' | 'CABECEIRA'>('RETA_AB');
  const [pointA, setPointA] = useState<boolean>(true);
  const [pointB, setPointB] = useState<boolean>(false);
  const [autopilotEngaged, setAutopilotEngaged] = useState<boolean>(false);
  const [steeringGain, setSteeringGain] = useState<number>(75);
  const [implementWidth, setImplementWidth] = useState<number>(18);
  const [overlapPct, setOverlapPct] = useState<number>(0);
  const [signal, setSignal] = useState<'RTK_FIX' | 'SF3' | 'EGNOS'>('RTK_FIX');
  const [simulatedSpeed, setSimulatedSpeed] = useState<number>(6.8);
  const [activeTab, setActiveTab] = useState<'MAP' | 'PILOT' | 'IMPLEMENT' | 'DIAGNOSTICS'>('MAP');

  if (!isOpen) return null;

  const handleRecordPointA = () => {
    setPointA(true);
  };

  const handleRecordPointB = () => {
    if (!pointA) return;
    setPointB(true);
    setAutopilotEngaged(true);
  };

  const handleReset = () => {
    setPointA(true);
    setPointB(false);
    setAutopilotEngaged(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-lg overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#070d0a] border-2 border-emerald-500/60 rounded-3xl shadow-2xl overflow-hidden glow-emerald-strong my-4 flex flex-col max-h-[92vh]">
        
        {/* Terminal Top Title Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#0a1811] border-b border-emerald-900/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Radio className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="font-tech text-base font-bold text-white flex items-center gap-2">
                SIMULADOR DE GPS E PILOTO AUTOMÁTICO VIRTUAL
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  INPROTEC LAB
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
                Ambiente de prática interativa das mais de 50 configurações ensinadas no curso
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onEnrollClick}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-tech uppercase tracking-wide cursor-pointer"
            >
              GARANTIR O CURSO COMPLETO
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Terminal Main Layout */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          
          {/* Machine Monitor Brand Selector Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-black/80 border border-emerald-900/60 font-mono text-xs">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px]">Selecionar Terminal:</span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'GS4_PRO', label: 'John Deere GS4' },
                { id: 'INTELLIVIEW_IV', label: 'NH Intelliview IV' },
                { id: 'PRO_700', label: 'Case Pro 700' },
                { id: 'TRIMBLE_GFX', label: 'Trimble GFX/NAV' }
              ].map(m => (
                <button
                  key={m.id}
                  onClick={() => setTerminal(m.id as MachineTerminal)}
                  className={`px-3 py-1 rounded-lg text-xs font-tech font-bold cursor-pointer transition-all ${
                    terminal === m.id
                      ? 'bg-emerald-500 text-black border border-emerald-400'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Screen Display Area */}
          <div className="bg-[#030705] rounded-2xl border-2 border-emerald-500/40 p-3 sm:p-4 shadow-2xl relative space-y-3">
            
            {/* Display HUD Bar */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-black/90 border border-emerald-900/80 text-[11px] font-mono">
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold font-tech flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  TERMINAL: {terminal.replace('_', ' ')}
                </span>
                <span className="text-slate-400 hidden sm:inline">|</span>
                <span className="text-slate-300 hidden sm:inline">
                  Sinal: <strong className="text-emerald-400">{signal} (±2.5cm)</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-slate-300">Velocidade: <strong className="text-white font-tech">{simulatedSpeed.toFixed(1)} km/h</strong></span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${autopilotEngaged ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'}`}>
                  {autopilotEngaged ? 'PILOTO ENGATADO' : 'PILOTO DESENGATADO'}
                </span>
              </div>
            </div>

            {/* Simulated Display Field Canvas */}
            <div className="relative bg-[#020503] rounded-xl border border-emerald-900/60 aspect-[16/9] sm:aspect-[21/9] overflow-hidden p-4 flex flex-col justify-between">
              
              {/* Field Grid lines */}
              <div className="absolute inset-0 bg-tech-dots opacity-30 pointer-events-none"></div>

              {/* Simulated Guidance Lines Vector Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 500 200">
                  {/* Grid Lines */}
                  <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(16,185,129,0.2)" strokeDasharray="4 4" />
                  <line x1="175" y1="0" x2="175" y2="200" stroke="rgba(16,185,129,0.3)" strokeDasharray="4 4" />
                  
                  {/* Active Guidance Line */}
                  <line x1="250" y1="0" x2="250" y2="200" stroke={autopilotEngaged ? "#34d399" : "#10b981"} strokeWidth={autopilotEngaged ? "4" : "2"} />

                  <line x1="325" y1="0" x2="325" y2="200" stroke="rgba(16,185,129,0.3)" strokeDasharray="4 4" />
                  <line x1="400" y1="0" x2="400" y2="200" stroke="rgba(16,185,129,0.2)" strokeDasharray="4 4" />

                  {/* Point A Circle Marker */}
                  <circle cx="250" cy="160" r="7" fill="#10b981" />
                  <text x="262" y="164" fill="#10b981" fontSize="11" fontWeight="bold" fontFamily="monospace">PONTO A [GRAVADO]</text>

                  {/* Point B Circle Marker */}
                  {pointB ? (
                    <>
                      <circle cx="250" cy="40" r="7" fill="#10b981" />
                      <text x="262" y="44" fill="#10b981" fontSize="11" fontWeight="bold" fontFamily="monospace">PONTO B [GRAVADO]</text>
                    </>
                  ) : (
                    <text x="262" y="44" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="monospace">PONTO B (Pressione Gravar Ponto B)</text>
                  )}

                  {/* Tractor Position Box */}
                  <rect x="240" y="90" width="20" height="30" fill="#059669" rx="3" stroke="#34d399" strokeWidth="2" />
                  {/* Implement Bar */}
                  <line x1={250 - implementWidth * 2.5} y1="120" x2={250 + implementWidth * 2.5} y2="120" stroke="#f59e0b" strokeWidth="3" />
                </svg>
              </div>

              {/* Display Nav Tabs on Top Left */}
              <div className="relative z-10 flex gap-2">
                {(['MAP', 'PILOT', 'IMPLEMENT', 'DIAGNOSTICS'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-tech font-bold cursor-pointer transition-all ${
                      activeTab === tab
                        ? 'bg-emerald-500 text-black shadow-md'
                        : 'bg-black/80 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {tab === 'MAP' && 'Orientação A/B'}
                    {tab === 'PILOT' && 'Ajuste Piloto'}
                    {tab === 'IMPLEMENT' && 'Implemento'}
                    {tab === 'DIAGNOSTICS' && 'Sinal GPS'}
                  </button>
                ))}
              </div>

              {/* Bottom Display Context Info */}
              <div className="relative z-10 bg-black/80 p-2.5 rounded-lg border border-emerald-500/30 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-center">
                <div>
                  <div className="text-slate-400">TIPO DE LINHA:</div>
                  <div className="text-emerald-400 font-bold">{guidanceType.replace('_', ' ')}</div>
                </div>
                <div>
                  <div className="text-slate-400">LARGURA IMPLEMENTO:</div>
                  <div className="text-white font-bold">{implementWidth}.0 metros</div>
                </div>
                <div>
                  <div className="text-slate-400">GANHO DE DIREÇÃO:</div>
                  <div className="text-emerald-300 font-bold">{steeringGain}%</div>
                </div>
                <div>
                  <div className="text-slate-400">SOBREPOSIÇÃO:</div>
                  <div className="text-amber-400 font-bold">{overlapPct}%</div>
                </div>
              </div>

            </div>

            {/* Interactive Control Console Below Screen */}
            <div className="p-4 rounded-xl bg-slate-950 border border-emerald-900 space-y-4">
              <div className="flex items-center justify-between font-mono text-xs text-emerald-400 border-b border-slate-800 pb-2">
                <span className="font-bold flex items-center gap-1">
                  <Sliders className="w-4 h-4 text-emerald-400" /> CONSOLE DE CONFIGURAÇÃO PRÁTICA
                </span>
                <span className="text-slate-400">Clique nos botões para testar as reações do monitor</span>
              </div>

              {/* Tab 1: Map / AB Line controls */}
              {activeTab === 'MAP' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <button
                    onClick={handleRecordPointA}
                    className="p-3 rounded-xl bg-emerald-950 border border-emerald-700 text-emerald-300 font-tech font-bold hover:border-emerald-400 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    PONTO A (GRAVADO)
                  </button>

                  <button
                    onClick={handleRecordPointB}
                    className={`p-3 rounded-xl font-tech font-bold cursor-pointer transition-all flex items-center justify-center gap-2 ${
                      !pointB
                        ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-lg animate-pulse'
                        : 'bg-emerald-950 border border-emerald-700 text-emerald-300'
                    }`}
                  >
                    <Play className="w-4 h-4" />
                    {pointB ? 'PONTO B (GRAVADO)' : 'GRAVAR PONTO B AGORA'}
                  </button>

                  <button
                    onClick={handleReset}
                    className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-tech font-bold cursor-pointer flex items-center justify-center gap-2"
                  >
                    <RefreshCw className="w-4 h-4 text-slate-400" />
                    REINICIAR LINHA
                  </button>
                </div>
              )}

              {/* Tab 2: Pilot adjustment controls */}
              {activeTab === 'PILOT' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span>Sensibilidade / Ganho de Esterçamento:</span>
                      <strong className="text-emerald-400">{steeringGain}%</strong>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="150"
                      value={steeringGain}
                      onChange={(e) => setSteeringGain(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span>Velocidade de Trabalho Simulado:</span>
                      <strong className="text-emerald-400">{simulatedSpeed.toFixed(1)} km/h</strong>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="18"
                      step="0.5"
                      value={simulatedSpeed}
                      onChange={(e) => setSimulatedSpeed(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* Tab 3: Implement settings controls */}
              {activeTab === 'IMPLEMENT' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span>Largura de Trabalho do Implemento:</span>
                      <strong className="text-emerald-400">{implementWidth}.0 metros</strong>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="40"
                      step="1"
                      value={implementWidth}
                      onChange={(e) => setImplementWidth(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span>Margem de Sobreposição / Desconto:</span>
                      <strong className="text-amber-400">{overlapPct}%</strong>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={overlapPct}
                      onChange={(e) => setOverlapPct(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* Tab 4: Signal Diagnostics */}
              {activeTab === 'DIAGNOSTICS' && (
                <div className="grid grid-cols-3 gap-3 text-xs font-mono">
                  {(['RTK_FIX', 'SF3', 'EGNOS'] as const).map(s => (
                    <button
                      key={s}
                      onClick={() => setSignal(s)}
                      className={`p-3 rounded-xl font-tech font-bold cursor-pointer transition-all ${
                        signal === s
                          ? 'bg-emerald-500 text-black shadow-md'
                          : 'bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      {s === 'RTK_FIX' ? 'RTK (2.5 cm)' : s === 'SF3' ? 'SF3 / RTX (5 cm)' : 'EGNOS / Livre (15 cm)'}
                    </button>
                  ))}
                </div>
              )}

            </div>

          </div>

          {/* Bottom callout to enroll */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950 via-[#0a1810] to-emerald-950 border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-tech text-sm font-bold text-white">Gostou da prática no simulador?</div>
              <p className="text-xs text-slate-300">
                O curso completo ensina todas as telas, calibrações de antena, erros de diagnóstico e offsets dos principais monitores agrícolas.
              </p>
            </div>
            <button
              onClick={onEnrollClick}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 text-slate-950 font-tech font-bold text-sm uppercase tracking-wide cursor-pointer hover:from-emerald-400 hover:to-emerald-300 shadow-lg shrink-0"
            >
              MATRICULAR POR APENAS R$ 97
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
