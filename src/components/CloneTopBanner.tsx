import React from 'react';

export const CloneTopBanner: React.FC = () => {
  return (
    <aside aria-label="Aviso de promoção relâmpago" className="bg-theme-coral text-white py-3 px-4 text-center shadow-sm">
      <div className="max-w-5xl mx-auto space-y-0.5">
        <h4 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wide font-sora">
          SUPER PROMO RELÂMPAGO COM ACESSO VITALÍCIO
        </h4>
        <p className="text-[11px] sm:text-xs text-white/95 font-medium">
          Nossa missão: queremos ver mais gente mudando de vida. Agora é a sua vez de ter uma vida melhor.
        </p>
      </div>
    </aside>
  );
};
