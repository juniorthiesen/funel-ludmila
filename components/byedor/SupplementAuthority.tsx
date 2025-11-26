import React from 'react';

export const SupplementAuthority: React.FC = () => {
  return (
    <section className="py-24 px-[5%] bg-premium-secondary">
      <div className="max-w-[1000px] mx-auto grid md:grid-cols-12 gap-12 items-center">
        
        <div className="md:col-span-5 relative group">
            <div className="absolute inset-0 bg-premium-gold translate-x-2 translate-y-2 rounded-lg transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
            <img 
                src="https://ludmilasimoes.com.br/wp-content/uploads/2025/03/ludmila-simoes-2.png" 
                alt="Dra Ludimila" 
                className="relative z-10 w-full rounded-lg shadow-xl grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 object-cover h-[450px]"
            />
        </div>

        <div className="md:col-span-7">
            <span className="text-premium-gold text-xs uppercase tracking-[2px] font-bold mb-2 block">Conheça a Especialista</span>
            <h2 className="font-heading text-4xl font-bold text-white mb-4">Dra. Ludimila Simões</h2>
            <p className="text-premium-purple text-sm font-medium mb-6 bg-premium-purple/10 inline-block px-3 py-1 rounded-full">Nutricionista Especialista em Fibromialgia • CRN 2292</p>
            
            <div className="space-y-4 text-premium-muted text-base leading-relaxed font-light mb-8">
                <p>
                    Por trás do Bye Dor está uma profissional que entende sua dor de verdade. Com mais de 20 anos de experiência, Dra. Ludimila criou um programa revolucionário que já transformou a vida de mais de 12.000 mulheres.
                </p>
                <p>
                    O diferencial é único: além da vasta experiência, ela combina ciência e empatia real em cada fórmula, garantindo que você receba não apenas um suplemento, mas um pedaço de cuidado genuíno.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                <div className="bg-white/5 rounded p-3 text-center hover:bg-white/10 transition-colors">
                    <div className="text-2xl font-bold text-white">20+</div>
                    <div className="text-[10px] uppercase text-premium-muted font-bold mt-1">Anos de Exp.</div>
                </div>
                <div className="bg-white/5 rounded p-3 text-center hover:bg-white/10 transition-colors">
                    <div className="text-2xl font-bold text-white">12K+</div>
                    <div className="text-[10px] uppercase text-premium-muted font-bold mt-1">Pacientes</div>
                </div>
                <div className="bg-white/5 rounded p-3 text-center hover:bg-white/10 transition-colors">
                    <div className="text-2xl font-bold text-white">89%</div>
                    <div className="text-[10px] uppercase text-premium-muted font-bold mt-1">Melhoria</div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};