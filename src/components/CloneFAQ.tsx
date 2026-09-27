import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { CLONE_FAQS } from '../data/lebronCloneData';

export const CloneFAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([1]); // First FAQ open by default

  const toggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#FBFBFB] px-4 sm:px-6 border-t border-[#F0F0F0]">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-1">
          <span className="text-xs uppercase font-extrabold text-[#FE7A80] tracking-widest font-sora">
            F.A.Q.
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0F0F0F] font-sora">
            PERGUNTAS FREQUENTES
          </h2>
        </div>

        {/* 12 Accordion items */}
        <div className="space-y-3.5">
          {CLONE_FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div key={faq.id} className="elementor-toggle-item overflow-hidden">
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FFF8F8] transition-colors"
                >
                  <span className="text-xs sm:text-base font-bold text-[#111] font-sora">
                    {faq.question}
                  </span>

                  <div className="w-7 h-7 rounded-full bg-[#FFECEC] text-[#FE7A80] flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#F0F0F0] bg-[#FAFAFA] text-xs sm:text-sm text-[#444] leading-relaxed">
                    {faq.answer}
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
