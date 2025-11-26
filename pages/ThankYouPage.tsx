import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, Download, PlayCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Header } from '../components/Header';

export const ThankYouPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-premium-bg text-premium-text font-sans selection:bg-premium-gold selection:text-black">
            <Header />

            <main className="max-w-3xl mx-auto px-5 py-20 text-center">
                
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(34,197,94,0.4)]"
                >
                    <CheckCircle size={48} className="text-white" />
                </motion.div>

                <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                    Pedido Confirmado com Sucesso!
                </h1>
                
                <p className="text-xl text-premium-muted mb-12 max-w-2xl mx-auto">
                    Parabéns pela decisão. Você acaba de dar o passo mais importante para retomar o controle da sua vida.
                </p>

                {/* INFORMAÇÕES DE ACESSO */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-10 text-left">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Mail className="text-premium-gold" /> 
                        Como acessar seu material:
                    </h3>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-bold text-white">1</div>
                            <div>
                                <p className="text-white font-medium">Verifique seu E-mail</p>
                                <p className="text-sm text-premium-muted">Enviamos os dados de acesso da área de membros para o seu e-mail cadastrado.</p>
                            </div>
                        </div>
                        
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-bold text-white">2</div>
                            <div>
                                <p className="text-white font-medium">Acesse a Plataforma</p>
                                <p className="text-sm text-premium-muted">O Protocolo 10 Dias já está liberado. O acesso ao curso 3A (se adquirido) também.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-bold text-white">3</div>
                            <div>
                                <p className="text-white font-medium">Envio do Bye Dor</p>
                                <p className="text-sm text-premium-muted">Se você adquiriu o suplemento, ele será despachado em até 24h úteis. O código de rastreio chegará no seu WhatsApp.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <Button to="/" className="w-full bg-white/10 border border-white/20 hover:bg-white/20">
                        Voltar ao Início
                    </Button>
                    <Button to="#" pulse className="w-full flex items-center justify-center gap-2">
                        <PlayCircle size={18} /> Acessar Área de Membros
                    </Button>
                </div>

            </main>
        </div>
    );
};
