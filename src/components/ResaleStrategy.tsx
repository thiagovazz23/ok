import React from 'react';
import { Store, Coffee, GraduationCap, Utensils, ShoppingCart, Dumbbell, Check, ArrowRight, Shield } from 'lucide-react';

interface ResaleStrategyProps {
  onOpenCheckout: () => void;
}

export const ResaleStrategy: React.FC<ResaleStrategyProps> = ({ onOpenCheckout }) => {
  const points = [
    {
      icon: Coffee,
      name: 'Cafeterias & Bistrôs',
      desc: 'O acompanhamento perfeito para o café espresso. Clientes compram sem pensar duas vezes no balcão de pagamento.',
    },
    {
      icon: Utensils,
      name: 'Restaurantes & Hamburguerias',
      desc: 'Substitui a necessidade do restaurante ter sobremesa própria. Você fornece e divide uma margem excelente.',
    },
    {
      icon: Store,
      name: 'Lojas de Conveniência & Postos',
      desc: 'Fluxo contínuo 24 horas por dia. O brownie Le Bron na embalagem com cinta chama a atenção imediata.',
    },
    {
      icon: GraduationCap,
      name: 'Cantinas de Faculdade & Escolas',
      desc: 'Público jovem ávido por doces entre os intervalos de aulas. Centenas de brownies vendidos em minutos.',
    },
    {
      icon: ShoppingCart,
      name: 'Padarias & Mercados de Bairro',
      desc: 'Os donos adoram colocar no caixa porque o produto não estraga rápido e tem giro diário constante.',
    },
    {
      icon: Dumbbell,
      name: 'Academias & Lojas de Suplementos',
      desc: 'Com a nossa receita exclusiva Saudável/Funcional (sem glúten e sem lactose), você atende o mercado fitness.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#120719] relative overflow-hidden border-t border-[#260f33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#f35588]">
              <Store className="w-4 h-4" />
              <span>A Mina de Ouro da Revenda</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-display">
              Brownie: o melhor produto para vender o ano inteiro!
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Não derrete, é fácil de transportar, tem ampla validade e <strong>não precisa de refrigeração</strong>.
              Você não precisa passar o dia inteiro na rua vendendo: aprenda a posicionar seus brownies nos pontos mais movimentados da sua cidade com <strong>demanda fixa, previsível e ZERO desperdício</strong>!
            </p>

            {/* Checklist of Advantages */}
            <div className="space-y-3 pt-2">
              {[
                'Você produz em 1 único dia e abastece os pontos semanalmente',
                'Scripts prontos de abordagem e negociação que quebram qualquer objeção',
                'Folder de apresentação comercial pronto no Canva para imprimir ou mandar no WhatsApp',
                'Modelo de consignação segura sem risco de calote ou perda de produto',
                'Como gerar código de barras oficial para fornecer a grandes estabelecimentos'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenCheckout}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#e2498a] to-[#d13374] hover:brightness-110 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-lg shadow-[#e2498a]/20 flex items-center gap-2"
              >
                <span>Aprender o Método de Pontos de Venda</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Showcase Column with Packaging Image & Point Grid */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-[#3f1a54] shadow-2xl relative group">
              <div className="aspect-[4/3] w-full bg-[#1b0a26]">
                <img
                  src="/images/packaging_and_boxes_1790449628210.jpg"
                  alt="Embalagens e caixas profissionais Le Bron prontas para revenda"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-[#180922] border-t border-[#341644]">
                <p className="text-xs text-neutral-300 font-medium">
                  Pack de Embalagens e Cintas editáveis no Canva 2026: transforme qualquer brownie caseiro em um produto de grife profissional com custo de centavos.
                </p>
              </div>
            </div>

            {/* Grid of Potential Partners */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {points.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#180a22] border border-[#311442] hover:border-[#f35588]/40 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-[#f35588] mb-2" />
                    <div className="text-xs font-bold text-white leading-snug">{p.name}</div>
                    <div className="text-[11px] text-neutral-400 mt-1 line-clamp-2 leading-tight">
                      {p.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
