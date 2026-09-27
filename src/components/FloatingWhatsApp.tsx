import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    window.open('https://wa.me/5548991695949?text=Tenho%20uma%20dúvida%20sobre%20o%20curso!', '_blank', 'noopener,noreferrer');
  };

  return (
    <aside aria-label="Suporte WhatsApp" className="fixed bottom-5 right-5 z-40">
      <button
        onClick={handleClick}
        aria-label="Abrir suporte pelo WhatsApp oficial da Le Bron Brownie"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FE7A80] rounded-full border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FE7A80] rounded-full border-2 border-white" />
        <MessageCircle className="w-7 h-7 fill-current" />

        <span className="absolute right-16 bg-[#0F0F0F] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
          Fale com a gente no WhatsApp
        </span>
      </button>
    </aside>
  );
};
