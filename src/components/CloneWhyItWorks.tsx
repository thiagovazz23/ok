import React from 'react';
import { Package, Utensils, ShieldCheck, TrendingUp, BookOpen, MessageCircle, AlertCircle } from 'lucide-react';

export const CloneWhyItWorks: React.FC = () => {
  const cards = [
    {
      icon: Package,
      title: 'Fácil de produzir em quantidade e ampla validade',
      desc: 'Com o forno que você já possui em casa, você consegue fazer uma super produção e tudo o que se produz, vende – com sua ampla validade de 15 dias (sem conservante!) e possibilidade de congelar até 3 meses!'
    },
    {
      icon: Utensils,
      title: 'Não exige ferramentas ou utensílios especiais',
      desc: 'Você não precisa de ferramentas ou utensílios caros ou industriais – com uma vasilha comum, colher ou espátula e o fogão da sua própria casa você já faz a produção acontecer!'
    },
    {
      icon: ShieldCheck,
      title: 'Garantia de 30 dias!',
      desc: 'Você tem um mês inteiro de garantia super estendida para testar as receitas, aplicar o método e comprovar o resultado com total tranquilidade.'
    },
    {
      icon: TrendingUp,
      title: 'Retorno rápido (e muito!)',
      desc: 'Com apenas 1 única fornada de brownie tradicional vendida, você já recupera 100% do valor do curso e já começa a lucrar limpo.'
    },
    {
      icon: BookOpen,
      title: 'Conteúdos fáceis de entender, abordando todos os pontos do negócio',
      desc: 'Linguagem simples, sem enrolação teórica. Direto ao ponto: produção, precificação automática, fotos com celular, embalagens e técnicas de revenda.'
    },
    {
      icon: MessageCircle,
      title: 'Assistência Individual no WhatsApp como você nunca viu',
      desc: 'Tire dúvidas reais diretamente com a nossa equipe de segunda a sexta, envie fotos do seu brownie para ajuste fino de temperatura e ponto de fornada.'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FBFBFB] px-4 sm:px-6 border-t border-[#F0F0F0]">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-[#0F0F0F] font-sora leading-tight max-w-3xl mx-auto">
            VOCÊ VAI ESPERAR MAIS QUANTOS MESES COM OS MESMOS PROBLEMAS ATÉ TOMAR UMA ATITUDE PARA MUDAR A SUA VIDA PARA SEMPRE?
          </h2>
          <p className="text-sm sm:text-base text-[#FE7A80] font-extrabold font-sora max-w-2xl mx-auto">
            Liberdade, sonhos realizados, reconhecimento e dinheiro sobrando no fim do mês. É isso que proporcionamos!
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-[#EAEAEA] shadow-sm hover:border-[#FFA3A4] transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFECEC] text-[#FE7A80] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#111] font-sora leading-snug">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Section 9 Objection Box: POR QUE NÃO DÁ CERTO? */}
        <div className="bg-[#FFF4F4] border-2 border-[#FFA3A4] rounded-2xl p-6 sm:p-8 space-y-3 text-center">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#D93842] uppercase tracking-wider font-sora">
            <AlertCircle className="w-4 h-4" />
            <span>POR QUE NÃO DÁ CERTO?</span>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-[#333] leading-relaxed max-w-2xl mx-auto">
            Se você <strong>ERRA</strong> na escolha do cardápio com itens que são &ldquo;bonitos&rdquo; mas que não te trazem lucro o suficiente e só te empacam no negócio, com vendas estagnadas... o brownie artesanal do nosso método é o produto perfeito: simples, rápido, desejado e com a maior margem de lucro da confeitaria brasileira!
          </p>
        </div>
      </div>
    </section>
  );
};
