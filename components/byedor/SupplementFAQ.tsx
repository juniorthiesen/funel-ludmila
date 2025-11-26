import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  q: string;
  a: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex items-center justify-between text-left hover:text-premium-gold transition-colors">
                <span className="font-heading font-medium text-white text-lg">{q}</span>
                {isOpen ? <Minus size={20} className="text-premium-gold" /> : <Plus size={20} className="text-premium-muted" />}
            </button>
            {isOpen && <div className="pb-6 text-premium-muted font-light leading-relaxed pr-4">{a}</div>}
        </div>
    )
}

export const SupplementFAQ: React.FC = () => {
  const faqs = [
    {
        q: "Quanto tempo leva para sentir os primeiros resultados?",
        a: "A maioria das usuárias relata melhorias significativas na energia e sono nas primeiras 2 semanas. O alívio profundo das dores articulares geralmente é notado entre 3 a 4 semanas de uso contínuo, à medida que a inflamação sistêmica diminui."
    },
    {
        q: "O Bye Dor tem contraindicações?",
        a: "O Bye Dor é um suplemento natural. No entanto, gestantes, lactantes e pessoas com doenças graves preexistentes devem sempre consultar seu médico antes de iniciar qualquer suplementação."
    },
    {
        q: "Como devo tomar o Bye Dor?",
        a: "Recomendamos tomar 2 cápsulas por dia, preferencialmente pela manhã com água, para garantir a absorção ideal dos nutrientes e energia para o dia todo."
    },
    {
        q: "Posso tomar junto com outros medicamentos?",
        a: "Sim, a fórmula foi desenvolvida para ser segura. Porém, sempre recomendamos um intervalo de 1 hora entre o suplemento e seus medicamentos controlados para garantir a máxima absorção de ambos."
    },
    {
        q: "O produto é aprovado pela ANVISA?",
        a: "Sim! O Bye Dor é produzido em laboratório certificado com GMP (Boas Práticas de Fabricação) e segue rigorosamente todas as normas da ANVISA para suplementos alimentares."
    },
    {
        q: "Vocês oferecem garantia?",
        a: "Sim. Oferecemos uma garantia incondicional de 30 dias. Se você usar e não sentir diferença, devolvemos 100% do seu dinheiro. O risco é todo nosso."
    }
  ];

  return (
    <section className="py-24 px-[5%] bg-premium-bg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">Perguntas Frequentes</h2>
            <p className="text-premium-muted">Esclarecemos as principais dúvidas sobre o Bye Dor para que você se sinta segura.</p>
        </div>
        <div>
            {faqs.map((f, i) => <FAQItem key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
};