import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CloneVideoCarouselProps {
  onOpenCheckout: () => void;
}

export const CloneVideoCarousel: React.FC<CloneVideoCarouselProps> = ({ onOpenCheckout }) => {
  const images = [
    { src: '/images/red_velvet.jpg', title: 'Brownie Red Velvet' },
    { src: '/images/saudavel.jpg', title: 'Brownie Saudável e Funcional' },
    { src: '/images/img_2011.jpg', title: 'Casquinha Craquelada Crocante' },
    { src: '/images/img_2012.jpg', title: 'Massa Fudgy Fatiada' },
    { src: '/images/brownie_9.jpg', title: 'Trufado Cremoso' },
    { src: '/images/brownie_8.jpg', title: 'Combo para Cafeterias' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-14 bg-white text-center px-4 sm:px-6 border-t border-[#F0F0F0]">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Headings */}
        <div className="space-y-2">
          <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F0F0F] font-sora">
            Receitas fáceis, deliciosas e <span className="text-theme-coral">MUITO lucrativas</span>: custos a partir de R$1,20 por unidade!
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-medium">
            Assista ao vídeo abaixo para saber todos os detalhes!
          </p>
        </div>

        {/* Real YouTube Video Embed */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#FFA3A4]/30 max-w-3xl mx-auto bg-black aspect-video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/T3ajK-_pXiw?autoplay=0&controls=1&rel=0&modestbranding=1"
            title="Apresentação Brownie Gourmet Lucrativo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Real Photos Carousel */}
        <div className="pt-4 space-y-4">
          <h3 className="text-sm uppercase font-bold text-neutral-500 tracking-wider">
            Conheça alguns dos brownies ensinados no curso:
          </h3>

          <div className="relative max-w-2xl mx-auto overflow-hidden rounded-2xl border border-[#EEE] shadow-md bg-[#FAFAFA]">
            <div className="aspect-[4/3] w-full relative">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-left">
                <span className="text-xs sm:text-sm font-bold font-sora">
                  {images[currentIndex].title}
                </span>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-neutral-800 flex items-center justify-center shadow hover:bg-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Próxima foto"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-neutral-800 flex items-center justify-center shadow hover:bg-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 pt-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === i ? 'bg-[#FE7A80] w-6' : 'bg-neutral-300'
                }`}
                aria-label={`Ver foto ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Promo Highlight Banner */}
        <div className="bg-[#FFECEC] border-2 border-[#FFA3A4] p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto shadow-sm space-y-4">
          <p className="text-sm sm:text-lg font-bold text-[#0F0F0F] leading-snug font-sora">
            <span className="text-[#FE7A80]">APENAS HOJE:</span> Com apenas 1 fornada, 100% do investimento de volta em LUCRO, acesso VITALÍCIO, garantia super estendida e um suporte de perto, em que nós fazemos dar certo com você.
          </p>

          <a
            href="https://ggcheckout.app/checkout/v2/PMgNlP06eKOzB3a6Dklj"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-theme-action px-8 sm:px-12 py-4 text-xs sm:text-base uppercase tracking-wide cursor-pointer w-full sm:w-auto inline-block text-center"
          >
            Quero garantir a MAIOR PROMO da história!
          </a>
        </div>
      </div>
    </section>
  );
};
