import React from 'react';
import { ShieldCheck, Clock, Award } from 'lucide-react';

export const CloneTrustBar: React.FC = () => {
  return (
    <section className="py-6 bg-[#FBFBFB] border-y border-[#ECECEC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-neutral-800 font-bold text-xs sm:text-sm font-sora">
            <ShieldCheck className="w-5 h-5 text-[#FE7A80]" />
            <span>Compra Segura</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-neutral-800 font-bold text-xs sm:text-sm font-sora">
            <Award className="w-5 h-5 text-[#FE7A80]" />
            <span>Garantia de 30 Dias</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-neutral-800 font-bold text-xs sm:text-sm font-sora">
            <Clock className="w-5 h-5 text-[#FE7A80]" />
            <span>Acesso Imediato e Vitalício</span>
          </div>
        </div>
      </div>
    </section>
  );
};
