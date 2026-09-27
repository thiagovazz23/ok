import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { CLONE_MODULES } from '../data/lebronCloneData';

export const CloneModules: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([1]); // First module open by default

  const toggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-14 sm:py-20 bg-white px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-[#0F0F0F] font-sora leading-tight max-w-3xl mx-auto">
            O QUE VOCÊ IRÁ APRENDER SÓ AQUI E QUE TE TRANSFORMARÁ EM UM EMPREENDEDOR DE SUCESSO ABSOLUTO (TUDO INCLUSO!)
          </h2>

          <div className="space-y-3 text-xs sm:text-sm text-[#444] leading-relaxed max-w-3xl mx-auto">
            <p>
              Nosso objetivo é passar toda a informação que você precisa para alavancar o seu negócio, da forma mais leve possível – combinando a metodologia certa e conteúdos que trazem credibilidade e vendas, independente da sua experiência.
            </p>
            <p>
              Todos os conteúdos são exclusivos e desenvolvidos por especialistas em confeitaria de alto rendimento, e são validados e lapidados constantemente para que seja a metodologia mais ágil e eficaz para lucros desde o primeiro dia, que crescem a cada semana e que garantem você ir além, construindo um negócio consistente de sucesso garantido e incomparável.
            </p>
          </div>

          {/* Recipes Mockup Image - Clean and unbranded */}
          <div className="max-w-md mx-auto pt-4">
            <img
              src="/images/recipe_mockup_clean.jpg"
              alt="Mockup Combo de Receitas Premium"
              className="w-full h-auto object-contain mx-auto rounded-2xl shadow-md border border-[#FFA3A4]/30"
            />
          </div>
        </div>

        {/* The 12 Accordion Modules */}
        <div className="space-y-4">
          {CLONE_MODULES.map((mod) => {
            const isOpen = openIds.includes(mod.id);
            return (
              <div key={mod.id} className="elementor-toggle-item overflow-hidden">
                <button
                  onClick={() => toggle(mod.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FFF8F8] transition-colors"
                >
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-[#111] font-sora uppercase leading-snug">
                      {mod.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-[#FE7A80] underline decoration-[#FFA3A4]">
                      {mod.buttonText}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#FFECEC] text-[#FE7A80] flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#F0F0F0] bg-[#FAFAFA] text-xs sm:text-sm text-[#333] space-y-2">
                    {mod.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 py-0.5">
                        <span className="text-[#FE7A80] font-bold">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
