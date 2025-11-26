import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Zap, HeartHandshake, Sparkles } from 'lucide-react';

export const BenefitsGrid: React.FC = () => {
  const features = [
    {
      icon: FlaskConical,
      title: "Ciência + Natureza",
      desc: "Fórmula com cúrcuma, magnésio, ácido málico, MSM, CoQ10 e colágeno tipo II."
    },
    {
      icon: Zap,
      title: "Transformação Real",
      desc: "Redução da dor, mais energia, clareza mental e mobilidade."
    },
    {
      icon: HeartHandshake,
      title: "Acolhimento",
      desc: "Desenvolvido por quem já viveu a dor. Uma solução que nasceu da experiência real."
    },
    {
      icon: Sparkles,
      title: "Saúde Completa",
      desc: "Cuidado integrado para corpo, mente e emoções."
    }
  ];

  return (
    <section className="py-20 px-[5%] bg-black border-y border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-white/5 rounded-2xl flex items-center justify-center text-premium-gold group-hover:bg-premium-gold group-hover:text-black transition-all duration-300">
                <feature.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-heading font-bold text-lg mb-3">{feature.title}</h3>
              <p className="text-premium-muted text-sm font-light leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-12 border-t border-white/10 pt-10 opacity-60">
            {["Fórmula exclusiva", "Vegano", "Cruelty-Free", "Feito no Brasil", "Mais vendido"].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 text-xs uppercase tracking-widest text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-premium-gold"></span>
                    {tag}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};