import React from 'react';
import { ShieldCheck, Truck, Lock, RefreshCw } from 'lucide-react';

export const GuaranteeBadge: React.FC = () => {
  return (
    <section className="py-16 px-[5%] bg-white/5 border-y border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-white">Sua Compra 100% Protegida</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
                <ShieldCheck size={40} className="text-premium-gold mb-4" />
                <h3 className="text-white font-bold mb-2">Garantia de 30 Dias</h3>
                <p className="text-sm text-premium-muted">Se não ficar satisfeita, devolvemos 100% do seu dinheiro sem perguntas.</p>
            </div>
            <div className="flex flex-col items-center">
                <Truck size={40} className="text-premium-gold mb-4" />
                <h3 className="text-white font-bold mb-2">Frete Grátis</h3>
                <p className="text-sm text-premium-muted">Entrega gratuita para todo o Brasil nos kits de 3 e 6 unidades.</p>
            </div>
            <div className="flex flex-col items-center">
                <Lock size={40} className="text-premium-gold mb-4" />
                <h3 className="text-white font-bold mb-2">Pagamento Seguro</h3>
                <p className="text-sm text-premium-muted">Transações protegidas com criptografia SSL de ponta.</p>
            </div>
            <div className="flex flex-col items-center">
                <RefreshCw size={40} className="text-premium-gold mb-4" />
                <h3 className="text-white font-bold mb-2">Troca Facilitada</h3>
                <p className="text-sm text-premium-muted">Processo simples de troca em caso de qualquer problema.</p>
            </div>
        </div>
      </div>
    </section>
  );
};