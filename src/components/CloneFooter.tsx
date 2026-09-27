import React from 'react';

export const CloneFooter: React.FC = () => {
  return (
    <footer className="py-10 bg-white border-t border-[#EAEAEA] text-center text-xs text-neutral-500 px-4">
      <div className="max-w-4xl mx-auto space-y-3">
        <p>
          Copyright © 2023-2026 Todos os direitos reservados. Brownie Gourmet Lucrativo. CNPJ: 23.261.807.0001/83
        </p>
        <div className="flex items-center justify-center gap-3 text-[11px] text-neutral-400">
          <span className="hover:text-neutral-600 cursor-pointer">Termos de uso</span>
          <span>.</span>
          <span className="hover:text-neutral-600 cursor-pointer">Política de Privacidade</span>
          <span>.</span>
          <span className="hover:text-neutral-600 cursor-pointer">Cookies.</span>
        </div>
      </div>
    </footer>
  );
};
