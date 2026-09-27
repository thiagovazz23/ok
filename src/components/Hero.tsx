import React from 'react';
import { Play, CheckCircle2, ShieldCheck, Flame, ArrowRight, Clock, Star } from 'lucide-react';

interface HeroProps {
  onOpenCheckout: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, onOpenVideo }) => {
  return (
    <section id="proposta" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#5636d1]/20 via-[#f35588]/20 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -top-10 right-0 w-[400px] h-[400px] bg-[#d13374]/15 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Editorial Kicker */}
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#f35588]">
            <Flame className="w-4 h-4 text-[#f35588]" />
            <span>O Maior Curso de Brownies e Empreendedorismo do Brasil</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] text-balance font-display">
            Aprenda a fazer e vender os{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8da1] via-[#f35588] to-[#9c6fff]">
              brownies mais virais do Brasil
            </span>{' '}
            com casquinha perfeita.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-neutral-300 font-normal max-w-3xl mx-auto leading-relaxed">
            Receita super lucrativa com custo a partir de <strong>R$ 1,20 por unidade</strong>. Com apenas{' '}
            <span className="text-white font-semibold underline decoration-[#f35588] underline-offset-4">
              1 única fornada
            </span>
            , você recupera 100% do seu investimento de volta em lucro líquido!
          </p>

          {/* Metadata proof tags with typographic dot separators */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm text-neutral-400 pt-1">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-[#f35588]" /> +10.000 Alunos Transformados
            </span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-300">Massa Livre de Lactose</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-300">Validade de 15 Dias (90 Congelado)</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-300">Suporte 1 a 1 no WhatsApp</span>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base md:text-lg font-extrabold text-white bg-gradient-to-r from-[#e2498a] via-[#f35588] to-[#d13374] hover:brightness-110 active:scale-98 transition-all shadow-xl shadow-[#f35588]/25 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Quero Garantir a Maior Promoção</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenVideo}
              className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm md:text-base font-semibold text-neutral-200 bg-[#1f102a]/80 hover:bg-[#2b1739] border border-[#401f55] hover:border-[#f35588]/50 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-[#f35588]/20 flex items-center justify-center text-[#f35588]">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>Ver Demonstração da Casquinha</span>
            </button>
          </div>

          {/* Guarantee & Pricing Micro Trust */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 30 Dias de Garantia Incondicional
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#f35588]" /> Acesso Imediato e Vitalício
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Avaliação 4.9/5 estrelas
            </span>
          </div>
        </div>

        {/* Hero Visual Asset Showcase with Play Button */}
        <div className="mt-12 md:mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#3e1d52] shadow-2xl shadow-black/80 group">
            {/* 16:9 Image container */}
            <div className="aspect-[16/9] w-full bg-[#180922] relative overflow-hidden">
              <img
                src="/images/hero_lebron_brownie_1790449586483.jpg"
                alt="Brownies artesanais Le Bron com casquinha craquelada perfeita e calda de chocolate"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0712] via-black/30 to-black/20" />

              {/* Play preview trigger over image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <button
                  onClick={onOpenVideo}
                  aria-label="Assistir ao vídeo de apresentação da Jéssica Marcon"
                  className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#f35588] text-white flex items-center justify-center shadow-2xl shadow-[#f35588]/50 hover:scale-110 active:scale-95 transition-all cursor-pointer mb-4 animate-pulse-glow"
                >
                  <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current ml-1" />
                </button>
                <div className="bg-[#0f0714]/85 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 max-w-md">
                  <p className="text-white text-xs sm:text-sm font-semibold">
                    Assista ao vídeo: veja o corte da massa fudgy e a técnica da casquinha em minutos
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom highlight ribbon */}
            <div className="bg-[#180b22] px-6 py-4 border-t border-[#341744] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs md:text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold text-white">Promoção Atualizada para 2026:</span>
                <span>Apenas 7x de R$ 16,79 ou R$ 99,00 à vista</span>
              </div>
              <button
                onClick={onOpenCheckout}
                className="text-[#f35588] hover:text-[#ff8da1] font-bold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Inscreva-se agora mesmo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
