import React, { useState, useEffect } from 'react';
import { ShieldCheck, Check, Clock, Sparkles, ArrowRight, Zap, Lock, CreditCard } from 'lucide-react';

interface PricingCheckoutProps {
  onOpenCheckout: () => void;
}

export const PricingCheckout: React.FC<PricingCheckoutProps> = ({ onOpenCheckout }) => {
  // Countdown timer simulation (resets or stays active)
  const [timeLeft, setTimeLeft] = useState({ hours: 7, minutes: 42, seconds: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="oferta" className="py-20 md:py-28 bg-[#0b050e] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f35588]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#f35588]">
            <Zap className="w-4 h-4 fill-current" />
            <span>Super Promoção Relâmpago com Acesso Vitalício</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
            Apenas hoje: o menor valor de toda a história
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Com apenas <strong>1 fornada</strong> você recupera 100% do investimento em lucro. Não deixe essa oportunidade passar.
          </p>

          {/* Countdown Clock Display */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="bg-[#1e0a29] border border-[#481e60] px-4 py-2 rounded-xl text-center">
              <span className="text-xl font-bold text-white font-mono tabular-nums">
                0{timeLeft.hours}
              </span>
              <span className="block text-[10px] text-neutral-400 uppercase">Horas</span>
            </div>
            <span className="text-xl font-bold text-[#f35588]">:</span>
            <div className="bg-[#1e0a29] border border-[#481e60] px-4 py-2 rounded-xl text-center">
              <span className="text-xl font-bold text-white font-mono tabular-nums">
                {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
              </span>
              <span className="block text-[10px] text-neutral-400 uppercase">Minutos</span>
            </div>
            <span className="text-xl font-bold text-[#f35588]">:</span>
            <div className="bg-[#1e0a29] border border-[#481e60] px-4 py-2 rounded-xl text-center">
              <span className="text-xl font-bold text-white font-mono tabular-nums">
                {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
              </span>
              <span className="block text-[10px] text-neutral-400 uppercase">Segundos</span>
            </div>
          </div>
        </div>

        {/* Pricing Offer Box */}
        <div className="bg-gradient-to-b from-[#1b0a26] to-[#12051a] rounded-3xl border-2 border-[#f35588] shadow-2xl shadow-[#f35588]/15 overflow-hidden">
          {/* Top Banner inside card */}
          <div className="bg-gradient-to-r from-[#e2498a] via-[#f35588] to-[#9c6fff] px-6 py-3 text-center">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
              Vagas com Desconto Especial + Todos os Bônus Inclusos
            </span>
          </div>

          <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: What's included checklist */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                O que você recebe imediatamente:
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-neutral-200">
                {[
                  'Acesso Imediato e VITALÍCIO a todas as vídeo aulas em Full HD',
                  'Receita Oficial do Brownie Tradicional Fudgy (a massa perfeita)',
                  'Mais de 10 variações: Brookie, Red Velvet, Nutella, Blondie, Copos e Barras',
                  'Receita Exclusiva Saudável e Funcional (Sem glúten & sem lactose)',
                  'Módulo Intensivão de Pontos de Venda e Revenda em Cafeterias',
                  'Planilha Automática de Precificação de Brownies e Encomendas',
                  'Pack com mais de 30 Modelos de Embalagens Editáveis no Canva 2026',
                  'Kit Tabela Nutricional Automatizada de acordo com a Nova Lei da ANVISA',
                  'E-books de Vendas no Instagram, Scripts de WhatsApp e Fotos com Celular',
                  'Assistência Individual Direta no WhatsApp com Análise de Fornada',
                  'Certificado Oficial de Especialista em Brownies Le Bron'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Price Box and CTA */}
            <div className="lg:col-span-5 bg-[#170821] p-6 sm:p-8 rounded-2xl border border-[#3f1954] text-center space-y-5">
              <div>
                <span className="text-xs text-neutral-400 uppercase tracking-wider block">
                  De <span className="line-through font-mono">R$ 297,00</span> por apenas
                </span>

                <div className="mt-2">
                  <div className="text-xs font-bold text-[#ff8da1] uppercase">Parcelado em até:</div>
                  <div className="text-4xl sm:text-5xl font-black text-white font-display mt-0.5">
                    7x de <span className="text-[#f35588] font-mono tabular-nums">R$ 16,79</span>
                  </div>
                </div>

                <div className="mt-2 text-xs text-neutral-300">
                  ou <strong className="text-white font-mono text-base">R$ 99,00 à vista</strong> (no Pix ou Cartão)
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenCheckout}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#e2498a] via-[#f35588] to-[#d13374] hover:brightness-110 active:scale-98 transition-all text-white font-extrabold text-base shadow-xl shadow-[#f35588]/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Garantir Minha Vaga Agora</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="space-y-2 text-[11px] text-neutral-400">
                <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-semibold">
                  <Lock className="w-3.5 h-3.5" /> Compra 100% Segura e Criptografada
                </div>
                <div>Acesso liberado imediatamente após a confirmação.</div>
              </div>
            </div>
          </div>
        </div>

        {/* 30-Day Guarantee Section (Mandatory from website) */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#14081c] border border-[#3b174e] flex flex-col sm:flex-row items-center gap-6">
          <div className="w-18 h-18 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <ShieldCheck className="w-10 h-10" />
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-black text-white font-display">
              Vá em frente. O risco é todo meu! Garantia Incondicional de 30 Dias.
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Você tem 30 dias inteiros para assistir a todas as aulas, testar a receita, usar as planilhas e falar conosco no WhatsApp. Se por qualquer motivo você não amar os brownies ou achar que não valeu a pena, basta nos enviar uma única mensagem que devolvemos <strong>100% do seu dinheiro</strong>. Sem perguntas e sem ressentimentos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
