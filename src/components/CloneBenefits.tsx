import React from 'react';

export const CloneBenefits: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 bg-white px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F0F0F] font-sora">
          Brownie: o melhor produto para vender o ano inteiro!
        </h2>

        <div className="space-y-4 text-xs sm:text-base text-[#333] leading-relaxed max-w-3xl mx-auto">
          <p className="font-semibold text-[#111]">
            Não derrete, é fácil de transportar, tem ampla validade e não precisa de refrigeração. Venda em qualquer lugar, o ano todo e deixe nos pontos mais movimentados da cidade!
          </p>
          <p>
            Restaurantes, cafeterias, sorveterias, lojas de conveniência, iFood, cantinas de faculdade, padarias, mercados – com demanda fixa e previsível, aqui ensinamos tudo sobre como fazer a sua revenda ser um sucesso absoluto com <strong>ZERO desperdício!</strong>
          </p>
          <p className="text-neutral-700">
            Surpreenda seus clientes com nossas receitas irresistíveis que vendem como água e tem altíssimas margens de lucro – inclusive com receita saudável!
          </p>
        </div>
      </div>
    </section>
  );
};
