import React from 'react';

interface CloneHeroProps {
  onOpenCheckout: () => void;
}

export const CloneHero: React.FC<CloneHeroProps> = ({ onOpenCheckout }) => {
  return (
    <section className="pt-8 pb-14 bg-[#FAFAFA] text-center px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Clean Confectionery Brand Badge - No trademark logos */}
        <div className="flex justify-center pt-2">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFF0F1] border-2 border-[#FFA3A4] text-[#E84A5F] font-black text-xs sm:text-sm tracking-widest uppercase font-sora shadow-sm">
            <span className="text-base sm:text-lg">🍫</span>
            <span>MÉTODO BROWNIE LUCRATIVO</span>
          </div>
        </div>

        {/* Tagline Highlight */}
        <div className="inline-block bg-[#FFECEC] text-[#FE7A80] border border-[#FFA3A4]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase font-sora">
          100% DO CURSO ATUALIZADO AGORA EM 2026!
        </div>

        {/* Main Headings */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0F0F0F] tracking-tight leading-tight font-sora">
            Renda extra ou negócio próprio é com a gente: <br />
            <span className="text-theme-coral">OS BROWNIES MAIS VIRAIS DO MUNDO!</span>
          </h1>

          <p className="text-sm sm:text-lg text-[#444] font-medium max-w-3xl mx-auto pt-2 leading-relaxed">
            Quanto você pagaria se tivesse certeza que daqui apenas 1 mês estaria vivendo uma realidade muito diferente?
          </p>
        </div>

        {/* Counter Badge */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <div className="bg-white border border-[#EAEAEA] shadow-sm px-6 py-2.5 rounded-2xl inline-flex items-center gap-3">
            <span className="text-xs uppercase font-extrabold tracking-wider text-neutral-500">Alunos</span>
            <span className="text-2xl sm:text-3xl font-black text-[#FE7A80] font-sora">+ 10.000</span>
          </div>
        </div>

        {/* Description Text */}
        <div className="space-y-3 max-w-3xl mx-auto text-xs sm:text-base text-[#333] leading-relaxed">
          <p className="font-semibold text-[#111]">
            O Maior Curso de Brownies e Empreendedorismo do Brasil: receita SUPER lucrativa e fácil de fazer, com vídeo aulas, planilhas, ebooks, pack de embalagens editáveis no Canva, tabela nutricional, assistência individual no WhatsApp com ajuste de fornada e muito mais!
          </p>
          <p className="text-neutral-600">
            Absolutamente TUDO que você precisa para vender como água - seja começando do zero ou decolando as vendas atuais!
          </p>
        </div>

        {/* Trust Badges Trio */}
        <div className="flex items-center justify-center gap-6 sm:gap-12 py-3 flex-wrap">
          <div className="flex flex-col items-center">
            <img
              src="/images/pagamento-seguro.png"
              alt="Pagamento Seguro"
              className="w-16 sm:w-20 h-auto object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/controle-de-qualidade.png"
              alt="Controle de Qualidade"
              className="w-16 sm:w-20 h-auto object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/efficiency.png"
              alt="Eficiência Comprovada"
              className="w-16 sm:w-20 h-auto object-contain"
            />
          </div>
        </div>

        {/* Primary CTA Button */}
        <div className="pt-2">
          <a
            href="https://ggcheckout.app/checkout/v2/PMgNlP06eKOzB3a6Dklj"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-theme-action px-8 sm:px-12 py-4 sm:py-5 text-sm sm:text-lg uppercase tracking-wide cursor-pointer w-full sm:w-auto inline-block text-center"
          >
            Quero garantir a MAIOR PROMO da história!
          </a>
        </div>
      </div>
    </section>
  );
};
