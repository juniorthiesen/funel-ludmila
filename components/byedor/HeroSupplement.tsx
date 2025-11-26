import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Truck } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSupplement: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-[5%] overflow-hidden bg-gradient-to-b from-premium-bg to-premium-secondary">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-premium-gold">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-premium-muted text-xs font-medium uppercase tracking-wider">
                4.9/5 (1.247+ avaliações)
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
            Liberte-se da <br/>
            <span className="text-premium-gold">Fibromialgia</span>
          </h1>
          
          <p className="text-premium-muted text-lg font-light leading-relaxed mb-8 max-w-xl">
            Desperte cada manhã com energia renovada, clareza mental e a alegria de viver sem limitações. O <strong>#1 Produto para Fibromialgia no Brasil</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button href="#pricing" pulse className="w-full sm:w-auto px-8">
              Quero Me Libertar da Dor
            </Button>
            <Button href="#ingredients" variant="outline" className="w-full sm:w-auto px-8 bg-white/5 border-white/10 hover:bg-white/10">
              Ver Como Funciona
            </Button>
          </div>

          <div className="flex items-center gap-6 text-xs text-premium-muted/80 font-medium">
            <div className="flex items-center gap-2">
                <Truck size={16} className="text-premium-gold" /> Frete Grátis
            </div>
            <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-premium-gold" /> Garantia de 30 dias
            </div>
          </div>
        </motion.div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Glow Effect */}
          <div className="absolute w-[300px] h-[300px] bg-premium-gold/10 blur-[100px] rounded-full pointer-events-none" />
          
          {/* Mockup do Produto (Placeholder elegante) */}
          <div className="relative w-full max-w-[450px] aspect-square">
             <img 
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop" 
                alt="Bye Dor Supplement Kit"
                className="w-full h-full object-contain drop-shadow-2xl"
             />
             {/* Badge Flutuante */}
             <div className="absolute bottom-10 -left-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-xl">
                <span className="block text-2xl font-bold text-white mb-1">12.000+</span>
                <span className="text-xs text-premium-muted uppercase tracking-wider">Mulheres Transformadas</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};