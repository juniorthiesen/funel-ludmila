import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Activity, AlertTriangle, Battery, Brain, CheckCircle, ChevronRight, Shield, Thermometer, Star, Lock } from 'lucide-react';
import { QuizOption, ProgressBar } from './QuizComponents';
import { quizConfig } from '../config/quizConfig';
import { funnelConfig } from '../config/funnelConfig';
import { supabase } from '../lib/supabase';
import { Analytics } from '../utils/analytics';

// --- SUB-COMPONENTES ---

interface KnowledgePillProps {
    data: any;
    onNext: () => void;
}

const KnowledgePill: React.FC<KnowledgePillProps> = ({ data, onNext }) => {
    const [loading, setLoading] = useState(true);
    const Icon = data.iconName === 'Battery' ? Battery : Brain;

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="relative w-20 h-20 mb-6">
                    <motion.div
                        className="absolute inset-0 border-4 border-premium-gold/30 rounded-full"
                    />
                    <motion.div
                        className="absolute inset-0 border-4 border-t-premium-gold border-r-transparent border-b-transparent border-l-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Activity className="w-8 h-8 text-premium-gold" />
                    </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">{data.title}</h3>
                <p className="text-premium-muted text-sm">Conectando pontos de dados...</p>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-premium-secondary p-8 rounded-2xl shadow-2xl max-w-md mx-auto border border-premium-gold/30 relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-premium-gold to-yellow-500"></div>
            <div className="flex justify-center">
                <Icon className={`w-12 h-12 mb-4 ${data.iconName === 'Battery' ? 'text-premium-gold' : 'text-purple-400'}`} />
            </div>
            <h3 className="text-xl font-heading font-bold text-center text-white mb-4">Fato Clínico Detectado</h3>
            <div className="flex justify-center mb-6">
                <img src={data.image} alt="Ilustração Clínica" className="w-full h-auto object-cover rounded-lg shadow-lg border border-white/10" />
            </div>
            <p className="text-premium-muted mb-6 leading-relaxed text-center">
                {data.content}
            </p>
            <div className="bg-white/5 p-4 rounded-lg mb-6 border border-white/10">
                <p className="text-premium-gold font-semibold text-sm text-center flex items-center justify-center gap-2">
                    <Star size={16} fill="currentColor" /> {data.highlight}
                </p>
            </div>
            <button
                onClick={onNext}
                className="w-full bg-gradient-to-r from-premium-gold to-yellow-400 text-black py-3 px-6 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center uppercase tracking-wider text-sm"
            >
                Continuar Diagnóstico <ChevronRight className="ml-2 w-4 h-4" />
            </button>
        </motion.div>
    );
};

interface LeadCaptureProps {
    onSubmit: (data: any) => void;
}

const LeadCapture: React.FC<LeadCaptureProps> = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);

        // Apply mask
        if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        }
        if (value.length > 9) { // (XX) X...
            value = `${value.slice(0, 10)}-${value.slice(10)}`;
        } else if (value.length > 6) { // (XX) XXXX... (legacy/partial)
            // This simple mask might be tricky for 8 vs 9 digits. 
            // Let's use a standard formatter.
        }

        // Simpler approach for mask:
        let formatted = value;
        if (value.length <= 11) {
            formatted = value
                .replace(/^(\d{2})/, "($1) ")
                .replace(/(\d{5})(\d{4})$/, "$1-$2") // 9 digits
                .replace(/(\d{4})(\d{4})$/, "$1-$2"); // 8 digits fallback if length < 11

            // Fix for the overlap:
            // If 11 chars: (11) 91234-5678
            // If 10 chars: (11) 1234-5678

            if (value.length === 11) {
                formatted = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
            } else if (value.length === 10) {
                formatted = value.replace(/^(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
            } else if (value.length > 6) {
                formatted = value.replace(/^(\d{2})(\d{4,5})/, "($1) $2");
            } else if (value.length > 2) {
                formatted = value.replace(/^(\d{2})/, "($1) ");
            }
        }
        setPhone(formatted);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const cleanPhone = phone.replace(/\D/g, "");

        if (name && cleanPhone.length >= 10) {
            setIsSubmitting(true);
            await onSubmit({ name, phone }); // Send formatted or clean? Usually clean is better for DB, but user might want formatted. Keeping as is (state value) for now, or send object. 
            // The original code sent {name, phone}. The backend likely expects a string.
            // Let's send the formatted phone to match the UI, or clean if the DB constraint is strict integer. 
            // Given "text" type in DB description, formatted is fine, but let's ensure it's valid.
            setIsSubmitting(false);
        } else {
            alert("Por favor, insira um número de WhatsApp válido com DDD.");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-premium-secondary p-8 rounded-2xl shadow-2xl max-w-md mx-auto border border-white/10"
        >
            <div className="text-center mb-6">
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h2 className="text-2xl font-heading font-bold text-white">Diagnóstico Quase Pronto</h2>
                <p className="text-premium-muted mt-2 text-sm">
                    Identificamos um padrão inflamatório importante. Precisamos dos seus dados para gerar o relatório personalizado.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-premium-gold uppercase tracking-wider mb-1">Seu Nome</label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:border-premium-gold focus:ring-1 focus:ring-premium-gold outline-none text-white placeholder-white/30 transition-all"
                        placeholder="Digite seu nome"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-premium-gold uppercase tracking-wider mb-1">Seu WhatsApp</label>
                    <input
                        type="tel"
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                        maxLength={15}
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:border-premium-gold focus:ring-1 focus:ring-premium-gold outline-none text-white placeholder-white/30 transition-all"
                        placeholder="(DDD) 99999-9999"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-500 text-white py-4 rounded-lg font-bold transition-all shadow-lg transform hover:-translate-y-1 mt-4 uppercase tracking-wider text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Salvando..." : "Ver Meu Nível de Inflamação"} <ChevronRight size={16} />
                </button>
                <p className="text-xs text-center text-white/30 mt-4 flex items-center justify-center gap-1">
                    <Lock size={10} /> Seus dados estão 100% seguros.
                </p>
            </form>
        </motion.div>
    );
};

interface ResultPageProps {
    score: number;
    financialProfile: string;
    userData: any;
}

const ResultPage: React.FC<ResultPageProps> = ({ score, financialProfile, userData }) => {
    const navigate = useNavigate();

    let offerType = "urgency";
    let inflammationLevel = "CRÍTICO";
    let colorClass = "text-red-500";
    let bgGradient = "from-red-900/50 to-premium-bg";

    if (score < funnelConfig.scoring.urgencyThreshold) {
        offerType = "autonomy";
        inflammationLevel = "MODERADO A ALTO";
        colorClass = "text-orange-500";
        bgGradient = "from-orange-900/50 to-premium-bg";
    }

    const configContent = quizConfig.results[offerType as keyof typeof quizConfig.results];

    const content = {
        ...configContent,
        headline: configContent.headline.replace("{name}", userData.name),
        product: offerType === "urgency" ? funnelConfig.products.urgency.name : funnelConfig.products.autonomy.name,
        price: offerType === "urgency" ? funnelConfig.products.urgency.displayPrice : funnelConfig.products.autonomy.displayPrice,
        link: offerType === "urgency" ? funnelConfig.products.urgency.checkoutUrl : funnelConfig.products.autonomy.checkoutUrl
    };
    const isHighTicketCandidate = (financialProfile === "high" || financialProfile === "very_high") && score > funnelConfig.scoring.highTicketThreshold;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-premium-secondary w-full max-w-2xl mx-auto border border-premium-gold/30 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden"
        >
            <div className={`bg-gradient-to-r ${bgGradient} p-8 text-center border-b border-white/10 relative overflow-hidden`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
                <div className="inline-block p-3 rounded-full bg-white/10 shadow-sm mb-4 backdrop-blur-sm">
                    <AlertTriangle className={`w-8 h-8 ${colorClass}`} />
                </div>
                <h2 className={`text-2xl md:text-4xl font-heading font-bold ${colorClass} mb-2`}>
                    {inflammationLevel}
                </h2>
                <p className="text-premium-muted font-medium uppercase tracking-widest text-xs">Pontuação de Risco: {score} / 300</p>
            </div>

            <div className="p-8 md:p-10 space-y-8">
                <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-4 leading-tight">{content.headline}</h3>
                    <p className="text-premium-muted leading-relaxed text-lg">{content.body}</p>
                </div>

                <div className="flex justify-center my-2">
                    <img src={content.image} alt="Análise de Dor" className="w-full h-auto object-cover rounded-xl shadow-2xl border border-premium-gold/20" />
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-premium-gold/20 relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-premium-gold/10 rounded-full blur-2xl"></div>
                    <h4 className="font-bold text-premium-gold mb-3 flex items-center text-lg">
                        <CheckCircle className="w-5 h-5 mr-2" /> A Solução Ideal para Você
                    </h4>
                    <p className="text-sm text-white/80 mb-6 leading-relaxed">
                        {content.solution}
                    </p>
                    <div className="bg-black/40 p-4 rounded-lg border border-white/5 text-center">
                        <span className="text-[10px] uppercase tracking-[3px] text-premium-muted font-bold">Recomendação Oficial</span>
                        <h3 className="text-xl font-bold text-white mt-2">{content.product}</h3>
                        <div className="text-3xl font-heading font-bold text-green-400 my-2">{content.price}</div>
                    </div>
                </div>

                {/* ByeDor Potentiator Section */}
                <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/30 relative overflow-hidden">
                    <div className="flex items-start gap-4">
                        <div className="bg-purple-500/20 p-3 rounded-full text-purple-400">
                            <Activity size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-purple-200 text-lg mb-1">Potencializador Recomendado</h4>
                            <p className="text-sm text-premium-muted mb-3">
                                Nossa IA identificou que seus receptores de dor estão sobrecarregados. O suplemento <strong>ByeDor</strong> foi selecionado como o par perfeito para acelerar seus resultados em até 3x.
                            </p>
                            <div className="inline-block bg-purple-500/20 text-purple-300 text-xs font-bold px-2 py-1 rounded border border-purple-500/30">
                                Disponível na próxima etapa
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => navigate('/oferta-10-dias')}
                    className="w-full bg-gradient-to-r from-premium-gold to-yellow-400 text-black py-5 px-6 rounded-lg font-bold text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center uppercase tracking-wider animate-pulse-gold"
                >
                    {content.cta} <ChevronRight className="ml-2" />
                </button>

                {isHighTicketCandidate && (
                    <div className="pt-6 border-t border-white/10 text-center">
                        <p className="text-xs text-premium-muted mb-3">
                            Seu perfil indica necessidade de acompanhamento personalizado.
                        </p>
                        <a
                            href={funnelConfig.products.highTicket.contactUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-premium-gold font-semibold text-sm hover:text-white transition-colors underline decoration-premium-gold/50 hover:decoration-white"
                        >
                            Falar com a Dra. Ludmila sobre a {funnelConfig.products.highTicket.name} ({funnelConfig.products.highTicket.displayPrice})
                        </a>
                    </div>
                )}

                <div className="text-center text-xs text-white/30 flex justify-center gap-4">
                    <span>🔒 Compra Segura</span>
                    <span>⚡ Acesso Imediato</span>
                </div>
            </div>
        </motion.div>
    );
};

// --- COMPONENTE PRINCIPAL ---

export const Quiz: React.FC = () => {
    const [step, setStep] = useState<'intro' | 'quiz' | 'pill1' | 'pill2' | 'lead' | 'financial' | 'calculating' | 'result'>('intro');
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [userData, setUserData] = useState<any>(null);
    const [financialProfile, setFinancialProfile] = useState('low');
    const [leadId, setLeadId] = useState<string | null>(null);

    const allQuestions = [...quizConfig.questionsFase1, ...quizConfig.questionsFase2, ...quizConfig.questionsFase3];
    const totalQuizQuestions = allQuestions.length;
    const totalFinancialQuestions = quizConfig.questionsFinancial.length;

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleStart = () => {
        setStep('quiz');
    };

    const handleAnswer = (points: number | undefined, value: string | undefined) => {
        // Atualiza Score
        if (typeof points === 'number') setScore(prev => prev + points);

        // Salva perfil financeiro (última pergunta define ou acumula lógica)
        if (step === 'financial' && value) {
            // Lógica simples: se qualquer resposta for high/premium, marca como high
            if (value === 'high' || value === 'very_high' || value === 'premium' || value === 'private') {
                setFinancialProfile('high');
            }
        }

        // Delay para UX
        setTimeout(() => {
            // Lógica de Navegação
            if (step === 'quiz') {
                const nextIndex = questionIndex + 1;

                // Checkpoints para Pílulas
                if (nextIndex === 3) {
                    setStep('pill1');
                    setQuestionIndex(nextIndex);
                } else if (nextIndex === 6) {
                    setStep('pill2');
                    setQuestionIndex(nextIndex);
                } else if (nextIndex === totalQuizQuestions) {
                    setStep('lead');
                    setQuestionIndex(0); // Reset para financeiro
                } else {
                    setQuestionIndex(nextIndex);
                }
            } else if (step === 'financial') {
                const nextIndex = questionIndex + 1;
                if (nextIndex === totalFinancialQuestions) {
                    setStep('calculating');
                } else {
                    setQuestionIndex(nextIndex);
                }
            }
        }, 300);
    };

    const handlePillNext = () => {
        setStep('quiz');
    };

    const handleLeadSubmit = async (data: any) => {
        setUserData(data);

        try {
            const { data: leadData, error } = await supabase
                .from('leads_byedor')
                .insert([
                    {
                        name: data.name,
                        phone: data.phone,
                        created_at: new Date().toISOString(),
                        score_partial: score // Save partial score if needed
                    }
                ])
                .select()
                .single();

            if (error) {
                console.error('Error saving lead:', error);
            } else if (leadData) {
                setLeadId(leadData.id);
                // Track Lead Event
                Analytics.trackLead({ value: 0, currency: 'BRL' });
            }
        } catch (err) {
            console.error('Unexpected error saving lead:', err);
        }

        setStep('financial');
    };

    useEffect(() => {
        if (step === 'calculating') {
            const timer = setTimeout(() => setStep('result'), 3000);
            return () => clearTimeout(timer);
        }

        if (step === 'result') {
            // Determine offer type
            const offerType = score >= funnelConfig.scoring.urgencyThreshold ? "urgency" : "autonomy";
            const productName = offerType === "urgency" ? funnelConfig.products.urgency.name : funnelConfig.products.autonomy.name;

            // Track CompleteRegistration Event (Quiz Finished)
            Analytics.trackCompleteRegistration({
                content_name: productName,
                value: 0, // Or potential value
                currency: 'BRL'
            });

            // Update Lead with final details
            if (leadId) {
                const updateLead = async () => {
                    try {
                        await supabase
                            .from('leads_byedor')
                            .update({
                                final_score: score,
                                financial_profile: financialProfile,
                                recommended_product: offerType,
                                updated_at: new Date().toISOString()
                            })
                            .eq('id', leadId);
                    } catch (err) {
                        console.error('Error updating lead with result:', err);
                    }
                };
                updateLead();
            }
        }
    }, [step, leadId, score, financialProfile]);

    return (
        <div className="min-h-screen w-full bg-premium-bg flex flex-col items-center justify-center px-5 py-10 relative overflow-hidden font-sans">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-premium-gold/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[100px]" />
            </div>

            {/* Header Fixo */}
            <div className="absolute top-6 left-0 w-full text-center z-20">
                <p className="text-premium-gold tracking-[4px] uppercase text-[10px] font-bold mb-2">Dra. Ludmila Simões</p>
                {step !== 'intro' && step !== 'result' && (
                    <div className="flex items-center justify-center space-x-2 text-premium-muted text-xs uppercase tracking-wider">
                        <Thermometer className="w-3 h-3" />
                        <span>Análise de Inflamação em Progresso</span>
                    </div>
                )}
            </div>

            <div className="max-w-3xl w-full relative z-10 mt-10">
                <AnimatePresence mode="wait">

                    {step === 'intro' && (
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-premium-secondary rounded-2xl shadow-2xl overflow-hidden border border-white/10"
                        >
                            <div className="relative h-64 bg-black">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-premium-secondary z-10"></div>
                                <img src="" className="w-full h-full object-cover opacity-40 grayscale" alt="Mulher com dor" />
                                <div className="absolute inset-0 flex items-center justify-center p-6 z-20">
                                    <div className="text-center text-white">
                                        <h1 className="font-heading text-2xl md:text-4xl font-bold mb-4 leading-tight">Descubra o Nível de <br /><span className="text-premium-gold">Inflamação do seu Corpo</span></h1>
                                        <p className="text-sm md:text-lg font-light text-premium-muted">O que as suas dores estão tentando te dizer?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 text-center">
                                <p className="text-premium-muted mb-8 text-lg leading-relaxed">
                                    A Fibromialgia não é igual para todas. Este diagnóstico gratuito vai analisar seus sintomas, sua energia mitocondrial e saúde intestinal para revelar a <strong>RAIZ</strong> da sua dor.
                                </p>
                                <button
                                    onClick={handleStart}
                                    className="bg-gradient-to-r from-premium-gold to-yellow-400 text-black text-lg font-bold py-4 px-12 rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:scale-105 uppercase tracking-wider"
                                >
                                    Iniciar Diagnóstico Gratuito
                                </button>
                                <p className="mt-6 text-xs text-white/30 uppercase tracking-widest">Leva menos de 2 minutos</p>
                            </div>
                        </motion.div>
                    )}

                    {(step === 'quiz' || step === 'financial') && (
                        <motion.div
                            key="quiz-card"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-premium-secondary p-6 md:p-10 rounded-2xl shadow-2xl border border-white/10"
                        >
                            <div className="mb-6 flex justify-between items-center">
                                <span className="text-xs font-bold text-premium-gold uppercase tracking-wider">
                                    {step === 'quiz' ? `Pergunta ${questionIndex + 1} de ${totalQuizQuestions}` : "Perfil Financeiro"}
                                </span>
                                {step === 'financial' && <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/30 uppercase font-bold">Etapa Final</span>}
                            </div>

                            <ProgressBar current={questionIndex} total={step === 'quiz' ? totalQuizQuestions : totalFinancialQuestions} />

                            <h2 className="font-heading text-xl md:text-2xl font-bold text-white mb-8 leading-tight">
                                {step === 'quiz' ? allQuestions[questionIndex].question : quizConfig.questionsFinancial[questionIndex].question}
                            </h2>

                            <div className="space-y-3">
                                {(step === 'quiz' ? allQuestions[questionIndex].options : quizConfig.questionsFinancial[questionIndex].options).map((opt: any, idx: number) => (
                                    <QuizOption
                                        key={idx}
                                        label={opt.text}
                                        selected={false} // No persistent selection state needed for this flow
                                        onClick={() => handleAnswer(opt.score, opt.value)}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 'pill1' && <KnowledgePill key="pill1" data={quizConfig.pill1} onNext={handlePillNext} />}
                    {step === 'pill2' && <KnowledgePill key="pill2" data={quizConfig.pill2} onNext={handlePillNext} />}

                    {step === 'lead' && <LeadCapture key="lead" onSubmit={handleLeadSubmit} />}

                    {step === 'calculating' && (
                        <motion.div
                            key="calculating"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <div className="relative w-24 h-24 mx-auto mb-8">
                                <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
                                <div className="absolute inset-0 border-4 border-t-premium-gold border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                                <Brain className="absolute inset-0 m-auto text-premium-gold w-8 h-8 animate-pulse" />
                            </div>
                            <h2 className="text-2xl font-heading font-bold text-white mb-2">Calculando Score...</h2>
                            <p className="text-premium-muted">Cruzando dados de sintomas x estilo de vida...</p>
                        </motion.div>
                    )}

                    {step === 'result' && userData && (
                        <ResultPage key="result" score={score} financialProfile={financialProfile} userData={userData} />
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
};
