import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Sparkles, ArrowRight, Check } from 'lucide-react';

interface ProfitCalculatorProps {
  onOpenCheckout: () => void;
}

export const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({ onOpenCheckout }) => {
  const [dailySales, setDailySales] = useState<number>(30);
  const [sellingPrice, setSellingPrice] = useState<number>(8.0);
  const [unitCost, setUnitCost] = useState<number>(1.3);
  const [workingDays, setWorkingDays] = useState<number>(22);

  // Calculations
  const unitProfit = sellingPrice - unitCost;
  const monthlyUnits = dailySales * workingDays;
  const monthlyRevenue = monthlyUnits * sellingPrice;
  const monthlyCost = monthlyUnits * unitCost;
  const monthlyNetProfit = monthlyRevenue - monthlyCost;
  const yearlyNetProfit = monthlyNetProfit * 12;

  // Course price is R$ 99. How many brownies to pay it back?
  const browniesToPayCourse = Math.ceil(99 / unitProfit);

  return (
    <section id="simulador" className="py-20 bg-[#120719] relative overflow-hidden border-y border-[#260f33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#f35588]">
            <Calculator className="w-4 h-4" />
            <span>Simulador Interativo de Lucro Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Quanto você pode lucrar vendendo brownies todos os meses?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Arraste os seletores abaixo e veja como uma simples produção caseira pode gerar uma renda extra substancial ou o seu novo negócio principal.
          </p>
        </div>

        {/* Interactive Grid: Sliders on Left, Results on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#190a23] p-6 sm:p-8 rounded-2xl md:rounded-3xl border border-[#3b194e] shadow-xl space-y-7">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm sm:text-base font-semibold text-neutral-200">
                  Brownies vendidos por dia:
                </label>
                <span className="text-xl font-bold text-[#f35588] font-mono tabular-nums">
                  {dailySales} unidades/dia
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="120"
                step="5"
                value={dailySales}
                onChange={(e) => setDailySales(Number(e.target.value))}
                className="w-full h-2 bg-[#2d123b] rounded-lg appearance-none cursor-pointer accent-[#f35588]"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                <span>10 un (começando devagar)</span>
                <span>50 un (alguns pontos de venda)</span>
                <span>120 un (escala plena)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm sm:text-base font-semibold text-neutral-200">
                  Preço de venda por unidade:
                </label>
                <span className="text-xl font-bold text-emerald-400 font-mono tabular-nums">
                  R$ {sellingPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="14"
                step="0.5"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(Number(e.target.value))}
                className="w-full h-2 bg-[#2d123b] rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                <span>R$ 5,00 (simples)</span>
                <span>R$ 8,00 (média nacional)</span>
                <span>R$ 14,00 (recheados/copos)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm sm:text-base font-semibold text-neutral-200">
                  Custo médio estimado por unidade (receita + cinta):
                </label>
                <span className="text-xl font-bold text-neutral-300 font-mono tabular-nums">
                  R$ {unitCost.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <input
                type="range"
                min="1.0"
                max="3.0"
                step="0.1"
                value={unitCost}
                onChange={(e) => setUnitCost(Number(e.target.value))}
                className="w-full h-2 bg-[#2d123b] rounded-lg appearance-none cursor-pointer accent-purple-400"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                <span>R$ 1,00 (receita tradicional)</span>
                <span>R$ 1,50 (com nozes/Nutella)</span>
                <span>R$ 3,00 (barras/copos)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm sm:text-base font-semibold text-neutral-200">
                  Dias trabalhados por mês:
                </label>
                <span className="text-xl font-bold text-neutral-300 font-mono tabular-nums">
                  {workingDays} dias/mês
                </span>
              </div>
              <input
                type="range"
                min="12"
                max="26"
                step="1"
                value={workingDays}
                onChange={(e) => setWorkingDays(Number(e.target.value))}
                className="w-full h-2 bg-[#2d123b] rounded-lg appearance-none cursor-pointer accent-[#f35588]"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                <span>12 dias (apenas finais de semana)</span>
                <span>22 dias (segunda a sexta)</span>
                <span>26 dias (segunda a sábado)</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#240e32]/60 border border-[#451e5b] text-xs text-neutral-300 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#f35588] shrink-0 mt-0.5" />
              <div>
                <strong>Dica de ouro Le Bron:</strong> Brownies não precisam de refrigeração e duram até 15 dias. Você pode produzir em apenas 1 ou 2 dias da semana e realizar entregas pontuais nos seus pontos de venda!
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#210c2e] to-[#160720] p-6 sm:p-8 rounded-2xl md:rounded-3xl border border-[#481e60] shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-[#3b194e]">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  Projeção Financeira Mensal
                </span>
              </div>

              {/* Main Net Profit Highlight */}
              <div className="bg-[#12051a] p-5 rounded-2xl border border-emerald-500/30">
                <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                  Lucro Líquido no Seu Bolso
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1 font-mono tabular-nums">
                  R$ {monthlyNetProfit.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  <span className="text-xs font-normal text-neutral-400 ml-1">/mês</span>
                </div>
                <div className="text-xs text-neutral-400 mt-2 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Margem de lucro média de{' '}
                  <strong className="text-emerald-300">
                    {Math.round((unitProfit / unitCost) * 100)}%
                  </strong>
                </div>
              </div>

              {/* Breakdown metrics */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="bg-[#190a23] p-3.5 rounded-xl border border-[#341644]">
                  <span className="text-neutral-400 block mb-1">Faturamento Bruto</span>
                  <span className="text-base font-bold text-white font-mono tabular-nums">
                    R$ {monthlyRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="bg-[#190a23] p-3.5 rounded-xl border border-[#341644]">
                  <span className="text-neutral-400 block mb-1">Custo Insumos/Embalagem</span>
                  <span className="text-base font-bold text-neutral-300 font-mono tabular-nums">
                    R$ {monthlyCost.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              {/* Course Payback Reality Check */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#2e123d] to-[#3a154d] border border-[#f35588]/40">
                <div className="text-xs font-bold text-[#ff8da1] uppercase tracking-wide">
                  Retorno do Investimento (ROI)
                </div>
                <p className="text-xs sm:text-sm text-neutral-200 mt-1 leading-snug">
                  Com apenas <strong>{browniesToPayCourse} brownies vendidos</strong> (menos de 1 fornada inteira!), você já paga 100% do curso de R$ 99 e todo o resto é <strong>lucro limpo</strong>!
                </p>
              </div>
            </div>

            {/* Bottom conversion CTA */}
            <div className="pt-6 mt-6 border-t border-[#3b194e]">
              <button
                onClick={onOpenCheckout}
                className="w-full py-4 px-6 rounded-xl bg-[#e2498a] hover:bg-[#f35588] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#e2498a]/30 active:scale-98 transition-all"
              >
                <span>Começar Minha Produção Lucrativa</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
