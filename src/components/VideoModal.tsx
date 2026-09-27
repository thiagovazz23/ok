import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenCheckout }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(35);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { title: 'O Segredo da Casquinha Craquelada', duration: '03:15' },
    { title: 'Por que Usar Óleo e Economizar 40%', duration: '05:40' },
    { title: 'Como Vender em Cafeterias e Mercados', duration: '08:20' },
    { title: 'Demonstração da Planilha Automática', duration: '12:00' },
  ];

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 500);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#14081c] border border-[#401f55] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-black">
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#1a0b25] border-b border-[#311641] flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Sparkles className="w-4 h-4 text-[#f35588]" />
            <span>Masterclass: O Método Oficial Le Bron Brownie</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/50 transition-colors"
            aria-label="Fechar vídeo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen Area */}
        <div className="relative aspect-video bg-black overflow-hidden group">
          <img
            src="/images/brownie_cut_fudgy_1790449586483.jpg"
            alt="Demonstração do Brownie Le Bron cortado"
            onError={(e) => {
              // fallback to cut fudgy image
              (e.currentTarget as HTMLImageElement).src = '/images/brownie_cut_fudgy_1790449597580.jpg';
            }}
            className="w-full h-full object-cover opacity-85"
            referrerPolicy="no-referrer"
          />

          {/* Subtitles & Instructor Info Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20 flex flex-col justify-between p-6">
            <div className="flex justify-between items-start">
              <span className="bg-[#f35588]/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Aula Demonstrativa Exclusiva
              </span>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2.5 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-sm transition-all"
                title={isMuted ? 'Ativar áudio' : 'Mutar áudio'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Central Play/Pause Trigger */}
            <div className="self-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-[#f35588]/90 hover:bg-[#f35588] text-white flex items-center justify-center shadow-xl transition-transform active:scale-95 cursor-pointer"
              >
                {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1 fill-current" />}
              </button>
            </div>

            {/* Simulated Live Caption */}
            <div className="bg-black/75 backdrop-blur-sm p-4 rounded-xl border border-white/10 max-w-xl self-center text-center">
              <p className="text-white text-sm font-medium">
                &ldquo;...a casquinha brilhante não depende de sorte. É uma reação química exata entre os açúcares dissolvidos nos ovos batidos e a temperatura precisa do forno...&rdquo;
              </p>
              <span className="text-xs text-[#f35588] font-semibold mt-1 block">
                — Jéssica Marcon, Fundadora da Le Bron Brownie
              </span>
            </div>
          </div>

          {/* Progress timeline bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-neutral-800">
            <div
              className="h-full bg-gradient-to-r from-[#e2498a] to-[#f35588] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Chapters selection and bottom CTA */}
        <div className="p-6 bg-[#160a1e] space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapter(idx)}
                className={`p-2.5 rounded-lg text-left transition-all cursor-pointer border ${
                  activeChapter === idx
                    ? 'bg-[#2b133b] border-[#f35588] text-white'
                    : 'bg-[#1a0c24] border-transparent text-neutral-400 hover:text-white'
                }`}
              >
                <div className="font-bold flex items-center gap-1">
                  <span>0{idx + 1}.</span>
                  <span className="truncate">{ch.title}</span>
                </div>
                <div className="text-[11px] text-neutral-500 mt-1">{ch.duration}</div>
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#2d143a]">
            <div>
              <p className="text-sm font-bold text-white">Gostou da metodologia sem enrolação?</p>
              <p className="text-xs text-neutral-400">Garanta o curso completo com acesso vitalício por apenas 7x de R$ 16,79.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#e2498a] hover:bg-[#f35588] text-white text-xs md:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#e2498a]/25"
            >
              <span>Garantir Minha Vaga Promocional</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
