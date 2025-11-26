import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Lock, ShieldCheck, CheckCircle } from 'lucide-react';

export const OfferSection: React.FC = () => {
  return (
    <section className="py-32 px-[5%] bg-gradient-to-b from-premium-secondary to-black text-center relative overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-premium-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-5xl font-semibold mb-6 text-white">
          Quanto custa sua liberdade da dor?
        </h2>
        <p className="text-premium-muted text-lg font-light mb-10 max-w-2xl mx-auto">
          Você provavelmente gasta mais de <strong>R$ 500,00 mensais</strong> em remédios que apenas intoxicam seu fígado. O protocolo de 10 dias custa menos que uma pizza.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-lg p-10 max-w-xl mx-auto backdrop-blur-md mb-12">
          <span className="text-premium-gold font-heading uppercase tracking-widest text-sm mb-4 block">Oferta Especial</span>
          
          <div className="flex justify-center items-end gap-4 mb-6">
            <span className="text-premium-muted text-xl line-through mb-2 relative top-[-5px]">
              R$ 197,00
            </span>
            <span className="text-6xl md:text-7xl font-heading font-bold text-white leading-none">
              R$ 97,00
            </span>
          </div>
          <p className="text-sm text-premium-muted mb-8">Pagamento único. Acesso imediato.</p>

          <Button 
            to="/quiz" 
            className="w-full mb-4 shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)]" 
            pulse
            hoverText="Sim, Quero Viver Sem Dor"
          >
            QUERO MEU PLANO DE RECUPERAÇÃO
          </Button>

          <div className="flex flex-col gap-2 text-xs text-premium-muted/80 mt-4">
            <p className="flex items-center justify-center gap-2">
              <Lock size={12} /> Ambiente 100% Seguro e Criptografado
            </p>
            <p className="flex items-center justify-center gap-2">
              <CheckCircle size={12} /> Receba o acesso por e-mail agora mesmo
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 border-t border-white/10 pt-10">
          <div className="flex flex-col items-center">
            <ShieldCheck size={32} className="text-premium-gold mb-3" />
            <h4 className="text-white font-bold mb-1">Garantia Blindada</h4>
            <p className="text-xs text-premium-muted">7 Dias para testar. Se não gostar, devolvemos cada centavo.</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle size={32} className="text-premium-gold mb-3" />
            <h4 className="text-white font-bold mb-1">Acesso Vitalício</h4>
            <p className="text-xs text-premium-muted">O material é seu para sempre. Consulte quando quiser.</p>
          </div>
          <div className="flex flex-col items-center">
            <Lock size={32} className="text-premium-gold mb-3" />
            <h4 className="text-white font-bold mb-1">Compra Segura</h4>
            <p className="text-xs text-premium-muted">Seus dados protegidos com a mais alta tecnologia.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};