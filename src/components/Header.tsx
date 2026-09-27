import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingBag, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <aside aria-label="Aviso de promoção" className="bg-gradient-to-r from-[#e2498a] via-[#f35588] to-[#6a3bc7] text-white text-xs font-semibold py-2 px-4 text-center tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 uppercase font-bold text-[11px] tracking-wider bg-black/20 px-2.5 py-0.5 rounded">
            <Sparkles className="w-3.5 h-3.5" /> Super Promoção 2026
          </span>
          <span>Acesso Vitalício + Atualizações + Bônus Inclusos por apenas <strong>7x de R$ 16,79</strong> ou R$ 99 à vista!</span>
        </div>
      </aside>

      {/* Main One-Row Three-Zone Top Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 border-b ${
          scrolled
            ? 'bg-[#0f0714]/95 backdrop-blur-md border-[#321742]/80 shadow-lg shadow-black/40'
            : 'bg-[#0e0712] border-[#220d2f]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Zone 1: Single text element Brand Wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-white hover:text-[#f35588] transition-colors font-display"
          >
            Le Bron <span className="text-[#f35588]">Brownie</span>
          </a>

          {/* Zone 2: 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a href="#proposta" className="hover:text-white transition-colors">
              O Curso
            </a>
            <a href="#receitas" className="hover:text-white transition-colors">
              Receitas
            </a>
            <a href="#modulos" className="hover:text-white transition-colors">
              Módulos
            </a>
            <a href="#simulador" className="hover:text-white transition-colors">
              Simulador
            </a>
            <a href="#depoimentos" className="hover:text-white transition-colors">
              Alunos
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              Perguntas
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCheckout}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold text-white bg-gradient-to-r from-[#e2498a] to-[#d13374] hover:from-[#f35588] hover:to-[#e2498a] transition-all shadow-md shadow-[#e2498a]/20 cursor-pointer whitespace-nowrap active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Garantir Vaga</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800/60 focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#150a1d] border-b border-[#30163f] px-6 py-6 space-y-4">
            <nav className="flex flex-col gap-3 text-base font-medium text-neutral-200">
              <a
                href="#proposta"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#f35588] transition-colors py-1"
              >
                O Curso & Método
              </a>
              <a
                href="#receitas"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#f35588] transition-colors py-1"
              >
                Receitas & Sabores
              </a>
              <a
                href="#modulos"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#f35588] transition-colors py-1"
              >
                Aulas e Módulos
              </a>
              <a
                href="#simulador"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#f35588] transition-colors py-1"
              >
                Simulador de Lucro
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#f35588] transition-colors py-1"
              >
                Casos de Sucesso
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#f35588] transition-colors py-1"
              >
                Dúvidas Frequentes
              </a>
            </nav>
            <div className="pt-3 border-t border-[#2d143a]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckout();
                }}
                className="w-full py-3 px-4 rounded-lg bg-[#e2498a] hover:bg-[#f35588] text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Quero Minha Vaga por R$ 99</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
