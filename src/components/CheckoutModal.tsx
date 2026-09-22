import React, { useState } from 'react';
import { CheckoutFormData, PaymentMethod } from '../types';
import { X, ShieldCheck, Lock, QrCode, CreditCard, CheckCircle2, Copy, Sparkles, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessEnrollment: (studentName: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  onSuccessEnrollment
}) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('pix');
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    email: '',
    phone: '',
    cpf: '',
    paymentMethod: 'pix'
  });
  const [copiedPix, setCopiedPix] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const pixCopyCode = "00020126580014br.gov.bcb.pix0136inprotec-gps-97@pix.com.br520400005303986540597.005802BR5922INPROTEC TREINAMENTOS6009SAO PAULO62070503***6304E8A9";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setIsCompleted(true);
    onSuccessEnrollment(formData.fullName || 'NOVO OPERADOR');
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCopyCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border-2 border-emerald-500 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold font-tech text-sm">
              GPS
            </div>
            <div>
              <h3 className="font-tech text-lg font-bold text-white">Matrícula no Treinamento</h3>
              <p className="text-xs text-emerald-400 font-mono">Curso de GPS e Piloto Automático na Prática</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {isCompleted ? (
            /* Success Screen */
            <div className="text-center space-y-6 py-6">
              <div className="w-20 h-20 rounded-full bg-emerald-100 border-2 border-emerald-600 flex items-center justify-center mx-auto text-emerald-700 animate-bounce">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full border border-emerald-300 font-bold">MATRÍCULA CONFIRMADA!</span>
                <h2 className="font-tech text-2xl sm:text-3xl font-bold text-slate-900">Parabéns, Operador!</h2>
                <p className="text-slate-700 text-sm max-w-md mx-auto">
                  Sua inscrição foi aprovada. Seu acesso às aulas do treinamento já foi liberado no seu e-mail.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left font-mono text-xs space-y-1.5 text-slate-700">
                <div>ALUNO: <strong className="text-emerald-800">{formData.fullName.toUpperCase()}</strong></div>
                <div>E-MAIL: <strong className="text-slate-900">{formData.email}</strong></div>
                <div>VALOR PAGO: <strong className="text-emerald-700">R$ 97,00 (Pagamento Único)</strong></div>
                <div>CARTEIRINHA: <strong className="text-emerald-800">LIBERADA EM 'QUALIFICAÇÃO'</strong></div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-tech text-lg shadow-xl uppercase tracking-wide cursor-pointer"
              >
                ACESSAR MINHAS AULAS AGORA
              </button>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Order Summary box */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-sm">
                <div>
                  <div className="font-tech font-bold text-slate-900">Curso Completo + Carteirinha + Certificado</div>
                  <div className="text-xs text-slate-600">Acesso imediato • 7 dias de garantia</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 line-through">R$ 297</div>
                  <div className="font-tech text-xl font-extrabold text-emerald-700">R$ 97,00</div>
                </div>
              </div>

              {/* Personal Info inputs */}
              <div className="space-y-3">
                <label className="block text-xs font-mono text-emerald-800 uppercase tracking-wider font-bold">1. Seus Dados de Acesso</label>
                
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Nome Completo do Operador *"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-emerald-600 text-sm font-sans text-slate-900 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    placeholder="E-mail principal *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-emerald-600 text-sm font-sans text-slate-900 outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp / Telefone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-emerald-600 text-sm font-sans text-slate-900 outline-none"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3">
                <label className="block text-xs font-mono text-emerald-800 uppercase tracking-wider font-bold">2. Escolha a Forma de Pagamento</label>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      paymentMethod === 'pix'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-bold'
                        : 'bg-white border-slate-200 text-slate-600'
                    }`}
                  >
                    <QrCode className="w-5 h-5 text-emerald-700" />
                    <span className="font-tech text-sm">PIX (Instantâneo)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('credit_card')}
                    className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      paymentMethod === 'credit_card'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-bold'
                        : 'bg-white border-slate-200 text-slate-600'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-emerald-700" />
                    <span className="font-tech text-sm">Cartão de Crédito</span>
                  </button>
                </div>
              </div>

              {/* PIX Details */}
              {paymentMethod === 'pix' && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-center">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                    Desconto de R$ 200,00 aplicado via PIX
                  </div>

                  <div className="flex flex-col items-center justify-center p-3 bg-white rounded-xl max-w-[180px] mx-auto border-2 border-emerald-500 shadow-sm">
                    <QrCode className="w-32 h-32 text-slate-900" />
                    <span className="text-[10px] text-slate-900 font-mono font-bold mt-1">QR CODE PIX OFICIAL</span>
                  </div>

                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-100 border border-emerald-300 hover:border-emerald-500 text-emerald-900 font-mono text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Copy className="w-4 h-4 text-emerald-700" />
                      {copiedPix ? 'CÓDIGO PIX COPIADO!' : 'COPIAR CÓDIGO PIX COPIA E COLA'}
                    </button>
                  </div>
                </div>
              )}

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-lg shadow-xl shadow-emerald-600/20 transition-all font-tech uppercase tracking-wide cursor-pointer flex items-center justify-center gap-2"
              >
                <span>CONCLUIR MINHA MATRÍCULA (R$ 97,00)</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-mono">
                <Lock className="w-3.5 h-3.5 text-emerald-700" />
                <span>Ambiente Seguro com Criptografia SSL 256-bit</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};

