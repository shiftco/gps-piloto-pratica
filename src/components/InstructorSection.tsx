import React from 'react';
import { INSTRUCTOR_DATA } from '../data/courseData';
import { Award } from 'lucide-react';

export const InstructorSection: React.FC = () => {
  return (
    <section id="professor" className="py-16 sm:py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-tech font-bold uppercase tracking-widest">
            Instrutor Principal
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Aprenda com quem vive máquinas agrícolas
          </h2>
        </div>

        {/* Instructor Card Container */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-md overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-xl group">
                <img
                  src={INSTRUCTOR_DATA.imageUrl}
                  alt={INSTRUCTOR_DATA.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                {/* Floating Seal */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-emerald-500/40 p-3 rounded-xl flex items-center justify-between text-xs font-tech text-white">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Award className="w-5 h-5" />
                    <span className="font-bold">Fundador da Inprotec</span>
                  </div>
                  <span className="text-slate-300 font-mono">+17 MIL ALUNOS</span>
                </div>
              </div>
            </div>

            {/* Right Bio Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  {INSTRUCTOR_DATA.name}
                </h3>
                <p className="text-emerald-700 font-tech font-bold text-sm sm:text-base mt-1">
                  {INSTRUCTOR_DATA.title}
                </p>
              </div>

              {/* Bio paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                {INSTRUCTOR_DATA.bio.map((paragraph, idx) => (
                  <p key={idx} className={idx === 2 ? "p-4 rounded-xl bg-emerald-50 border-l-4 border-emerald-600 text-slate-900 font-medium" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Instructor Stats */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-4">
                {INSTRUCTOR_DATA.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="font-tech text-xl sm:text-2xl font-extrabold text-emerald-700">{stat.value}</div>
                    <div className="text-xs text-slate-600 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

