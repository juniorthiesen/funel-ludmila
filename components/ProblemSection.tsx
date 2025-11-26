import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, BatteryWarning, Skull } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 px-[5%] bg-premium-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-red-500 text-sm uppercase tracking-[3px] mb-4 block font-bold">
            O Ciclo Vicioso da Medicina Tradicional
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-white max-w-4xl mx-auto leading-tight">
            "Dizem que é psicológico, mas a sua dor é real e <span className="text-premium-muted italic">tem uma causa biológica."</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-premium-text text-lg leading-relaxed mb-8 font-light">
              Você sente que toma cada vez mais remédios (antidepressivos, analgésicos, relaxantes), mas a dor sempre volta pior? Você acorda rígida como um robô, com "névoa mental" e uma fadiga que não passa?
            </p>
            <p className="text-premium-muted text-base leading-relaxed mb-8">
              A medicina tradicional apaga o incêndio (sintoma), mas não trata o foco (causa). Isso cria o que chamo de <strong>Bola de Neve da Fibromialgia</strong>:
            </p>
            
            <ul className="space-y-6">
              {[
                { 
                  icon: Skull,
                  title: "Intoxicação Hepática e Disbiose", 
                  text: "O excesso de química destrói a parede do seu intestino (Disbiose), impedindo a produção de serotonina (o hormônio do bem-estar e alívio da dor)." 
                },
                { 
                  icon: BatteryWarning,
                  title: "Mitocondriopatia (Falta de Bateria)", 
                  text: "Suas células estão sem energia (ATP). Por isso você sente esse cansaço extremo, como se sua bateria estivesse sempre em 1%." 
                },
                { 
                  icon: AlertCircle,
                  title: "Inflamação Sistêmica", 
                  text: "Seu corpo está inflamado. Enquanto não limparmos esse terreno biológico, nenhum remédio fará efeito duradouro." 
                }
              ].map((item, index) => (
                <li key={index} className="flex gap-4 items-start p-4 bg-white/5 rounded-sm border border-white/5 hover:border-red-500/30 transition-colors">
                  <div className="mt-1 text-red-500 shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <strong className="text-white block mb-1 font-heading">{item.title}</strong> 
                    <span className="text-premium-muted text-sm">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             <div className="absolute -inset-4 bg-red-900/20 blur-2xl rounded-full opacity-50"></div>
             <div className="relative border-l-4 border-red-600 pl-8 py-8 bg-black/40 backdrop-blur-md p-8 rounded-r-lg">
              <p className="font-heading text-2xl md:text-3xl font-medium text-white italic mb-6 leading-relaxed">
                "Remédios que curam não são rentáveis. A indústria quer você doente."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-red-600"></div>
                <p className="text-premium-muted text-xs tracking-widest uppercase">
                  Nobel de Medicina, Richard J. Roberts
                </p>
              </div>
              <p className="mt-6 text-premium-text text-sm font-light border-t border-white/10 pt-6">
                A Dra. Ludimila traz a verdade que muitos consultórios escondem: É possível viver sem dor, mas primeiro precisamos fazer um <strong>Desmame Inflamatório</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};