import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, Heart } from 'lucide-react';
import { RECIPES_DATA } from '../data/courseData';
import { RecipeItem } from '../types';

interface RecipesShowcaseProps {
  onOpenCheckout: () => void;
}

export const RecipesShowcase: React.FC<RecipesShowcaseProps> = ({ onOpenCheckout }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeItem | null>(null);

  const filteredRecipes =
    activeCategory === 'todos'
      ? RECIPES_DATA
      : RECIPES_DATA.filter((r) => r.category === activeCategory);

  return (
    <section id="receitas" className="py-20 md:py-28 bg-[#0e0712] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#f35588]">
            <Sparkles className="w-4 h-4" />
            <span>Cardápio Cientificamente Lucrativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Receitas fáceis, deliciosas e ultra lucrativas
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Descubra os sabores mais virais do Brasil testados e aprovados para vender como água.
            Massa equilibrada, zero gosto residual, casquinha brilhante e até <strong>500% de margem</strong>.
          </p>

          {/* Interactive Category Filter Tabs (Zero-Pill compliant segmented controls) */}
          <div className="pt-4 flex items-center justify-center gap-1.5 flex-wrap">
            {[
              { id: 'todos', label: 'Todos os Sabores' },
              { id: 'classicos', label: 'Clássicos da Le Bron' },
              { id: 'recheados', label: 'Trufados & Recheados' },
              { id: 'especiais', label: 'Especiais & Brookie' },
              { id: 'funcionais', label: 'Sem Glúten & Fitness' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#e2498a] text-white shadow-md shadow-[#e2498a]/20'
                    : 'bg-[#190a23] text-neutral-400 hover:text-white hover:bg-[#251034] border border-[#341644]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-[#15081e] rounded-2xl border border-[#341644] overflow-hidden flex flex-col justify-between hover:border-[#f35588]/50 transition-all duration-300 group shadow-lg shadow-black/40"
            >
              {/* Image Container with aspect 4:3 */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#200d2d]">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to hero brownie image
                    (e.currentTarget as HTMLImageElement).src = '/images/hero_lebron_brownie_1790449586483.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15081e] via-transparent to-black/20" />

                {/* Subtle Text Tag (unboxed metadata) */}
                <div className="absolute top-3 left-3 bg-[#0f0714]/85 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-[#ff8da1] border border-white/10">
                  {recipe.tag}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#ff8da1] transition-colors font-display">
                    {recipe.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-2 line-clamp-3 leading-relaxed">
                    {recipe.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-2 border-t border-[#2d123a]">
                  {recipe.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-[#f35588] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Profit Bar */}
                <div className="pt-4 border-t border-[#2d123a] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-neutral-500 block uppercase">Custo / Venda</span>
                    <div className="text-xs font-semibold text-neutral-300 font-mono tabular-nums">
                      {recipe.costEstimate} <span className="text-neutral-600">→</span> {recipe.suggestedPrice}
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-emerald-400 block uppercase font-bold">Margem</span>
                    <span className="text-base font-extrabold text-emerald-400 font-mono tabular-nums">
                      +{recipe.profitMargin}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedRecipe(recipe)}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#200d2d] hover:bg-[#2e1440] border border-[#3f1954] text-xs font-bold text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Ver Detalhes da Receita</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#f35588]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner call */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1c0a27] via-[#2a0e3b] to-[#1c0a27] border border-[#481e60] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              E tem mais: você aprenderá a técnica dos Copos da Felicidade
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl">
              Nenhuma sobra de brownie vai para o lixo. Ensinamos a transformar todas as bordinhas em sobremesas de alto valor que você vende a R$ 18,00 no iFood com custo quase zero!
            </p>
          </div>
          <button
            onClick={onOpenCheckout}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-[#e2498a] hover:bg-[#f35588] text-white font-bold text-xs sm:text-sm whitespace-nowrap cursor-pointer shadow-lg shadow-[#e2498a]/20"
          >
            Quero Todas as Receitas por R$ 99
          </button>
        </div>
      </div>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-[#170921] border border-[#4a1e64] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-[#f35588] uppercase tracking-wider">
                  {selectedRecipe.tag}
                </span>
                <h3 className="text-2xl font-bold text-white font-display mt-0.5">
                  {selectedRecipe.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedRecipe(null)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              {selectedRecipe.description}
            </p>

            <div className="p-4 rounded-xl bg-[#230d32] border border-[#3d1852] space-y-2">
              <div className="text-xs font-bold text-white uppercase">Diferenciais e Destaques:</div>
              <ul className="text-xs text-neutral-300 space-y-1.5">
                {selectedRecipe.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#311442]">
              <div>
                <span className="text-[11px] text-neutral-400 block">Lucro Médio por Fornada</span>
                <span className="text-sm font-bold text-emerald-400 font-mono tabular-nums">
                  R$ 90,00 a R$ 150,00 líquido
                </span>
              </div>
              <button
                onClick={() => {
                  setSelectedRecipe(null);
                  onOpenCheckout();
                }}
                className="px-5 py-2.5 rounded-lg bg-[#e2498a] hover:bg-[#f35588] text-white text-xs font-bold cursor-pointer"
              >
                Aprender no Curso Completo
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
