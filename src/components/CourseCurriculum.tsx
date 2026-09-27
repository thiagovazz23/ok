import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, PlayCircle, Award, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import { COURSE_MODULES } from '../data/courseData';

interface CourseCurriculumProps {
  onOpenCheckout: () => void;
}

export const CourseCurriculum: React.FC<CourseCurriculumProps> = ({ onOpenCheckout }) => {
  const [openModule, setOpenModule] = useState<number | null>(1); // first module opened by default

  const toggleModule = (id: number) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <section id="modulos" className="py-20 md:py-28 bg-[#0e0712] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#f35588]">
            <BookOpen className="w-4 h-4" />
            <span>Conteúdo Programático Completo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
            O que você irá aprender na Le Bron Brownie
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            100% atualizado para 2026. Aulas práticas e diretas ao ponto, planilhas automáticas que fazem as contas para você e suporte de perto.
          </p>
        </div>

        {/* Modules Accordion List */}
        <div className="space-y-4">
          {COURSE_MODULES.map((module) => {
            const isOpen = openModule === module.id;
            return (
              <div
                key={module.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#180a22] border-[#f35588]/50 shadow-lg shadow-[#f35588]/10'
                    : 'bg-[#14081c] border-[#2f133f] hover:border-[#451e5a]'
                }`}
              >
                {/* Module Header Bar */}
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      {module.badge && (
                        <span className="text-[11px] font-bold text-[#f35588] tracking-wider uppercase bg-[#f35588]/15 px-2.5 py-0.5 rounded">
                          {module.badge}
                        </span>
                      )}
                      <span className="text-xs text-neutral-400 font-mono">
                        {module.lessons.length} aulas práticas
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">
                      {module.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400">
                      {module.subtitle}
                    </p>
                  </div>

                  <div className="p-2 rounded-lg bg-[#250f35] text-neutral-300 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#f35588]" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Lessons List */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#291138] space-y-3 animate-fadeIn">
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 pb-1">
                      Aulas Inclusas Neste Módulo:
                    </div>
                    <div className="grid grid-cols-1 gap-2.5">
                      {module.lessons.map((lesson, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-[#1d0b2a] border border-[#331444] flex items-center gap-3 text-xs sm:text-sm text-neutral-200"
                        >
                          <PlayCircle className="w-4 h-4 text-[#f35588] shrink-0" />
                          <span className="leading-snug">{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Certificate & Guarantee Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#200c2e] to-[#160821] border border-[#481e60] flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#f35588]/20 border border-[#f35588]/40 flex items-center justify-center text-[#f35588] shrink-0">
            <Award className="w-8 h-8" />
          </div>
          <div className="space-y-1 text-center sm:text-left flex-1">
            <h4 className="text-lg font-bold text-white font-display">
              Certificado Oficial de Conclusão Incluso
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Ao finalizar as aulas, você recebe o seu Certificado de Especialista em Produção e Venda de Brownies Le Bron com seu nome completo, pronto para imprimir e emoldurar no seu ateliê.
            </p>
          </div>
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#e2498a] hover:bg-[#f35588] text-white font-bold text-xs sm:text-sm whitespace-nowrap cursor-pointer shadow-lg shadow-[#e2498a]/20"
          >
            Quero Me Inscrever Hoje
          </button>
        </div>
      </div>
    </section>
  );
};
