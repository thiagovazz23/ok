/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CloneTopBanner } from './components/CloneTopBanner';
import { CloneHero } from './components/CloneHero';
import { CloneVideoCarousel } from './components/CloneVideoCarousel';
import { CloneTrustBar } from './components/CloneTrustBar';
import { CloneBenefits } from './components/CloneBenefits';
import { ClonePricingCard } from './components/ClonePricingCard';
import { CloneModules } from './components/CloneModules';
import { CloneWhyItWorks } from './components/CloneWhyItWorks';
import { CloneRecipeDetails } from './components/CloneRecipeDetails';
import { CloneTestimonials } from './components/CloneTestimonials';
import { CloneGuarantee } from './components/CloneGuarantee';
import { CloneHistory } from './components/CloneHistory';
import { CloneFAQ } from './components/CloneFAQ';
import { CloneFooter } from './components/CloneFooter';

const CHECKOUT_URL = 'https://ggcheckout.app/checkout/v2/PMgNlP06eKOzB3a6Dklj';

export default function App() {
  const handleOpenCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#282828] selection:bg-[#FE7A80] selection:text-white flex flex-col font-sans">
      {/* 1. Super Promo Relâmpago com Acesso Vitalício */}
      <CloneTopBanner />

      <main className="flex-1">
        {/* 2. Hero: Logo, 100% Atualizado 2026, Os Brownies Mais Virais do Mundo, +10.000 Alunos */}
        <CloneHero onOpenCheckout={handleOpenCheckout} />

        {/* 3. Vídeo Oficial do YouTube + Carrossel de Fotos de Brownies + Chamada da Fornada */}
        <CloneVideoCarousel onOpenCheckout={handleOpenCheckout} />

        {/* 4. Barra de Confiança: Compra Segura, Garantia de 30 Dias, Acesso Imediato e Vitalício */}
        <CloneTrustBar />

        {/* 5. Brownie: o melhor produto para vender o ano inteiro! */}
        <CloneBenefits />

        {/* 6. Box de Inscrição: De R$ 97 por R$ 19,90 à vista (sem parcelamento) */}
        <ClonePricingCard onOpenCheckout={handleOpenCheckout} />

        {/* 7. O Que Você Irá Aprender (12 Módulos e Aulas em Acordeão) */}
        <CloneModules />

        {/* 8. Você Vai Esperar Mais Quantos Meses (6 Cards) + Por Que Não Dá Certo */}
        <CloneWhyItWorks />

        {/* 9. Receita Equilibrada, Zero Gosto Residual, 15 Dias de Validade (90 Congelada) */}
        <CloneRecipeDetails />

        {/* 10. Depoimentos Reais de Alunos no WhatsApp */}
        <CloneTestimonials />

        {/* 11. Vá em Frente. O Risco É Todo Meu! (Garantia de 30 Dias com Selo) */}
        <CloneGuarantee />

        {/* 12. Nossa História (Jéssica Marcon de Oliveira) */}
        <CloneHistory />

        {/* 13. F.A.Q. Perguntas Frequentes (12 Perguntas Completas) */}
        <CloneFAQ />
      </main>

      {/* 14. Rodapé Oficial: Copyright, CNPJ e Links */}
      <CloneFooter />
    </div>
  );
}
