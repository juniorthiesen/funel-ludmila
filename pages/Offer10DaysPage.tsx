import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, AlertCircle, Clock, Shield, ArrowRight, Star, Activity } from 'lucide-react';
import { Header } from '../components/Header';
import { funnelConfig } from '../config/funnelConfig';
import { Analytics } from '../utils/analytics';

export const Offer10DaysPage: React.FC = () => {
    const [byeDorOption, setByeDorOption] = useState<'none' | '1month' | '3months'>('none');
    const [addProtocolo3A, setAddProtocolo3A] = useState(false);
    const [showDiscountPopup, setShowDiscountPopup] = useState(false);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);

        // Show discount popup after 15 seconds if not purchased (simulated)
        const timer = setTimeout(() => {
            setShowDiscountPopup(true);
        }, 15000);
        return () => clearTimeout(timer);
    }, []);

    const basePrice = funnelConfig.products.urgency.price;
    const byeDor1MonthPrice = funnelConfig.products.byeDor1Month.price;
    const byeDor3MonthsPrice = funnelConfig.products.byeDor3Months.price;
    const protocolo3APrice = funnelConfig.products.autonomy.price;

    // Dynamic Pricing Logic
    let currentBasePrice = basePrice;
    let discountMessage = "";

    if (byeDorOption === '3months') {
        if (addProtocolo3A) {
            currentBasePrice = 0; // FREE if both 3A and ByeDor 3M are selected
            discountMessage = "Protocolo 10 Dias SAI DE GRAÇA!";
        } else {
            currentBasePrice = 47.00; // Discounted if ByeDor 3M is selected
            discountMessage = "Desconto especial no Protocolo 10 Dias!";
        }
    } else if (byeDorOption === '1month' && addProtocolo3A) {
        currentBasePrice = 67.00; // Discounted if 3A + ByeDor 1M
        discountMessage = "Desconto especial no Protocolo 10 Dias!";
    }

    let totalPrice = currentBasePrice;
    if (addProtocolo3A) totalPrice += protocolo3APrice;
    if (byeDorOption === '1month') totalPrice += byeDor1MonthPrice;
    if (byeDorOption === '3months') totalPrice += byeDor3MonthsPrice;

    // Dynamic Checkout URL Logic (Placeholder logic for combinations)
    let checkoutUrl = funnelConfig.products.urgency.checkoutUrl;
    const params = new URLSearchParams();

    if (addProtocolo3A && byeDorOption === '3months') {
        // Bundle: 3A + ByeDor 3M + Free 10 Days
        checkoutUrl = "https://pay.kiwify.com.br/BUNDLE_SUPER_OFFER";
    } else if (addProtocolo3A && byeDorOption === '1month') {
        // Bundle: 3A + ByeDor 1M + Discounted 10 Days (67)
        checkoutUrl = "https://pay.kiwify.com.br/BUNDLE_3A_BYEDOR1M";
    } else if (byeDorOption === '3months') {
        // Bundle: 10 Days (Discounted) + ByeDor 3M
        checkoutUrl = "https://pay.kiwify.com.br/BUNDLE_BYEDOR_OFFER";
    } else {
        // Standard logic with order bumps
        if (addProtocolo3A) params.append('bump', funnelConfig.products.autonomy.id);
        if (byeDorOption === '1month') params.append('bump', funnelConfig.products.byeDor1Month.id);

        if (params.toString()) checkoutUrl += `?${params.toString()}`;
    }

    const handleByeDorSelection = (option: 'none' | '1month' | '3months') => {
        setByeDorOption(option === byeDorOption ? 'none' : option);

        if (option !== 'none' && option !== byeDorOption) {
            const product = option === '1month' ? funnelConfig.products.byeDor1Month : funnelConfig.products.byeDor3Months;
            Analytics.trackInitiateCheckout({
                content_name: product.name,
                value: product.price,
                currency: 'BRL'
            });
        }
    };

    const handleCheckout = () => {
        Analytics.trackInitiateCheckout({
            content_name: "Bundle Selection",
            value: totalPrice,
            currency: 'BRL'
        });
    };

    return (
        <div className="min-h-screen bg-premium-bg text-premium-text font-sans selection:bg-premium-gold selection:text-black">
            <Header />

            {/* BARRA DE URGÊNCIA */}
            <div className="bg-red-900/20 border-b border-red-500/20 py-3 px-4 mt-16">
                <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-red-400 text-sm font-bold uppercase tracking-wider animate-pulse">
                    <AlertCircle size={16} />
                    <span>Diagnóstico Confirmado: Nível Inflamatório Crítico</span>
                </div>
            </div>

            <main className="max-w-5xl mx-auto px-5 py-12">

                {/* HERO SECTION */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-4 rounded-full bg-premium-gold/10 border border-premium-gold/20 text-premium-gold text-xs font-bold uppercase tracking-[4px] mb-6"
                    >
                        O Pronto Socorro da Fibromialgia
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6"
                    >
                        Não Tente "Tratar a Causa"<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Enquanto o Prédio Pega Fogo</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-premium-muted max-w-3xl mx-auto leading-relaxed"
                    >
                        Seu corpo está gritando. Você precisa de alívio <strong>AGORA</strong>.
                        O Protocolo "10 Dias Sem Dor" é o band-aid de alta potência para tirar você da crise e te fazer voltar a respirar.
                    </motion.p>
                </div>

                {/* COMPARAÇÃO: PRONTO SOCORRO VS TRATAMENTO */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-premium-gold/30 transition-colors">
                        <div className="absolute top-0 left-0 w-full h-1 bg-premium-gold"></div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-premium-gold/20 flex items-center justify-center text-premium-gold">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Protocolo 10 Dias</h3>
                                <p className="text-xs text-premium-gold uppercase tracking-wider font-bold">O que você precisa hoje</p>
                            </div>
                        </div>
                        <ul className="space-y-4 text-premium-muted">
                            <li className="flex items-start gap-3">
                                <Check className="text-green-400 shrink-0 mt-1" size={16} />
                                <span><strong>Apaga o Incêndio:</strong> Técnicas para alívio imediato da dor aguda.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-green-400 shrink-0 mt-1" size={16} />
                                <span><strong>Desinflamação Rápida:</strong> O "Reset" metabólico de emergência.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-green-400 shrink-0 mt-1" size={16} />
                                <span><strong>Foco no Sintoma:</strong> Para você voltar a raciocinar e dormir.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-black/40 border border-white/5 rounded-2xl p-8 relative opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                <Shield size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Protocolo 3A (Completo)</h3>
                                <p className="text-xs text-purple-400 uppercase tracking-wider font-bold">O seu próximo passo</p>
                            </div>
                        </div>
                        <p className="text-sm text-premium-muted mb-4">
                            Este é o tratamento profundo para a causa raiz. Mas você não constrói uma casa durante um terremoto. Primeiro, paramos o tremor.
                        </p>
                        <div className="inline-block bg-white/10 px-3 py-1 rounded text-xs text-white/60">
                            Disponível após a fase de emergência
                        </div>
                    </div>
                </div>

                {/* CHECKOUT BUILDER */}
                <div className="max-w-3xl mx-auto" id="oferta">
                    <div className="bg-premium-secondary border border-premium-gold/30 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)]">
                        <div className="bg-premium-gold/10 p-6 border-b border-premium-gold/20 text-center">
                            <h2 className="text-2xl font-bold text-white">Monte Seu Kit de Emergência</h2>
                            <p className="text-premium-muted text-sm">Selecione os itens para ativar seu tratamento imediato</p>
                        </div>

                        <div className="p-8 space-y-6">
                            {/* PRODUTO PRINCIPAL (MANDATORY) */}
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-premium-gold/5 border border-premium-gold/40 relative transition-all">
                                <div className="absolute -top-3 -right-3 bg-premium-gold text-black text-xs font-bold px-2 py-1 rounded uppercase">
                                    Essencial
                                </div>
                                <div className="mt-1">
                                    <div className="w-6 h-6 rounded-full bg-premium-gold flex items-center justify-center text-black">
                                        <Check size={14} strokeWidth={4} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-bold text-white text-lg">Protocolo Digital 10 Dias Sem Dor</h3>
                                        <div className="text-right">
                                            {currentBasePrice < basePrice ? (
                                                <>
                                                    <span className="text-xs text-red-400 line-through block">R$ {basePrice.toFixed(2).replace('.', ',')}</span>
                                                    <span className="font-bold text-green-400">
                                                        {currentBasePrice === 0 ? "GRÁTIS" : `R$ ${currentBasePrice.toFixed(2).replace('.', ',')}`}
                                                    </span>
                                                </>
                                            ) : (
                                                <span className="font-bold text-premium-gold">R$ {basePrice.toFixed(2).replace('.', ',')}</span>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm text-premium-muted mb-3">Acesso imediato à área de membros. O guia passo-a-passo para sair da crise.</p>
                                    <ul className="text-xs text-white/60 space-y-1 pl-2 border-l border-white/10">
                                        <li>• Cardápio Anti-inflamatório de 10 Dias</li>
                                        <li>• SOS do Sono Reparador</li>
                                        <li>• Técnicas de Alívio Instantâneo</li>
                                    </ul>
                                </div>
                            </div>

                            {/* PROTOCOLO 3A SELECTION */}
                            <div
                                className={`flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer relative group ${addProtocolo3A ? 'bg-blue-900/20 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                                onClick={() => setAddProtocolo3A(!addProtocolo3A)}
                            >
                                <div className="mt-1">
                                    <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${addProtocolo3A ? 'bg-blue-500 border-blue-500 text-white' : 'border-white/30 text-transparent'}`}>
                                        {addProtocolo3A && <Check size={14} strokeWidth={4} />}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className={`font-bold ${addProtocolo3A ? 'text-blue-200' : 'text-white'}`}>
                                            Protocolo 3A (Tratamento Completo)
                                        </h3>
                                        <span className={`font-bold ${addProtocolo3A ? 'text-blue-400' : 'text-white'}`}>+ R$ {protocolo3APrice.toFixed(2).replace('.', ',')}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-blue-500/20 text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1">
                                            <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                                            Consulta com a Dra. Ludmila - Gravada
                                        </span>
                                    </div>
                                    <p className="text-xs text-premium-muted">O método completo para tratar a causa raiz da Fibromialgia. Acesso vitalício.</p>
                                </div>
                            </div>

                            {/* ORDER BUMP SELECTION (BYEDOR) */}
                            <div className="space-y-3 pt-4 border-t border-white/10">
                                <div className="flex items-center gap-2 mb-2">
                                    <Activity size={16} className="text-purple-400" />
                                    <h3 className="font-bold text-white">Potencialize seus resultados (Suplementação)</h3>
                                </div>

                                {/* Option 1: 1 Month */}
                                <div
                                    data-testid="option-1-month"
                                    className={`flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer relative group ${byeDorOption === '1month' ? 'bg-purple-900/20 border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.15)]' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                                    onClick={() => handleByeDorSelection('1month')}
                                >
                                    <div className="mt-1">
                                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${byeDorOption === '1month' ? 'bg-purple-500 border-purple-500 text-white' : 'border-white/30 text-transparent'}`}>
                                            {byeDorOption === '1month' && <div className="w-2 h-2 bg-white rounded-full" />}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className={`font-bold ${byeDorOption === '1month' ? 'text-purple-200' : 'text-white'}`}>
                                                1 Mês de ByeDor
                                            </h3>
                                            <span className={`font-bold ${byeDorOption === '1month' ? 'text-purple-400' : 'text-white'}`}>+ R$ {byeDor1MonthPrice.toFixed(2).replace('.', ',')}</span>
                                        </div>
                                        <p className="text-xs text-premium-muted">1 Pote. Ideal para experimentar.</p>
                                    </div>
                                </div>

                                {/* Option 2: 3 Months (Best Value) */}
                                <div
                                    data-testid="option-3-months"
                                    className={`flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer relative group ${byeDorOption === '3months' ? 'bg-purple-900/30 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.25)]' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                                    onClick={() => handleByeDorSelection('3months')}
                                >
                                    {byeDorOption === '3months' && (
                                        <div className="absolute -top-3 -right-3 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded uppercase flex items-center gap-1 animate-bounce">
                                            <Star size={10} fill="currentColor" /> Melhor Escolha
                                        </div>
                                    )}
                                    <div className="mt-1">
                                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${byeDorOption === '3months' ? 'bg-purple-500 border-purple-500 text-white' : 'border-white/30 text-transparent'}`}>
                                            {byeDorOption === '3months' && <div className="w-2 h-2 bg-white rounded-full" />}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className={`font-bold ${byeDorOption === '3months' ? 'text-purple-200' : 'text-white'}`}>
                                                3 Meses de ByeDor (Tratamento Completo)
                                            </h3>
                                            <span className={`font-bold ${byeDorOption === '3months' ? 'text-purple-400' : 'text-white'}`}>+ R$ {byeDor3MonthsPrice.toFixed(2).replace('.', ',')}</span>
                                        </div>
                                        <p className="text-xs text-premium-muted mb-2">3 Potes. O tempo ideal para desinflamar completamente.</p>
                                        <div className="flex gap-2 text-[10px] font-bold uppercase tracking-wider text-purple-400/80">
                                            <span className="bg-purple-500/10 px-2 py-0.5 rounded">Frete Grátis</span>
                                            <span className="bg-purple-500/10 px-2 py-0.5 rounded">Maior Desconto</span>
                                        </div>
                                        {/* Discount Badge */}
                                        <div className="mt-2 bg-green-500/10 border border-green-500/30 rounded p-2 text-center">
                                            <p className="text-xs text-green-400 font-bold">
                                                {addProtocolo3A ? "🎁 Protocolo 10 Dias GRÁTIS ativado!" : "🎁 Desbloqueia Protocolo 10 Dias por R$ 47"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* TOTAL E CTA */}
                            <div className="pt-6 border-t border-white/10">
                                <div className="flex justify-between items-end mb-6">
                                    <span className="text-premium-muted text-sm">Total do seu investimento:</span>
                                    <div className="text-right">
                                        {discountMessage && (
                                            <span className="block text-xs text-green-400 font-bold mb-1 animate-pulse">{discountMessage}</span>
                                        )}
                                        <span className="text-3xl font-bold text-white">R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
                                        <span className="block text-xs text-premium-muted mt-1">em até 12x de R$ {(totalPrice / 10).toFixed(2).replace('.', ',')}*</span>
                                    </div>
                                </div>

                                <a
                                    href={checkoutUrl}
                                    onClick={handleCheckout}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gradient-to-r from-premium-gold to-yellow-400 text-black font-bold py-6 px-8 rounded-lg text-xl uppercase tracking-wider hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 animate-pulse-gold"
                                >
                                    LIBERAR MEU ALÍVIO AGORA
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </a>

                                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-premium-muted">
                                    <span className="flex items-center gap-1"><Shield size={12} /> Compra Segura</span>
                                    <span className="flex items-center gap-1"><Check size={12} /> Acesso Imediato</span>
                                    <span className="flex items-center gap-1"><Star size={12} /> Garantia de 7 Dias</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* POPUP DE CUPOM (DOWNSELL/RÉGUA DE RELACIONAMENTO) */}
            {showDiscountPopup && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/80 backdrop-blur-sm"
                >
                    <div className="bg-white text-black p-8 rounded-2xl max-w-md w-full relative">
                        <button
                            onClick={() => setShowDiscountPopup(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-black"
                        >
                            ✕
                        </button>
                        <div className="text-center">
                            <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded uppercase mb-4 inline-block">
                                Espera! Não vá ainda
                            </span>
                            <h3 className="text-2xl font-bold mb-2">O preço é o problema?</h3>
                            <p className="text-gray-600 mb-6">
                                Eu entendo. Mas sua dor não pode esperar. Use o cupom abaixo para levar o <strong>Protocolo 10 Dias</strong> com <span className="text-green-600 font-bold">30% de desconto</span>.
                            </p>

                            <div className="bg-gray-100 p-3 rounded-lg border-2 border-dashed border-gray-300 mb-6 font-mono text-xl font-bold tracking-widest text-center cursor-pointer hover:bg-gray-50 transition-colors">
                                RMKT30OFF
                            </div>

                            <p className="text-xs text-gray-500 mb-4">De R$ 97,00 por <strong className="text-green-600 text-lg">R$ 67,90</strong></p>

                            <button className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors">
                                APLICAR DESCONTO E COMPRAR
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}

        </div>
    );
};
