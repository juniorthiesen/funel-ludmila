import React from 'react';
import { Star, Check } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  age: string;
  location: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, age, location, text }) => (
    <div className="bg-white/5 border border-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
        <div className="flex gap-1 text-premium-gold mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
        </div>
        <p className="text-white/90 text-sm italic mb-6 leading-relaxed">"{text}"</p>
        <div className="flex justify-between items-end border-t border-white/5 pt-4">
            <div>
                <h4 className="text-white font-bold text-sm">{name}</h4>
                <p className="text-premium-muted text-xs">{age}, {location}</p>
            </div>
            <div className="flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded">
                <Check size={10} className="text-green-400" />
                <span className="text-[10px] text-green-400 font-bold uppercase">Verificado</span>
            </div>
        </div>
    </div>
)

export const SupplementTestimonials: React.FC = () => {
    const reviews = [
        {
            name: "Maria Santos",
            age: "42 anos",
            location: "São Paulo",
            text: "Depois de 8 anos sofrendo com fibromialgia, finalmente encontrei algo que realmente funciona. Em 3 semanas, minha dor diminuiu 70% e voltei a ter energia."
        },
        {
            name: "Ana Cristina",
            age: "38 anos",
            location: "Rio de Janeiro",
            text: "Os ingredientes naturais do Bye Dor fizeram toda a diferença. Não sinto mais aquela rigidez matinal terrível e consigo dormir a noite toda."
        },
        {
            name: "Fernanda Lima",
            age: "45 anos",
            location: "Belo Horizonte",
            text: "Estava cética no início, mas os resultados me surpreenderam. A névoa mental desapareceu, as dores diminuíram drasticamente e voltei a trabalhar normalmente."
        },
        {
            name: "Carla Mendes",
            age: "51 anos",
            location: "Porto Alegre",
            text: "Uso Bye Dor há 4 meses e posso dizer que minha vida mudou completamente. Voltei a fazer exercícios, sair com as amigas e ter disposição."
        },
        {
            name: "Juliana Costa",
            age: "35 anos",
            location: "Salvador",
            text: "O que mais me impressiona no Bye Dor é como ele atua em múltiplos aspectos da fibromialgia. Não é só a dor que diminui, mas também a fadiga."
        },
        {
            name: "Patrícia Oliveira",
            age: "48 anos",
            location: "Brasília",
            text: "Recomendo Bye Dor para todas as mulheres que, como eu, estavam perdendo a esperança. Em 2 meses de uso, consegui reduzir significativamente meus medicamentos."
        }
    ];

  return (
    <section className="py-24 px-[5%] bg-black border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-white mb-2">O que nossas clientes dizem</h2>
            <p className="text-premium-muted">Mais de 12.000 mulheres aprovam os resultados</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => <TestimonialCard key={i} {...r} />)}
        </div>
      </div>
    </section>
  );
};