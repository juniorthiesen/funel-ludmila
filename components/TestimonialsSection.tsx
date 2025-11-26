import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Check, Quote } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: "Cláudia Martins",
    age: "42 anos",
    handle: "@claudinha.martins",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
    text: "Eu não acreditava que em 10 dias sentiria tanta diferença. O 'Shot da Dor' virou meu ritual sagrado. Acordo sem aquela rigidez nas costas e consegui reduzir o remédio de dor de cabeça.",
    verified: true
  },
  {
    id: 2,
    name: "Ana Beatriz",
    age: "38 anos",
    handle: "@anabea_fl",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    text: "Já tinha tentado de tudo, remédios caros e fisioterapia. O método da Dra. Ludimila é simples e vai na raiz. Meu intestino desinchou muito e a 'névoa mental' sumiu.",
    verified: true
  },
  {
    id: 3,
    name: "Patrícia Gomes",
    age: "55 anos",
    handle: "@paty.gomes55",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=1886&auto=format&fit=crop",
    text: "O manual do sono foi um divisor de águas. Voltei a dormir a noite toda e isso diminuiu minhas dores em 80%. Gratidão por me devolver a vida!",
    verified: true
  },
  {
    id: 4,
    name: "Roberta Silva",
    age: "47 anos",
    handle: "@betasilva.rio",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    text: "Achei que passaria fome, mas o cardápio é delicioso. Em 5 dias minha disposição era outra. Até meu marido notou a diferença no meu humor.",
    verified: true
  },
  {
    id: 5,
    name: "Fernanda Lima",
    age: "50 anos",
    handle: "@nanda.viverbem",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop",
    text: "Só de economizar na farmácia esse curso já se pagou 10 vezes. Estou me sentindo leve, desinflamada e finalmente fui ouvida e compreendida.",
    verified: true
  }
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Resize logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Infinite loop logic:
  // We cycle the index. When rendering, we use module arithmetic to wrap around.
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Get visible items based on circular index
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % testimonialsData.length;
      items.push(testimonialsData[index]);
    }
    return items;
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]); 

  return (
    <section className="py-24 px-[5%] bg-premium-bg relative border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={20} className="fill-premium-gold text-premium-gold" />
            ))}
            <span className="ml-2 font-bold text-xl text-white">5.0</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-3">
            O que nossas alunas dizem
          </h2>
          <p className="text-premium-muted text-lg font-light">
            Mais de 1.200 mulheres recuperaram a qualidade de vida
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Desktop Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black border border-white/10 text-white flex items-center justify-center hover:border-premium-gold hover:text-premium-gold transition-colors shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black border border-white/10 text-white flex items-center justify-center hover:border-premium-gold hover:text-premium-gold transition-colors shadow-lg"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode='popLayout'>
              {getVisibleItems().map((item, idx) => (
                <motion.div
                  key={`${item.id}-${currentIndex}`} // Unique key forces re-render for animation
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full"
                >
                  <div className="h-full bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all hover:border-premium-gold/30 hover:bg-white/[0.08]">
                    
                    {/* Profile */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-white text-sm md:text-base">{item.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-premium-muted mt-0.5">
                          <span>{item.age}</span>
                          <span className="w-1 h-1 rounded-full bg-premium-muted/50"></span>
                          <span className="opacity-70 truncate max-w-[100px]">{item.handle}</span>
                        </div>
                        <div className="flex gap-0.5 mt-1">
                           {[1, 2, 3, 4, 5].map((s) => (
                             <Star key={s} size={10} className="fill-premium-gold text-premium-gold" />
                           ))}
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="relative mb-6 flex-grow">
                      <Quote className="absolute -top-2 -left-1 text-white/5 w-8 h-8 rotate-180" fill="currentColor" />
                      <p className="text-premium-muted text-sm leading-relaxed relative z-10 pl-2">
                        "{item.text}"
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-xs font-medium text-white hover:text-premium-gold cursor-pointer transition-colors">
                        Ler mais
                      </span>
                      {item.verified && (
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                          <Check size={10} className="text-green-400 stroke-[3]" />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-green-400">Verificado</span>
                        </div>
                      )}
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-premium-gold w-6' : 'bg-white/20 w-1.5'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};