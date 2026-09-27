import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, QrCode, CreditCard, MessageSquare, Copy, Check, Lock, ArrowRight, ExternalLink } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'hotmart' | 'pix' | 'cartao'>('hotmart');
  const [copied, setCopied] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [installments, setInstallments] = useState('7');

  if (!isOpen) return null;

  const hotmartUrl = 'https://pay.hotmart.com/S80554096E?off=r5ipc07o&checkoutMode=10&bid=1710370461135';
  const mockPixKey = '00020126580014br.gov.bcb.pix0136lebronbrownie-cursos-financeiro-pix520400005303986540599.005802BR5916LE BRON CURSOS6012FLORIANOPOLIS62070503***6304E8A2';

  const handleCopyPix = () => {
    navigator.clipboard?.writeText(mockPixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  const handleGoToHotmart = () => {
    window.open(hotmartUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border border-[#FFA3A4] rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col text-neutral-800">
        {/* Top Header */}
        <div className="px-6 py-4 bg-lebron-coral text-white flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-bold font-sora">
            <span>Inscrição Oficial · Le Bron Brownie</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {success ? (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F0F0F] font-sora">
                Inscrição Confirmada com Sucesso!
              </h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Parabéns <strong>{name || 'aluno(a)'}</strong>! Enviamos os dados de acesso imediato à plataforma de aulas para o e-mail:
                <span className="block font-bold text-[#FE7A80] mt-1 font-mono">{email || 'seu-email@gmail.com'}</span>
              </p>

              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] text-xs text-neutral-700 max-w-sm mx-auto space-y-1 text-left">
                <p>✓ Acesso Vitalício 2026 Liberado</p>
                <p>✓ Download das Planilhas e Canva</p>
                <p>✓ WhatsApp de Suporte com a Jéssica</p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="btn-lebron px-8 py-3 text-sm cursor-pointer"
                >
                  Concluir e Acessar Minha Área
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Product and Price Bar */}
              <div className="p-4 rounded-2xl bg-[#FFECEC] border border-[#FFA3A4] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0F0F0F] font-sora">
                    Curso Completo Le Bron Brownie 2026
                  </h4>
                  <span className="text-xs text-neutral-600">Acesso Vitalício + Todos os Bônus</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-neutral-400 line-through block font-mono">R$ 697,00</span>
                  <span className="text-base font-extrabold text-[#FE7A80] font-sora">
                    7x R$ 16,79 ou R$ 99,00
                  </span>
                </div>
              </div>

              {/* Selector */}
              <div>
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2 font-sora">
                  Forma de Conclusão da Inscrição:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('hotmart')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'hotmart'
                        ? 'bg-[#FFECEC] border-[#FE7A80] text-[#FE7A80] font-bold shadow-sm'
                        : 'bg-[#FAFAFA] border-[#EAEAEA] text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    <ExternalLink className="w-5 h-5 text-[#FE7A80]" />
                    <span className="text-xs font-bold">Hotmart Oficial</span>
                    <span className="text-[10px] text-neutral-500">Checkout padrão</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'bg-[#FFECEC] border-[#FE7A80] text-[#FE7A80] font-bold shadow-sm'
                        : 'bg-[#FAFAFA] border-[#EAEAEA] text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    <QrCode className="w-5 h-5 text-emerald-600" />
                    <span className="text-xs font-bold">PIX Direto</span>
                    <span className="text-[10px] text-emerald-600 font-semibold">Sem juros</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cartao')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'cartao'
                        ? 'bg-[#FFECEC] border-[#FE7A80] text-[#FE7A80] font-bold shadow-sm'
                        : 'bg-[#FAFAFA] border-[#EAEAEA] text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-[#FE7A80]" />
                    <span className="text-xs font-bold">Cartão em 7x</span>
                    <span className="text-[10px] text-neutral-500">R$ 16,79/mês</span>
                  </button>
                </div>
              </div>

              {/* Hotmart Direct Option */}
              {paymentMethod === 'hotmart' && (
                <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA] text-center space-y-4">
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    Você será redirecionado para a página oficial da <strong>Hotmart</strong> com criptografia de ponta a ponta e aprovação instantânea por apenas <strong>7x de R$ 16,79 ou R$ 99 à vista</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={handleGoToHotmart}
                    className="btn-lebron w-full py-4 px-6 text-sm uppercase tracking-wide cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Ir para o Checkout Hotmart Agora</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* PIX Option */}
              {paymentMethod === 'pix' && (
                <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA] space-y-4">
                  <div className="text-center space-y-1">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider font-sora">
                      Valor com Desconto à Vista: R$ 99,00
                    </span>
                    <p className="text-xs text-neutral-500">
                      Abra o aplicativo do seu banco, escolha <strong>Pix Copia e Cola</strong> e cole o código:
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyPix}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Código Pix Copiado!' : 'Copiar Chave Pix Copia e Cola'}</span>
                  </button>

                  <form onSubmit={handleCompleteOrder} className="space-y-3 pt-2 border-t border-[#EAEAEA]">
                    <div className="text-xs font-semibold text-neutral-700">
                      Para onde devemos enviar seus dados de acesso?
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Seu Nome Completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DDD] text-xs text-neutral-900 focus:outline-none focus:border-[#FE7A80]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Seu Melhor E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DDD] text-xs text-neutral-900 focus:outline-none focus:border-[#FE7A80]"
                    />
                    <button
                      type="submit"
                      className="btn-lebron w-full py-3 px-4 text-xs sm:text-sm cursor-pointer"
                    >
                      Já Paguei / Confirmar Acesso Imediato
                    </button>
                  </form>
                </div>
              )}

              {/* Credit Card Option */}
              {paymentMethod === 'cartao' && (
                <form onSubmit={handleCompleteOrder} className="space-y-3 p-5 rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA]">
                  <div>
                    <label className="text-xs text-neutral-600 block mb-1">Nome Completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Nome impresso no cartão"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD] text-xs text-neutral-900 focus:outline-none focus:border-[#FE7A80]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-neutral-600 block mb-1">E-mail para receber o curso</label>
                    <input
                      type="email"
                      required
                      placeholder="seu-email@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD] text-xs text-neutral-900 focus:outline-none focus:border-[#FE7A80]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-neutral-600 block mb-1">Número do Cartão de Crédito</label>
                    <input
                      type="text"
                      required
                      placeholder="0000 0000 0000 0000"
                      maxLength={19}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD] text-xs font-mono text-neutral-900 focus:outline-none focus:border-[#FE7A80]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-neutral-600 block mb-1">Validade (MM/AA)</label>
                      <input
                        type="text"
                        required
                        placeholder="12/28"
                        maxLength={5}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD] text-xs font-mono text-neutral-900 focus:outline-none focus:border-[#FE7A80]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-neutral-600 block mb-1">CVV</label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD] text-xs font-mono text-neutral-900 focus:outline-none focus:border-[#FE7A80]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-neutral-600 block mb-1">Parcelamento</label>
                    <select
                      value={installments}
                      onChange={(e) => setInstallments(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD] text-xs text-neutral-900 focus:outline-none focus:border-[#FE7A80]"
                    >
                      <option value="1">1x de R$ 99,00 à vista</option>
                      <option value="7">7x de R$ 16,79 (recomendado)</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="btn-lebron w-full py-3.5 px-4 text-sm cursor-pointer mt-2"
                  >
                    Confirmar Pagamento Seguro
                  </button>
                </form>
              )}

              {/* Trust Footer */}
              <div className="pt-2 flex items-center justify-center gap-6 text-[11px] text-neutral-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Garantia 30 Dias
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#FE7A80]" /> Ambiente Criptografado
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
