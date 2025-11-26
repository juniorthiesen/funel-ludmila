import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface IngredientCardProps {
  name: string;
  dose: string;
  desc: string;
  benefits: string[];
  stat: string;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ name, dose, desc, benefits, stat }) => (
  <div className="bg-premium-secondary border border-white/5 rounded-sm p-8 hover:border-premium-gold/30 transition-colors">
    <div className="flex justify-between items-start mb-4">
      <h3 className="font-heading text-xl font-bold text-white">{name}</h3>
      <span className="bg-premium-gold/10 text-premium-gold text-xs font-bold px-3 py-1 rounded-full border border-premium-gold/20">
        {dose}
      </span>
    </div>
    <p className="text-premium-muted text-sm mb-6 min-h-[40px]">{desc}</p>
    
    <ul className="space-y-2 mb-6">
      {benefits.map((benefit, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-white/80 font-light">
          <CheckCircle2 size={14} className="text-premium-gold mt-1 shrink-0" />
          {benefit}
        </li>
      ))}
    </ul>
    
    <div className="bg-black/30 p-3 rounded border border-white/5 text-xs text-premium-muted italic">
      📊 {stat}
    </div>
  </div>
);

export const IngredientsSection: React.FC = () => {
  const ingredients = [
    {
      name: "Cúrcuma (Curcumina)",
      dose: "500mg",
      desc: "Potente anti-inflamatório natural que reduz a dor e inflamação articular.",
      benefits: ["Reduz inflamação sistêmica", "Alivia dores articulares", "Antioxidante poderoso"],
      stat: "Mais de 3.000 estudos científicos comprovam sua eficácia"
    },
    {
      name: "Magnésio Glicina",
      dose: "400mg",
      desc: "Forma altamente absorvível que relaxa músculos e melhora a qualidade do sono.",
      benefits: ["Relaxamento muscular profundo", "Reduz câimbras e espasmos", "Combate a fadiga crônica"],
      stat: "Estudos mostram 70% de melhoria na qualidade do sono"
    },
    {
      name: "Ácido Málico",
      dose: "800mg",
      desc: "Aumenta a produção de energia celular e reduz a fadiga característica da fibromialgia.",
      benefits: ["Aumenta energia celular (ATP)", "Melhora função muscular", "Acelera recuperação"],
      stat: "Redução de 48% na fadiga em estudos clínicos"
    },
    {
      name: "MSM",
      dose: "1000mg",
      desc: "Composto de enxofre orgânico que reduz inflamação e suporta a saúde das articulações.",
      benefits: ["Anti-inflamatório natural", "Reduz rigidez matinal", "Melhora flexibilidade"],
      stat: "83% dos usuários relatam redução significativa da dor"
    },
    {
      name: "Coenzima Q10",
      dose: "100mg",
      desc: "Antioxidante celular que melhora a produção de energia e clareza mental.",
      benefits: ["Aumenta energia mitocondrial", "Melhora clareza mental", "Fortalece sistema imune"],
      stat: "Melhoria de 60% na energia e concentração"
    },
    {
      name: "Colágeno Tipo II",
      dose: "40mg",
      desc: "Protege e regenera cartilagem articular, reduzindo dor e inflamação.",
      benefits: ["Regenera cartilagem", "Reduz dor articular", "Melhora mobilidade"],
      stat: "Redução de 40% na dor articular em 90 dias"
    }
  ];

  return (
    <section id="ingredients" className="py-24 px-[5%] bg-premium-bg">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-premium-gold text-sm uppercase tracking-[3px] font-bold mb-3 block">
            Fórmula Científica Avançada
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Cada miligrama foi pensada para o seu alívio
          </h2>
          <p className="text-premium-muted font-light">
            Cada ingrediente foi cuidadosamente selecionado e dosado com base em mais de 50 estudos científicos para máxima eficácia no combate à fibromialgia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((ing, idx) => (
            <IngredientCard key={idx} {...ing} />
          ))}
        </div>
      </div>
    </section>
  );
};