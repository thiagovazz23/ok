import React from 'react';
import { Gift, Sparkles, Check, Download, FileSpreadsheet, Palette, MessageSquare, ArrowRight } from 'lucide-react';

interface BonusesSectionProps {
  onOpenCheckout: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onOpenCheckout }) => {
  const bonuses = [
    {
      title: 'Pack de Embalagens e Cintas Editáveis no Canva 2026',
      desc: 'Mais de 30 modelos de cintas, tags e caixas com design profissional pronto. Basta colocar o seu nome no Canva grátis e mandar imprimir.',
      value: 'R$ 147,00',
      tag: 'Bônus Gratuito',
    },
    {
      title: 'Planilha Automática de Precificação & Fluxo de Caixa',
      desc: 'Coloque o preço dos ingredientes e a planilha calcula na hora o custo por fatia, margem de lucro e preço de venda sugerido.',
      value: 'R$ 97,00',
      tag: 'Bônus Gratuito',
    },
    {
      title: 'Curso Completo de Barras Recheadas Grandes e Médias',
      desc: 'O produto com maior margem da confeitaria: 13 recheios trufados, montagem perfeita e cardápio "Monte a Sua Barra".',
      value: 'R$ 197,00',
      tag: 'Bônus Gratuito',
    },
    {
      title: 'Kit Tabela Nutricional Automatizada (Nova Lei ANVISA)',
      desc: 'Esteja 100% regularizado para vender em qualquer mercado e empório sem precisar gastar fortunas com nutricionista.',
      value: 'R$ 87,00',
      tag: 'Bônus Gratuito',
    },
    {
      title: 'E-book: Como Tirar Fotos Profissionais com o Celular',
      desc: 'Iluminação caseira, ângulos que despertam desejo imediato e truques para deixar os brownies irresistíveis no feed e no iFood.',
      value: 'R$ 67,00',
      tag: 'Bônus Gratuito',
    },
    {
      title: 'Assistência Individual no WhatsApp com Ajuste de Fornada',
      desc: 'Mande a foto da sua fornada para a equipe Le Bron avaliar a textura, cor e casquinha até você acertar o ponto perfeito.',
      value: 'R$ 250,00',
      tag: 'Exclusivo Hoje',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#120719] relative overflow-hidden border-t border-[#260f33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#f35588]">
            <Gift className="w-4 h-4" />
            <span>Pacote Completo de Ferramentas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
            Mais de R$ 800 em bônus inclusos sem custo extra
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Ao se inscrever hoje na condição promocional, você leva todos os materiais de apoio, planilhas e packs de design <strong>100% de graça</strong>.
          </p>
        </div>

        {/* Bonus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#190a23] border border-[#3b194e] hover:border-[#f35588]/50 transition-all flex flex-col justify-between space-y-4 group shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#f35588] bg-[#f35588]/15 px-2.5 py-0.5 rounded">
                    {bonus.tag}
                  </span>
                  <span className="text-xs text-neutral-400 line-through font-mono">
                    {bonus.value}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#ff8da1] transition-colors font-display">
                  {bonus.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {bonus.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#2e133c] flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Incluso no curso
                </span>
                <span className="text-neutral-400 font-mono">R$ 0,00</span>
              </div>
            </div>
          ))}
        </div>

        {/* Big Total Value Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-gradient-to-r from-[#210c2e] via-[#2d113f] to-[#210c2e] border border-[#521f6d] max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-[#ff8da1] font-bold">
            Valor Total de Tudo Somado: Mais de R$ 1.100,00
          </p>
          <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-display">
            Apenas Hoje por <span className="text-[#f35588]">7x de R$ 16,79</span> ou R$ 99,00 à vista!
          </div>
          <div className="mt-4">
            <button
              onClick={onOpenCheckout}
              className="px-8 py-3.5 rounded-xl bg-[#e2498a] hover:bg-[#f35588] text-white font-bold text-sm cursor-pointer shadow-lg shadow-[#e2498a]/25 inline-flex items-center gap-2"
            >
              <span>Quero Garantir Todos os Bônus Agora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
