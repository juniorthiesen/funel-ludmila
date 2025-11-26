import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`border-b border-white/10 ${isOpen ? 'bg-white/[0.02]' : 'bg-transparent'} transition-colors duration-300`}
    >
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between gap-4 text-left hover-trigger group focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className={`font-heading font-medium text-lg transition-colors duration-300 ${isOpen ? 'text-premium-gold' : 'text-white group-hover:text-premium-gold/80'}`}>
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-premium-gold bg-premium-gold text-black' : 'border-white/20 text-white/50 group-hover:border-white/50 group-hover:text-white'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-premium-muted font-light leading-relaxed pr-8">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "O método serve para quem não tem diagnóstico fechado?",
      answer: "Sim. O protocolo foca em desinflamar o corpo e tratar a DOR crônica. Se você sente dores difusas, cansaço extremo e rigidez, seu corpo está pedindo socorro e precisa desse 'resgate biológico', independente do nome da doença."
    },
    {
      question: "Vou precisar parar de tomar meus remédios?",
      answer: "NÃO pare nenhuma medicação por conta própria. O objetivo dos 10 dias é limpar seu organismo para que, com o tempo e acompanhamento médico, seu corpo precise cada vez menos de química. Chamamos isso de 'Desmame Natural' pela melhora clínica."
    },
    {
      question: "Tenho diabetes/hipertensão, posso seguir o cardápio?",
      answer: "Com certeza. O cardápio é anti-inflamatório e baseado em comida de verdade (baixo índice glicêmico). Ele é excelente não só para dor, mas para controle de diabetes e pressão alta."
    },
    {
      question: "Vou passar fome com essa alimentação?",
      answer: "De jeito nenhum. Você vai comer comida de verdade (raízes, proteínas, gorduras boas). O foco é nutrir suas células, não contar calorias. A maioria das alunas relata que a compulsão por doces desaparece no 3º dia."
    },
    {
      question: "Como recebo o material?",
      answer: "Imediatamente após a aprovação do pagamento, você receberá um e-mail da plataforma segura com seu login e senha para acessar a área de membros onde todo o material (E-books, guias e bônus) estará disponível para download."
    },
    {
      question: "E se eu não gostar?",
      answer: "Você tem 7 dias de Garantia Incondicional. Se você achar que o material não é para você, basta enviar um único e-mail e devolvemos 100% do seu dinheiro. O risco é todo nosso."
    }
  ];

  return (
    <section className="py-24 px-[5%] bg-premium-bg relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-premium-muted text-xs uppercase tracking-[3px] mb-3 block">
            Tire suas dúvidas
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {/* Footer Simples Integrado */}
        <div className="mt-24 pt-8 border-t border-white/5 text-center">
          <p className="text-premium-muted text-sm mb-4">
            &copy; {new Date().getFullYear()} Dra. Ludimila Simões. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 text-xs text-white/30 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
          </div>
          <p className="mt-8 text-[10px] text-white/10 max-w-xl mx-auto leading-relaxed">
            Este produto não substitui o parecer médico profissional. Sempre consulte um médico para tratar de assuntos relativos à saúde. Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </div>
    </section>
  );
};