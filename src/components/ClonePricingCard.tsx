import React from 'react';
import { Check } from 'lucide-react';

interface ClonePricingCardProps {
  onOpenCheckout: () => void;
}

export const ClonePricingCard: React.FC<ClonePricingCardProps> = ({ onOpenCheckout }) => {
  const items = [
    'COMBO DE RECEITAS PREMIUM',
    'KIT DE GESTÃO FINANCEIRA',
    'EBOOK PLANEJAMENTO ESTRATÉGICO',
    'PLANILHA DE PROGRAMAÇÃO DE COMPRAS',
    'PACK IDENTIDADE VISUAL E MARCA',
    'CURSO INTENSIVÃO DECOLANDO PONTOS DE VENDA (BÔNUS!)',
    'NOVO: RECEITA EXCLUSIVA DE BROWNIE SAUDÁVEL - SEM GLÚTEN E SAUDÁVEL',
    'NOVO: DICAS PARA DATAS COMEMORATIVAS LUCRATIVAS! (BÔNUS)',
    'A ESTRATÉGIA COMPROVADA PARA FATURAR ATÉ R$5.000 POR MÊS!',
    'ASSISTÊNCIA INDIVIDUAL NO WHATSAPP',
    'TODO O CONTEÚDO LIBERADO IMEDIATAMENTE APÓS A COMPRA (ABSOLUTAMENTE TUDO INCLUSO!)'
  ];

  return (
    <section id="inscricao" className="py-14 sm:py-20 bg-[#FBFBFB] px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#FFECEC] border-2 border-[#FFA3A4] rounded-3xl p-6 sm:p-10 shadow-lg text-center space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-[#0F0F0F] uppercase font-sora">
              CURSO COMPLETO:
            </h3>
            <div className="inline-block bg-[#FE7A80] text-white px-5 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider font-sora shadow-sm">
              APENAS HOJE: ACESSO VITALÍCIO!
            </div>
            <p className="text-xs sm:text-sm text-[#444] font-medium max-w-2xl mx-auto pt-1 leading-snug">
              VIDEO AULAS, EBOOKS, PLANILHAS COM A METODOLOGIA QUE MAIS TRAZ VENDAS, LUCROS E CREDIBILIDADE DESDE O PRIMEIRO DIA
            </p>
            <p className="text-sm sm:text-base font-extrabold text-[#FE7A80] font-sora">
              COM APENAS 1 FORNADA, TODO VALOR INVESTIDO DE VOLTA EM LUCRO!
            </p>
          </div>

          {/* Clean Mockup image without trademarked logos */}
          <div className="max-w-md mx-auto pt-2">
            <img
              src="/images/course_mockup_clean.jpg"
              alt="Mockup Curso Completo Brownie Lucrativo"
              className="w-full h-auto object-contain rounded-2xl shadow-md border border-[#FFA3A4]/30"
            />
          </div>

          {/* Checklist */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#FFA3A4]/40 max-w-2xl mx-auto text-left space-y-2.5">
            {items.map((it, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#222]">
                <Check className="w-4 h-4 text-[#FE7A80] shrink-0 mt-0.5" />
                <span className="font-semibold">{it}</span>
              </div>
            ))}
          </div>

          {/* Pricing Box - R$ 19,90 À VISTA (SEM PARCELAMENTO) */}
          <div className="space-y-2 pt-2">
            <div className="text-sm sm:text-base text-neutral-500 font-semibold font-sora">
              <span className="strikethrough-x">de R$ 97,00 por apenas</span>
            </div>

            <div className="text-4xl sm:text-6xl font-black text-[#FE7A80] font-sora">
              R$ 19,90
            </div>

            <div className="text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 py-1.5 px-4 rounded-full inline-block font-sora">
              ✓ Pagamento único à vista · Sem parcelas ou mensalidades
            </div>
          </div>

          {/* Button */}
          <div className="pt-2">
            <a
              href="https://ggcheckout.app/checkout/v2/PMgNlP06eKOzB3a6Dklj"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-theme-action px-8 sm:px-14 py-4 sm:py-5 text-sm sm:text-lg uppercase tracking-wide cursor-pointer w-full sm:w-auto inline-block text-center"
            >
              Quero garantir minha inscrição!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
