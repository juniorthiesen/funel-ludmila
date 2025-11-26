import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Heart } from 'lucide-react';

export const AuthoritySection: React.FC = () => {
  return (
    <section className="py-24 px-[5%] bg-[#0c0c0c] border-y border-white/5">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden group"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Moldura Decorativa */}
          <div className="absolute inset-0 border border-premium-gold/20 translate-x-3 translate-y-3 rounded-lg z-0 transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>

          {/* Imagem com Tratamento */}
          <img
            src="https://ludmilasimoes.com.br/wp-content/uploads/2025/03/ludmila-simoes-2.png"
            alt="Dra Ludmila Simões"
            className="absolute inset-0 w-full h-full object-cover object-top rounded-lg shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
          />

          {/* Gradiente Inferior para Legibilidade se houver texto sobreposto (opcional) */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block text-premium-gold text-sm uppercase tracking-[3px] mb-4 font-semibold">
            Autoridade Médica & Técnica
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6 text-white leading-tight">
            Dra. Ludmila Simões
          </h2>

          <div className="space-y-6 text-lg font-light text-premium-muted mb-8 leading-relaxed">
            <p>
              Nutricionista Clínica Funcional, Terapeuta Ortomolecular e Mentora de Mulheres. Com mais de <strong className="text-white font-medium">20 anos de experiência clínica</strong> e <strong className="text-white font-medium">9 Pós-Graduações</strong>, Dra. Ludmila se dedicou a estudar o que a medicina tradicional muitas vezes ignora.
            </p>
            <p>
              Ela cansou de ver mulheres ("Marias Guerreiras") sendo tratadas como se sua dor fosse psicológica, saindo dos consultórios apenas com receitas de antidepressivos e analgésicos que causam ganho de peso e mais depressão.
            </p>
            <p className="italic text-premium-purple border-l-2 border-premium-purple pl-6 py-2 bg-premium-purple/5 rounded-r-lg">
              "Minha missão é provar que a Fibromialgia não é uma sentença perpétua. É um pedido de socorro do seu corpo que precisa ser ouvido, não silenciado."
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div className="text-center lg:text-left">
              <div className="text-premium-gold mb-2 flex justify-center lg:justify-start"><Award size={24} /></div>
              <div className="text-2xl font-heading font-bold text-white">20</div>
              <div className="text-xs text-premium-muted uppercase tracking-wider">Anos de Clínica</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-premium-gold mb-2 flex justify-center lg:justify-start"><BookOpen size={24} /></div>
              <div className="text-2xl font-heading font-bold text-white">09</div>
              <div className="text-xs text-premium-muted uppercase tracking-wider">Pós-Graduações</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-premium-gold mb-2 flex justify-center lg:justify-start"><Heart size={24} /></div>
              <div className="text-2xl font-heading font-bold text-white">Mais de 6 mil</div>
              <div className="text-xs text-premium-muted uppercase tracking-wider">Vidas Transformadas</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};