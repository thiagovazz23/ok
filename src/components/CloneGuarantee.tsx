import React from 'react';

export const CloneGuarantee: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FBFBFB] px-4 sm:px-6 border-t border-[#F0F0F0]">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
        {/* Seal Image */}
        <div className="shrink-0 flex justify-center">
          <img
            src="/images/selo_garantia.png"
            alt="Selo Garantia 30 Dias Incondicional"
            className="w-36 sm:w-48 h-auto object-contain drop-shadow"
          />
        </div>

        {/* Text */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-3xl font-black text-[#0F0F0F] font-sora">
            VÁ EM FRENTE. O RISCO É TODO MEU!
          </h2>

          <h3 className="text-sm sm:text-base font-extrabold text-[#FE7A80] font-sora uppercase">
            GARANTIA TOTAL DE SATISFAÇÃO OU O SEU DINHEIRO DE VOLTA.
          </h3>

          <div className="space-y-2 text-xs sm:text-sm text-[#444] leading-relaxed">
            <p>
              Você tem 30 dias de garantia para consumir o conteúdo do curso e ver tudo que preparei para você. Se durante este período você decidir que o produto não é adequado para você ou que ainda não está preparado no momento, tudo bem.
            </p>
            <p className="font-semibold text-[#111]">
              Basta solicitar seu reembolso direto com nosso suporte. Você receberá todo o seu dinheiro, sem perguntas nem justificativas. Simples assim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
