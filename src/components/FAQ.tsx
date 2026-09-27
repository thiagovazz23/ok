import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/courseData';

interface FAQProps {
  onOpenWhatsApp: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenWhatsApp }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#0e0712] relative border-t border-[#260f33]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#f35588]">
            <HelpCircle className="w-4 h-4" />
            <span>F.A.Q.</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
            Perguntas Frequentes
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Tire todas as suas dúvidas sobre a produção, receitas, suporte e garantia.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#180924] border-[#f35588]/50 shadow-md shadow-[#f35588]/10'
                    : 'bg-[#14081c] border-[#2e123d] hover:border-[#421b56]'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white font-display leading-snug">
                    {item.question}
                  </span>
                  <div className="p-1.5 rounded-lg bg-[#250f35] text-neutral-300 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#f35588]" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-[#291138] animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions helper box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#170922] border border-[#3b174e] text-center space-y-3">
          <p className="text-sm text-neutral-300">
            Ainda com alguma dúvida específica sobre o curso ou formas de pagamento?
          </p>
          <button
            onClick={onOpenWhatsApp}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp com o Suporte Oficial</span>
          </button>
        </div>
      </div>
    </section>
  );
};
