import React from 'react';
import { Heart, Sparkles, Award, CheckCircle } from 'lucide-react';

export const FounderStory: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#120719] relative overflow-hidden border-t border-[#260f33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Founder Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-[#481e60] shadow-2xl relative group">
              <div className="aspect-[4/3] sm:aspect-square w-full bg-[#1e0a2b]">
                <img
                  src="/images/jessica_founder_lebron_1790449617668.jpg"
                  alt="Jéssica Marcon, fundadora da Le Bron Brownie"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-[#180922] border-t border-[#3b174e] text-center">
                <span className="text-white font-bold text-sm block">Jéssica Marcon de Oliveira</span>
                <span className="text-xs text-[#f35588]">Fundadora da Le Bron Brownie & Mentora Confeiteira</span>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-4 bg-[#230d32] border border-[#f35588]/40 p-4 rounded-2xl shadow-xl max-w-[220px]">
              <div className="flex items-center gap-2 text-[#f35588] text-xs font-bold uppercase">
                <Award className="w-4 h-4" /> Desde 2015
              </div>
              <p className="text-[11px] text-neutral-300 mt-1">
                De Florianópolis/SC para mais de 10.000 alunos em todo o território nacional.
              </p>
            </div>
          </div>

          {/* Text Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#f35588]">
              <Heart className="w-4 h-4" />
              <span>Nossa História & Propósito</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-display">
              Da cozinha da faculdade ao maior curso de brownies do Brasil
            </h2>

            <div className="space-y-4 text-xs sm:text-base text-neutral-300 leading-relaxed">
              <p>
                &ldquo;Desde que eu me recordo como pessoa, passei todos os Natais com uma receita de família maravilhosa de brownie – sabe aquela que todo mundo briga por querer a assadeira inteira? Além disso, desde jovem sempre tive um espírito empreendedor nato.
              </p>
              <p>
                Até que um dia, durante a faculdade de Administração na Unisul (Universidade do Sul de Santa Catarina), resolvi levar uma fornada que havia feito para os meus colegas provarem. Em um pote plástico comum mesmo, sem frescura. O resultado? <strong>Sucesso absoluto imediato!</strong>
              </p>
              <p>
                Perfeccionista e canceriana que sou, não me contentei: foram dezenas de testes, estudos profundos sobre a química do cacau e da emulsão das gorduras, até lapidar a fórmula definitiva da massa mais fudgy, equilibrada e com a <strong>casquinha craquelada crocante mais perfeita do país</strong>.
              </p>
              <p>
                Após anos dominando os pontos de venda e eventos de Florianópolis (SC), decidimos que a nossa verdadeira missão é <strong>ensinar pessoas comuns a conquistarem sua liberdade financeira</strong>, terem tempo de qualidade para suas famílias e o orgulho de terem um produto que arranca elogios de quem prova.&rdquo;
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#190924] border border-[#341644]">
                <div className="text-lg font-bold text-white font-mono">10.000+</div>
                <div className="text-[11px] text-neutral-400">Alunos formados</div>
              </div>
              <div className="p-3 rounded-xl bg-[#190924] border border-[#341644]">
                <div className="text-lg font-bold text-emerald-400 font-mono">R$ 1,20</div>
                <div className="text-[11px] text-neutral-400">Custo inicial por fatia</div>
              </div>
              <div className="p-3 rounded-xl bg-[#190924] border border-[#341644]">
                <div className="text-lg font-bold text-[#f35588] font-mono">15 Dias</div>
                <div className="text-[11px] text-neutral-400">Validade em temp. ambiente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
