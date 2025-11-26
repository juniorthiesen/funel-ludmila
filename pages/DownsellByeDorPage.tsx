import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, ArrowRight, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const DownsellByeDorPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-premium-bg text-white font-sans pb-20">
            
            {/* STEPPER SIMPLIFICADO */}
            <div className="bg-white/5 border-b border-white/10 py-4 px-5 sticky top-0 z-50 backdrop-blur-md">
                <div className="max-w-4xl mx-auto flex justify-center">
                   <span className="text-xs font-bold uppercase tracking-wider text-premium-muted">
                       Etapa final de personalização do pedido
                   </span>
                </div>
            </div>

            <main className="max-w-3xl mx-auto px-5 pt-10">
                
                {/* MENSAGEM DE EMPATIA */}
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-8 text-center">
                    <AlertCircle size={32} className="text-yellow-500 mx-auto mb-3" />
                    <h2 className="text-xl font-bold text-white mb-2">Eu entendo perfeitamente...</h2>
                    <p className="text-sm text-premium-muted">
                        Investir em 3 frascos agora pode não ser o ideal para você. Mas eu me preocupo em deixar você sair daqui apenas com o alívio temporário, sem tratar a inflamação de dentro para fora.
                    </p>
                </div>

                {/* HEADLINE */}
                <div className="text-center mb-10">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-4 text-white">
                        Que tal levar apenas <span className="text-premium-gold">1 Frasco para Testar?</span>
                    </h1>
                    <p className="text-lg text-premium-muted leading-relaxed max-w-2xl mx-auto">
                        Garanta 30 dias de proteção e sinta a diferença no seu corpo. Se gostar (e eu sei que vai), você pede mais depois.
                    </p>
                </div>

                {/* CARD DE OFERTA DOWNSELL */}
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-10">
                    <div className="p-8 flex flex-col md:flex-row items-center gap-8">
                        
                        {/* IMAGEM MENOR */}
                        <div className="w-full md:w-1/3">
                            <img 
                                src="https://byedor.com.br/assets/product-2-bottles-RTF4qH7-.png" 
                                alt="1 Frasco Bye Dor"
                                className="w-full object-contain drop-shadow-2xl"
                            />
                        </div>

                        {/* DETALHES */}
                        <div className="w-full md:w-2/3">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-premium-gold text-black text-xs font-bold px-2 py-1 rounded uppercase">Última Chance</span>
                                <span className="text-xs text-premium-muted line-through">De R$ 197,00</span>
                            </div>
                            
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-white">R$ 149,90</span>
                                <span className="block text-sm text-green-400">Economia garantida de R$ 47,00</span>
                            </div>

                            <ul className="space-y-2 text-sm text-premium-muted mb-8">
                                <li className="flex items-center gap-2"><Check size={14} className="text-green-400"/> Tratamento para 30 dias</li>
                                <li className="flex items-center gap-2"><Check size={14} className="text-green-400"/> Fórmula completa (nada foi retirado)</li>
                                <li className="flex items-center gap-2"><Check size={14} className="text-green-400"/> Garantia de 30 dias mantida</li>
                            </ul>

                            <button className="w-full bg-transparent border-2 border-premium-gold text-premium-gold hover:bg-premium-gold hover:text-black font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 group">
                                <span>SIM, ADICIONAR APENAS 1 FRASCO</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* LINK DE RECUSA FINAL */}
                <div className="text-center">
                    <button 
                        onClick={() => window.location.href = '/upsell-protocolo'} 
                        className="text-sm text-white/30 hover:text-white transition-colors underline decoration-transparent hover:decoration-white"
                    >
                        Não, obrigado. Vou ficar apenas com o Protocolo 10 Dias e assumo o risco de não tratar a inflamação celular agora.
                    </button>
                </div>

            </main>
        </div>
    );
};
