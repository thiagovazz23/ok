import React from 'react';
import { MessageSquare, CreditCard } from 'lucide-react';

interface ClonePixBoletoSupportProps {
  onOpenCheckout: () => void;
}

export const ClonePixBoletoSupport: React.FC<ClonePixBoletoSupportProps> = ({ onOpenCheckout }) => {
  const handleOpenWhatsApp = () => {
    window.open('https://wa.me/5548991695949?text=Tenho%20uma%20dúvida%20sobre%20o%20curso!', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-14 sm:py-20 bg-white px-4 sm:px-6 border-t border-[#F0F0F0]">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-xl sm:text-3xl font-black text-[#0F0F0F] font-sora leading-tight">
          AINDA COM DÚVIDAS OU PRECISANDO DE PIX OU BOLETO PARCELADO?
        </h2>

        <div className="space-y-3 text-xs sm:text-base text-[#444] leading-relaxed">
          <p>
            Nós temos a absoluta certeza de que essa é uma das maiores oportunidades que você irá agarrar na vida, e de forma totalmente garantida. Mas se você ainda tem alguma dúvida ou precisa pagar em pix ou boleto parcelado, clique no botão abaixo que iremos te ajudar!
          </p>
          <p className="bg-[#FFF4F4] p-4 rounded-xl border border-[#FFA3A4]/40 text-xs sm:text-sm text-[#222]">
            <strong>Para pix ou boleto parcelado:</strong> você vai receber todo mês no seu email e o melhor é que não tem juros! O acesso você recebe imediatamente de tudo assim que o primeiro pagamento cair, sendo <strong>PIX: imediatamente</strong> (pode acontecer de ficar em processamento e demorar até 20 minutos).
          </p>
        </div>

        {/* Two Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenCheckout}
            className="btn-lebron px-8 py-4 text-xs sm:text-base uppercase tracking-wide cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <CreditCard className="w-4 h-4" />
            <span>Pix ou boleto parcelado!</span>
          </button>

          <button
            onClick={handleOpenWhatsApp}
            className="btn-lebron-outline px-8 py-4 text-xs sm:text-base uppercase tracking-wide cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Tenho dúvida!</span>
          </button>
        </div>
      </div>
    </section>
  );
};
