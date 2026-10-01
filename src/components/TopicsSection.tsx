import React from 'react';
import { WHAT_YOU_WILL_LEARN_TOPICS } from '../data/courseData';
import { Compass, Cpu, Radio, Settings, Map, Tractor, CheckCircle2, ArrowRight } from 'lucide-react';

interface TopicsSectionProps {
  onOpenCheckout: () => void;
}

const getTopicIcon = (iconName: string) => {
  switch (iconName) {
    case 'Compass':
      return <Compass className="w-5 h-5 text-emerald-700" />;
    case 'Cpu':
      return <Cpu className="w-5 h-5 text-emerald-700" />;
    case 'Radio':
      return <Radio className="w-5 h-5 text-emerald-700" />;
    case 'Settings':
      return <Settings className="w-5 h-5 text-emerald-700" />;
    case 'Map':
      return <Map className="w-5 h-5 text-emerald-700" />;
    case 'Tractor':
      return <Tractor className="w-5 h-5 text-emerald-700" />;
    default:
      return <Compass className="w-5 h-5 text-emerald-700" />;
  }
};

export const TopicsSection: React.FC<TopicsSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="aprender" className="py-16 sm:py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Copy */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold uppercase tracking-widest">
            Treinamento 100% Online
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            O que você vai aprender na prática
          </h2>
        </div>

        {/* 6 Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHAT_YOU_WILL_LEARN_TOPICS.map((topic, index) => (
            <div
              key={topic.id}
              className="group relative bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Topic Image with Overlay */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-emerald-500/40 px-3 py-1 rounded-full text-[11px] font-tech font-bold text-emerald-800 shadow-xs">
                    {topic.badgeText}
                  </div>

                  {/* Topic Number Badge */}
                  <div className="absolute top-3 right-3 font-tech text-xs font-bold text-white bg-slate-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded border border-slate-700">
                    MÓDULO 0{index + 1}
                  </div>

                  {/* Bottom Image Title Overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs font-tech font-extrabold text-emerald-300 uppercase tracking-wide drop-shadow-md">
                      Módulo {index + 1}: {topic.title}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      {getTopicIcon(topic.iconName)}
                    </div>
                    <h3 className="font-tech text-lg sm:text-xl font-bold text-slate-900 tracking-wide group-hover:text-emerald-700 transition-colors">
                      {topic.title}
                    </h3>
                  </div>

                  {/* Main Paragraph Description */}
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    {topic.description}
                  </p>

                  {/* Features list */}
                  <ul className="pt-2 space-y-2 border-t border-slate-100 text-xs text-slate-700 font-medium">
                    {topic.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer highlight */}
              <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-right">
                <span className="text-[11px] font-tech text-emerald-700 font-bold uppercase tracking-wider flex items-center justify-end gap-1 group-hover:translate-x-1 transition-transform">
                  Conteúdo Prático de Campo →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenCheckout}
            className="px-8 py-4.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-lg shadow-xl shadow-emerald-600/20 hover:shadow-emerald-500/35 transition-all transform hover:-translate-y-0.5 cursor-pointer font-tech inline-flex items-center gap-3 uppercase tracking-wide"
          >
            <span>QUERO APRENDER NA PRÁTICA</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
          <p className="mt-2.5 text-xs text-slate-500 font-mono font-medium">
            Acesso imediato às vídeo aulas de agricultura de precisão
          </p>
        </div>

      </div>
    </section>
  );
};

