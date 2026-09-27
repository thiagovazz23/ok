import React from 'react';
import { MessageCircle, Star, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/courseData';

interface TestimonialsProps {
  onOpenCheckout: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenCheckout }) => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#0e0712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#f35588]">
            <MessageCircle className="w-4 h-4" />
            <span>Resultados e Transformações Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
            Mais de 10.000 alunas e alunos transformados
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Veja o que diz quem aplicou o método Le Bron para sair do zero e construir uma renda sólida com brownies em todo o Brasil.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-[#160820] border border-[#341644] hover:border-[#f35588]/50 transition-all flex flex-col justify-between space-y-4 shadow-xl shadow-black/50"
            >
              <div className="space-y-3">
                {/* Rating & Revenue Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded font-mono">
                    {t.monthlyRevenue}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-3 border-t border-[#2a1137] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f35588] to-[#6a3bc7] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md">
                  {t.avatarText}
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">{t.name}</div>
                  <div className="text-[11px] text-neutral-400 leading-tight">{t.city}</div>
                  <div className="text-[10px] text-[#f35588] font-semibold mt-0.5">{t.result}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Print Simulation Box */}
        <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#140b1c] border border-[#3f1954] shadow-2xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#2d123b]">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Mensagens Diretas no WhatsApp de Suporte da Le Bron
              </h4>
              <p className="text-xs text-neutral-400">
                Acompanhamento individual real: ajudamos a ajustar seu forno e celebrar cada conquista!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#1c0f26] border border-[#341644] space-y-2">
              <span className="text-[11px] text-emerald-400 font-bold">Mariana - Aluna Turma 2026:</span>
              <p className="text-neutral-300 leading-snug">
                &ldquo;Jéssica do céu! Fiz a receita de Red Velvet hoje e já vendi 14 fatias no condomínio em menos de 1 hora! O pessoal disse que nunca comeu nada igual!&rdquo;
              </p>
              <span className="text-[10px] text-neutral-500 block text-right">14:22 · WhatsApp</span>
            </div>

            <div className="p-4 rounded-xl bg-[#1c0f26] border border-[#341644] space-y-2">
              <span className="text-[11px] text-emerald-400 font-bold">Rodrigo - Cafeteria Parceira:</span>
              <p className="text-neutral-300 leading-snug">
                &ldquo;Fechei hoje com uma padaria grande aqui do bairro! Deixei 30 brownies na quarta e na quinta o dono já me mandou mensagem pedindo mais 50 unidades!&rdquo;
              </p>
              <span className="text-[10px] text-neutral-500 block text-right">16:45 · WhatsApp</span>
            </div>

            <div className="p-4 rounded-xl bg-[#1c0f26] border border-[#341644] space-y-2">
              <span className="text-[11px] text-emerald-400 font-bold">Ana Paula - De dona de casa a confeiteira:</span>
              <p className="text-neutral-300 leading-snug">
                &ldquo;Depois do ajuste que você me deu no ponto do forno a casquinha craquelou PERFEITA! Parece espelho de tão linda! Muito obrigada pela paciência.&rdquo;
              </p>
              <span className="text-[10px] text-neutral-500 block text-right">19:10 · WhatsApp</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#e2498a] hover:bg-[#f35588] text-white font-bold text-xs sm:text-sm cursor-pointer shadow-lg shadow-[#e2498a]/20 inline-flex items-center justify-center gap-2"
            >
              <span>Quero Ter Esses Resultados Também</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
