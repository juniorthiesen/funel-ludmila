import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center animate-zoom-effect"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop')` 
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center max-w-5xl px-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="inline-block py-1 px-3 border border-premium-gold/30 rounded-full bg-black/30 backdrop-blur-sm text-premium-gold text-xs md:text-sm uppercase tracking-[3px] mb-6">
          Protocolo de Emergência para Fibromialgia
        </span>
        <h1 className="font-heading font-semibold text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-6 text-white">
          RESGATE SUA VIDA DA DOR EM <span className="text-premium-purple italic">APENAS 10 DIAS</span>
        </h1>
        <p className="text-premium-muted text-lg md:text-xl font-light max-w-3xl mx-auto mb-10 leading-relaxed">
          Você não precisa aprender a "conviver com a dor". <br className="hidden md:block" />
          Descubra como limpar o <strong>incêndio inflamatório</strong> nas suas células, restaurar sua energia mitocondrial e voltar a dormir bem — sem depender de mais remédios.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button to="/quiz" pulse className="w-full md:w-auto">
            Quero Desinflamar Meu Corpo
          </Button>
          <p className="text-xs text-premium-muted uppercase tracking-widest mt-4 md:mt-0 md:ml-6">
            <span className="text-premium-gold">✓</span> Método 100% Natural
          </p>
        </div>
      </motion.div>
    </section>
  );
};