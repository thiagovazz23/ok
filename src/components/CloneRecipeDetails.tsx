import React from 'react';

export const CloneRecipeDetails: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white px-4 sm:px-6 border-t border-[#F0F0F0]">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-[#0F0F0F] font-sora leading-tight max-w-3xl mx-auto">
          RECEITA EQUILIBRADA, ZERO GOSTO RESIDUAL, E O MELHOR: AINDA MAIS PRÁTICA E ECONÔMICA! 15 DIAS DE VALIDADE E ATÉ 90 DIAS CONGELADA!
        </h2>

        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-[#EAEAEA]">
          <img
            src="/images/img_2011.jpg"
            alt="Massa de brownie perfeita com casquinha craquelada"
            className="w-full h-auto object-cover max-h-[360px]"
          />
        </div>

        <div className="space-y-4 text-xs sm:text-base text-[#333] leading-relaxed max-w-3xl mx-auto">
          <p className="font-bold text-[#111]">
            Com custos baixíssimos a partir de R$1,20 de custo por unidade, é excelente tanto para a venda direta e revenda, com margens de lucro altíssimas e com venda todos os dias!
          </p>
          <p>
            Nossa receita vai apenas farinha de trigo, açúcar, chocolate em pó 50%, óleo e ovos – e <strong>SIM, você pode substituir por manteiga se quiser e preferir</strong>, apesar dela ser já perfeita do jeito que está!
          </p>
          <p className="text-neutral-700">
            Zero gosto residual, é super equilibrada, com a textura perfeita (úmida, macia) e com uma sensação leve no final (garanto que você ficará <strong>SURPRESO</strong> com o resultado irresistível da nossa massa!).
          </p>
        </div>
      </div>
    </section>
  );
};
