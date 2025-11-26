import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, UtensilsCrossed, Zap, BookOpen } from 'lucide-react';

const ModuleCard = ({ icon: Icon, title, subtitle, description, delay }: { icon: any, title: string, subtitle: string, description: string, delay: number }) => (
  <motion.div 
    className="bg-[#0f0f0f] border border-white/5 p-8 hover-trigger group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-premium-gold/40"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="absolute top-0 right-0 w-20 h-20 bg-premium-gold/5 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-premium-gold/10"></div>
    
    <div className="mb-6 text-premium-gold bg-premium-gold/10 w-14 h-14 flex items-center justify-center rounded-lg">
      <Icon size={28} strokeWidth={1.5} />
    </div>
    
    <h4 className="text-premium-purple text-xs uppercase tracking-wider font-bold mb-2">{subtitle}</h4>
    <h3 className="font-heading text-xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-premium-muted font-light text-sm leading-relaxed border-t border-white/5 pt-4">
      {description}
    </p>
  </motion.div>
);

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 px-[5%] bg-premium-bg relative">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-premium-gold text-sm uppercase tracking-[3px] mb-4 block">
            O Método 3A Simplificado
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold mb-6 text-white">
            Seu Kit de Primeiros Socorros Natural
          </h2>
          <p className="text-premium-muted text-lg font-light">
            Não é apenas um e-book. É um protocolo prático de <strong>10 dias</strong> para limpar o terreno biológico, desinflamar e devolver a função das suas células.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ModuleCard 
            icon={Droplets}
            subtitle="O Segredo Matinal"
            title='O "Shot da Dor"'
            description="A receita exata do composto bioativo (Cúrcuma + Gengibre + Limão) nas proporções corretas para desligar a inflamação sistêmica logo pela manhã."
            delay={0}
          />
          <ModuleCard 
            icon={UtensilsCrossed}
            subtitle="Nutrição Funcional"
            title="Cardápio Terapêutico"
            description="10 dias de café, almoço e jantar planejados para retirar glúten, leite e açúcar sem passar fome. Inclui Lista de Substituição Inteligente."
            delay={0.1}
          />
          <ModuleCard 
            icon={Zap}
            subtitle="Energia Celular"
            title="Suplementação Estratégica"
            description="Aprenda a usar o Magnésio e Própolis para reparar o intestino permeável e aumentar a produção natural de serotonina e ATP."
            delay={0.2}
          />
          <ModuleCard 
            icon={BookOpen}
            subtitle="Bônus Exclusivo"
            title="Manual do Sono Reparador"
            description="Técnicas simples de higiene do sono para combater a insônia e garantir que seus tecidos se regenerem durante a noite."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};