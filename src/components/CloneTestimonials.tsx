import React from 'react';

export const CloneTestimonials: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FBFBFB] px-4 sm:px-6 border-t border-[#F0F0F0]">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <div className="space-y-2">
          <span className="text-xs uppercase font-extrabold text-[#FE7A80] tracking-wider font-sora">
            Depoimentos Reais
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0F0F0F] font-sora">
            O que nossos alunos e alunas estão falando:
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto">
            Mensagens espontâneas enviadas no WhatsApp de suporte e no grupo exclusivo de alunos.
          </p>
        </div>

        {/* Real Screenshot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md border border-[#EAEAEA] bg-white p-2">
            <img
              src="/images/depoimento_48.jpg"
              alt="Depoimento aluno WhatsApp"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md border border-[#EAEAEA] bg-white p-2">
            <img
              src="/images/depoimento_49.jpg"
              alt="Depoimento aluna WhatsApp"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md border border-[#EAEAEA] bg-white p-2">
            <img
              src="/images/depoimento_whats.png"
              alt="Print WhatsApp Suporte Oficial"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
