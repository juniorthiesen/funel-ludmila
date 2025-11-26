import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, BookOpen, Shield, ArrowRight, Star, Lock } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const UpsellProtocoloPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans pb-20">
            
            {/* BARRA DE PROGRESSO FINAL */}
            <div className="bg-gray-900 text-white py-4 px-5 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-2 text-green-500 opacity-50">
                        <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center">✓</div>
                        <span className="hidden sm:inline">Passo 1</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-500 opacity-50">
                        <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center">✓</div>
                        <span className="hidden sm:inline">Passo 2</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-500 animate-pulse">
                        <div className="w-5 h-5 rounded-full bg-purple-500 text-white flex items-center justify-center">3</div>
                        <span>Passo Final: Autonomia</span>
                    </div>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-5 pt-10">
                
                {/* HEADLINE */}
                <div className="text-center mb-12">
                    <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                        Acesso Vitalício • Oferta Única
                    </span>
                    <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
                        Pare de depender de remédios (e de mim) para sempre.
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        O Protocolo 10 Dias vai tirar sua dor agora. O ByeDor vai acelerar sua recuperação.<br/>
                        <strong>Mas o que você vai fazer daqui a 6 meses para garantir que a fibromialgia nunca mais volte?</strong>
                    </p>
                </div>

                {/* VSL PLACEHOLDER / IMAGEM DO CURSO */}
                <div className="aspect-video bg-gray-900 rounded-2xl shadow-2xl mb-12 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
                    <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                    </div>
                    <div className="absolute bottom-6 left-6 text-white text-left z-10">
                        <p className="font-bold text-lg">Conheça o Método 3A</p>
                        <p className="text-sm opacity-80">Aprenda a ser sua própria cura</p>
                    </div>
                </div>

                {/* O QUE É O PROTOCOLO 3A */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-purple-900">Protocolo 3A: Alimentação, Anti-inflamação e Autonomia</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Este não é apenas mais um curso. É a "Faculdade da Sua Saúde". Você vai aprender exatamente o que comer, como dormir e como modular seu intestino para entrar em <strong>remissão permanente</strong>.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="text-green-500 shrink-0 mt-1" />
                                <span className="text-gray-700"><strong>Módulo Nutrição:</strong> Os alimentos que desligam a dor.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-green-500 shrink-0 mt-1" />
                                <span className="text-gray-700"><strong>Módulo Sono:</strong> Higiene do sono profunda.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-green-500 shrink-0 mt-1" />
                                <span className="text-gray-700"><strong>Módulo Emoções:</strong> Gerenciando o estresse gatilho.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                        <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                            <span className="text-gray-500 font-bold">Preço Público</span>
                            <span className="text-gray-400 line-through decoration-red-500">R$ 997,00</span>
                        </div>
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-purple-700 font-bold">Preço Aluno (Hoje)</span>
                            <span className="text-4xl font-bold text-gray-900">R$ 297,00</span>
                        </div>
                        
                        <Button 
                            pulse 
                            className="w-full !bg-purple-600 !hover:bg-purple-700 !text-white py-4 text-lg shadow-xl shadow-purple-200"
                        >
                            SIM, QUERO ACESSO VITALÍCIO
                        </Button>
                        
                        <p className="text-center text-xs text-gray-500 mt-4">
                            Oferta válida apenas nesta página.
                        </p>
                    </div>
                </div>

                {/* LINK FINAL */}
                <div className="text-center border-t border-gray-100 pt-10">
                    <p className="text-gray-500 text-sm mb-4">
                        Se você fechar esta página, perderá o desconto de R$ 700,00 para sempre.
                    </p>
                    <button 
                        onClick={() => window.location.href = '/obrigado'} 
                        className="text-gray-400 hover:text-gray-600 text-sm underline"
                    >
                        Não, obrigado. Já tenho tudo o que preciso para me curar sozinha.
                    </button>
                </div>

            </main>
        </div>
    );
};
