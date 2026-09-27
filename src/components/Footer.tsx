import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenCheckout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout }) => {
  return (
    <footer className="bg-[#08030a] text-neutral-400 text-xs border-t border-[#220c2e] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-2">
            <span className="text-xl font-extrabold text-white tracking-tight font-display">
              Le Bron <span className="text-[#f35588]">Brownie</span>
            </span>
            <p className="text-neutral-400 max-w-md leading-relaxed text-xs">
              O maior curso de produção e venda de brownies do Brasil. Métodos comprovados para transformar sua cozinha em uma fábrica de brownies lucrativa, com receitas virais e suporte de perto.
            </p>
            <div className="text-[11px] text-neutral-500">
              LE BRON CURSOS E TREINAMENTOS LTDA · Florianópolis / Santa Catarina
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <div className="text-white font-bold uppercase tracking-wider text-xs">Navegação</div>
            <ul className="space-y-1.5">
              <li>
                <a href="#proposta" className="hover:text-white transition-colors">
                  O Método
                </a>
              </li>
              <li>
                <a href="#receitas" className="hover:text-white transition-colors">
                  Cardápio de Receitas
                </a>
              </li>
              <li>
                <a href="#modulos" className="hover:text-white transition-colors">
                  Aulas e Módulos
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">
                  Simulador de Faturamento
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Depoimentos de Alunos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Security & Guarantees */}
          <div className="space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs">Segurança</div>
            <div className="p-3.5 rounded-xl bg-[#130619] border border-[#2c103a] space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Garantia de 30 Dias</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-snug">
                Satisfação total ou devolução integral do seu investimento em 1 clique.
              </p>
            </div>
            <button
              onClick={onOpenCheckout}
              className="text-[#f35588] hover:text-[#ff8da1] font-bold text-xs transition-colors cursor-pointer"
            >
              Garantir inscrição promocional →
            </button>
          </div>
        </div>

        {/* Legal and Disclaimer bottom row */}
        <div className="pt-8 border-t border-[#1d0a27] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} Le Bron Brownie. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-400 cursor-pointer">Termos de Uso</span>
            <span>·</span>
            <span className="hover:text-neutral-400 cursor-pointer">Política de Privacidade</span>
            <span>·</span>
            <span className="hover:text-neutral-400 cursor-pointer">Segurança dos Dados</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
