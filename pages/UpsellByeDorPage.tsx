import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Shield, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const UpsellByeDorPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-premium-bg text-white font-sans selection:bg-purple-500 selection:text-white pb-20">
            
            {/* STEPPER / BARRA DE PROGRESSO */}
            <div className="bg-white/5 border-b border-white/10 py-4 px-5 sticky top-0 z-50 backdrop-blur-md">
                <div className="max-w-4xl mx-auto flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-2 text-green-500 opacity-50">
                        <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center">✓</div>
                        <span className="hidden sm:inline">Passo 1: Protocolo</span>
                    </div>
                    <div className="flex items-center gap-2 text-premium-gold animate-pulse">
                        <div className="w-5 h-5 rounded-full bg-premium-gold text-black flex items-center justify-center">2</div>
                        <span>Passo 2: Aceleração</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center">3</div>
                        <span className="hidden sm:inline">Passo 3: Conclusão</span>
                    </div>
                </div>
            </div>

            <main className="max-w-3xl mx-auto px-5 pt-10">
                
                {/* ALERTA DE PEDIDO */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-10 flex items-center gap-3 text-green-400 text-sm font-bold">
                    <Check size={18} />
                    <span>SUCESSO! O Protocolo 10 Dias foi reservado. Não feche esta página.</span>
                </div>

                {/* HEADLINE */}
                <div className="text-center mb-10">
                    <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-4 text-white">
                        ESPERE! Seu tratamento pode ser <br/>
                        <span className="text-purple-400">3x Mais Rápido</span>
                    </h1>
                    <p className="text-lg text-premium-muted leading-relaxed max-w-2xl mx-auto">
                        Você já tem o mapa para sair da crise. Mas e se você pudesse dar ao seu corpo os tijolos exatos para reconstruir o que a dor destruiu?
                    </p>
                </div>

                {/* CARD DE OFERTA (VÍDEO DE VENDAS OU IMAGEM SERIA AQUI) */}
                <div className="bg-premium-secondary border border-purple-500/30 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(168,85,247,0.15)] mb-10">
                    
                    <div className="bg-purple-900/30 p-3 text-center text-xs font-bold text-purple-200 uppercase tracking-widest border-b border-purple-500/20">
                        Oferta Exclusiva Para Novos Alunos
                    </div>

                    <div className="p-8 md:p-10">
                        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                            {/* IMAGEM PRODUTO */}
                            <div className="w-full md:w-1/2 relative">
                                <div className="absolute inset-0 bg-purple-500/20 blur-[50px] rounded-full"></div>
                                <img 
                                    src="https://byedor.com.br/assets/product-3-bottles-DRFSjhfG.png" 
                                    alt="Kit 3 Frascos Bye Dor"
                                    className="relative z-10 w-full object-contain hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
                                    + EBOOK GRÁTIS
                                </div>
                            </div>

                            {/* BENEFÍCIOS */}
                            <div className="w-full md:w-1/2">
                                <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                                    Combo Aceleração Total
                                    <span className="block text-sm font-normal text-purple-300 mt-1">3 Meses de Tratamento + Bônus</span>
                                </h3>
                                <ul className="space-y-3 text-sm text-premium-muted mb-6">
                                    <li className="flex items-start gap-2">
                                        <Check size={16} className="text-green-400 mt-0.5 shrink-0" />
                                        <span><strong>Reposição de Magnésio e Cúrcuma:</strong> O combustível que suas células pedem.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check size={16} className="text-green-400 mt-0.5 shrink-0" />
                                        <span><strong>Sono Reparador:</strong> Acorde descansada de verdade.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check size={16} className="text-green-400 mt-0.5 shrink-0" />
                                        <span><strong>Frete Grátis</strong> para todo o Brasil.</span>
                                    </li>
                                </ul>

                                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                                    <span className="text-xs text-premium-muted uppercase block mb-1">Preço Normal: <span className="line-through decoration-red-500">R$ 447,00</span></span>
                                    <div className="flex items-end gap-2">
                                        <span className="text-3xl font-bold text-white">R$ 389,00</span>
                                        <span className="text-sm text-green-400 mb-1 font-bold">ou 12x de R$ 39,05</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BOTÕES DE AÇÃO */}
                        <div className="space-y-4">
                            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-6 rounded-xl text-lg md:text-xl shadow-[0_4px_0_rgb(21,128,61)] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center gap-2 group">
                                <span>SIM, ADICIONAR AO MEU PEDIDO</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            
                            <p className="text-center text-xs text-premium-muted">
                                <Shield size={12} className="inline mr-1" />
                                Compra segura em 1 clique. Será cobrado no mesmo cartão.
                            </p>

                            <button 
                                onClick={() => window.location.href = '/downsell-byedor'} 
                                className="w-full text-center text-sm text-white/40 hover:text-white transition-colors py-2 underline decoration-white/20 hover:decoration-white"
                            >
                                Não, obrigado. Entendo que a recuperação será mais lenta sem a suplementação.
                            </button>
                        </div>
                    </div>
                </div>

                {/* REFORÇO DE AUTORIDADE */}
                <div className="flex items-center justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><Clock size={24}/></div>
                        <span className="text-xs font-bold">Envio Imediato</span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><Shield size={24}/></div>
                        <span className="text-xs font-bold">Garantia Blindada</span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><AlertTriangle size={24}/></div>
                        <span className="text-xs font-bold">Estoque Limitado</span>
                    </div>
                </div>

            </main>
        </div>
    );
};
