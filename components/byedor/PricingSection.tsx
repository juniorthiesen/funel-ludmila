import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/Button';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-[5%] bg-premium-secondary relative overflow-hidden">
      {/* Bg Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-premium-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Escolha seu kit de tratamento
          </h2>
          <p className="text-premium-muted">
            Invista na sua liberdade com condições exclusivas de lançamento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-end">

          {/* Kit 1 */}
          <div className="bg-premium-bg border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all order-2 md:order-1">
            <h3 className="text-white font-heading text-xl font-bold mb-2">1 Frasco</h3>
            <p className="text-premium-muted text-sm mb-6">Ideal para teste inicial</p>

            <div className="mb-6">
              <div className="text-sm text-premium-muted line-through">R$ 197,00</div>
              <div className="text-3xl font-bold text-white">R$ 149,90</div>
              <div className="text-xs text-premium-muted mt-1">À vista ou parcelado</div>
            </div>

            <Button className="w-full mb-6 text-xs" variant="outline">
              Comprar 1 Unidade
            </Button>

            <ul className="space-y-3 text-sm text-premium-muted">
              <li className="flex gap-2"><Check size={16} className="text-premium-gold" /> 30 Dias de Tratamento</li>
              <li className="flex gap-2"><Check size={16} className="text-premium-gold" /> Garantia de 30 dias</li>
              <li className="flex gap-2 opacity-50"><Check size={16} /> Frete (Consultar)</li>
            </ul>
          </div>

          {/* Kit 3 (Destaque) */}
          <div className="bg-[#1a1a1a] border border-premium-gold rounded-xl p-8 relative shadow-[0_0_40px_rgba(212,175,55,0.15)] transform md:-translate-y-4 order-1 md:order-2 flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-premium-gold to-yellow-400 text-black font-bold text-xs uppercase tracking-widest px-6 py-2 rounded-full whitespace-nowrap shadow-lg">
              OFERTA RECOMENDADA
            </div>

            <div className="mb-6 relative group">
              <div className="absolute inset-0 bg-premium-gold/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/images/byedor-3-potes.png"
                alt="Kit 3 Potes ByeDor"
                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h3 className="text-white font-heading text-2xl font-bold mb-1">Kit Potencializador</h3>
            <p className="text-premium-gold text-sm mb-4 font-medium">3 Meses de Tratamento ByeDor</p>

            <div className="bg-white/5 rounded-lg p-3 mb-6 border border-white/10">
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Grátis</span>
                <span className="text-white text-sm font-bold">eBook 10 Dias Sem Dor</span>
              </div>
              <p className="text-xs text-premium-muted leading-tight">
                O guia completo para acelerar seus resultados e viver sem dores.
              </p>
            </div>

            <div className="mb-6">
              <div className="text-sm text-premium-muted line-through">R$ 597,00</div>
              <div className="text-5xl font-bold text-white tracking-tight">R$ 389,00</div>
              <div className="text-sm text-green-400 font-bold mt-2">ou 12x de R$ 39,06</div>
            </div>

            <Button className="w-full mb-6 py-6 text-lg shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)]" pulse>
              <ShoppingCart size={20} className="mr-2" /> QUERO ALÍVIO AGORA
            </Button>

            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex gap-2 items-center"><Check size={18} className="text-premium-gold flex-shrink-0" /> <strong>Frete Grátis</strong> para todo Brasil</li>
              <li className="flex gap-2 items-center"><Check size={18} className="text-premium-gold flex-shrink-0" /> <strong>Bônus:</strong> eBook Exclusivo (R$ 97)</li>
              <li className="flex gap-2 items-center"><Check size={18} className="text-premium-gold flex-shrink-0" /> Acesso ao Grupo VIP</li>
              <li className="flex gap-2 items-center"><Check size={18} className="text-premium-gold flex-shrink-0" /> Garantia Blindada de 30 Dias</li>
            </ul>
          </div>

          {/* Kit 6 */}
          <div className="bg-premium-bg border border-white/10 rounded-xl p-8 hover:border-premium-purple/50 transition-all order-3">
            <div className="absolute top-0 right-0 bg-premium-purple/20 text-premium-purple text-xs font-bold px-3 py-1 rounded-bl-lg">
              Melhor Oferta
            </div>

            <h3 className="text-white font-heading text-xl font-bold mb-2">Leve 6 Frascos</h3>
            <p className="text-premium-muted text-sm mb-6">Tratamento Completo</p>

            <div className="mb-6">
              <div className="text-sm text-premium-muted line-through">R$ 894,00</div>
              <div className="text-3xl font-bold text-white">R$ 599,40</div>
              <div className="text-sm text-green-400 font-bold mt-1">R$ 99,90 cada</div>
            </div>

            <div className="bg-premium-purple/10 border border-premium-purple/20 rounded p-3 mb-6 text-center">
              <span className="text-premium-purple text-sm font-bold">Economize R$ 294,60</span>
            </div>

            <Button className="w-full mb-6" variant="outline">
              Comprar Máximo Desconto
            </Button>

            <ul className="space-y-3 text-sm text-premium-muted">
              <li className="flex gap-2"><Check size={16} className="text-premium-gold" /> <strong>Frete Grátis</strong></li>
              <li className="flex gap-2"><Check size={16} className="text-premium-gold" /> Menor preço por pote</li>
              <li className="flex gap-2"><Check size={16} className="text-premium-gold" /> Estoque Garantido</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-premium-muted flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Estoque limitado. Envio imediato para todo o Brasil.
          </p>
        </div>
      </div>
    </section>
  );
};