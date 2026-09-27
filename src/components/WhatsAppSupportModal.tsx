import React from 'react';
import { X, MessageCircle, Send, CheckCircle2, Shield } from 'lucide-react';

interface WhatsAppSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppSupportModal: React.FC<WhatsAppSupportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const defaultMessages = [
    'Quero me inscrever no curso com o valor promocional de R$ 99,00 à vista!',
    'Gostaria de saber mais sobre as planilhas e o suporte de ajuste de fornada.',
    'Quero pagar parcelado no boleto ou Pix.',
    'Tenho dúvidas sobre como vender em pontos de venda e cafeterias.'
  ];

  const handleSendMessage = (msg: string) => {
    const encoded = encodeURIComponent(`Olá equipe Le Bron Brownie! ${msg}`);
    // Open WhatsApp link cleanly in browser
    window.open(`https://wa.me/5548999999999?text=${encoded}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#13081a] border border-[#3f1954] rounded-2xl overflow-hidden shadow-2xl">
        {/* WhatsApp Styled Header */}
        <div className="bg-[#075e54] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-400/20 flex items-center justify-center text-white">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Suporte Oficial Le Bron Brownie</h3>
              <p className="text-[11px] text-emerald-200">Online agora · Resposta rápida</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-emerald-100 hover:text-white p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message body */}
        <div className="p-5 space-y-4 bg-[#180a22]">
          <div className="bg-[#241033] p-3.5 rounded-xl border border-[#3b174e] text-xs text-neutral-200 space-y-1">
            <div className="font-bold text-[#ff8da1]">Equipe Jéssica Marcon:</div>
            <p>
              Olá! Como podemos te ajudar a iniciar ou alavancar seu negócio de brownies hoje?
              Clique em uma das opções abaixo para abrir a conversa no seu WhatsApp:
            </p>
          </div>

          <div className="space-y-2">
            {defaultMessages.map((msg, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(msg)}
                className="w-full text-left p-3 rounded-xl bg-[#1f0c2c] hover:bg-[#2b123d] border border-[#351546] hover:border-[#f35588]/50 text-xs text-neutral-200 transition-all flex items-center justify-between gap-2 group cursor-pointer"
              >
                <span>&ldquo;{msg}&rdquo;</span>
                <Send className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </button>
            ))}
          </div>

          <div className="pt-2 text-center text-[11px] text-neutral-400 border-t border-[#2d123b]">
            LE BRON CURSOS E TREINAMENTOS LTDA · Florianópolis / SC
          </div>
        </div>
      </div>
    </div>
  );
};
