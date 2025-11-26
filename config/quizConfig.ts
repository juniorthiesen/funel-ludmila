import React from 'react';
import { Battery, Brain } from 'lucide-react';

export const quizConfig = {
    questionsFase1: [
        {
            id: 1,
            question: "Há quanto tempo você convive com o diagnóstico ou com as dores da fibromialgia?",
            options: [
                { text: "Menos de 2 anos", score: 10 },
                { text: "De 2 a 5 anos", score: 20 },
                { text: "De 5 a 10 anos", score: 30 },
                { text: "Mais de 10 anos", score: 40 }
            ]
        },
        {
            id: 2,
            question: "Se você pudesse acordar amanhã sem dor, o que faria primeiro?",
            options: [
                { text: "Viajaria e conheceria novos lugares", score: 10 },
                { text: "Voltaria a praticar atividades que amo", score: 20 },
                { text: "Passaria mais tempo de qualidade com minha família", score: 20 },
                { text: "Investiria em mim mesma e na minha saúde", score: 10 }
            ]
        },
        {
            id: 3,
            question: "O que a fibromialgia mais roubou de você?",
            options: [
                { text: "Minha energia para aproveitar a vida", score: 20 },
                { text: "Minha liberdade de fazer o que gosto", score: 20 },
                { text: "Minha alegria e relações com as pessoas", score: 30 },
                { text: "Tudo isso junto (Energia, Liberdade e Alegria)", score: 40 }
            ]
        }
    ],
    pill1: {
        title: "Analisando Nível de Energia Mitocondrial...",
        // Note: Icons need to be handled in the component or passed as strings if we want full JSON purity, 
        // but for this config file, keeping JSX is fine for internal use.
        iconName: "Battery",
        content: "A Fibromialgia não é 'coisa da sua cabeça'. É uma falha nas suas baterias celulares (Mitocôndrias). Quando elas falham, seu músculo fica sem energia e 'trava', gerando a dor crônica e o cansaço que não passa nem dormindo.",
        highlight: "Você não é preguiçosa. Você está biologicamente sem bateria.",
        image: "/images/dor-critica.png"
    },
    questionsFase2: [
        {
            id: 4,
            question: "Como você se sentiria se tivesse sua energia e vitalidade de volta?",
            options: [
                { text: "Realizada e confiante", score: 10 },
                { text: "Livre e em paz", score: 10 },
                { text: "Mais bonita, saudável e disposta", score: 20 },
                { text: "Pronta para viver tudo o que sempre sonhei", score: 20 }
            ]
        },
        {
            id: 5,
            question: "De 0 a 10, quanto a fibromialgia impacta seu humor e suas relações pessoais?",
            options: [
                { text: "De 1 a 3 – Impacta pouco", score: 10 },
                { text: "De 4 a 6 – Impacta de forma moderada", score: 20 },
                { text: "De 7 a 8 – Impacta muito", score: 30 },
                { text: "De 9 a 10 – Impacta completamente", score: 40 }
            ]
        },
        {
            id: 6,
            question: "Quais são os maiores desafios que a fibromialgia traz no seu dia a dia?",
            options: [
                { text: "Trabalhar com alto desempenho", score: 20 },
                { text: "Dormir bem e acordar descansada", score: 30 },
                { text: "Manter a autoestima e confiança", score: 20 },
                { text: "Viver com energia para tudo o que desejo", score: 30 }
            ]
        }
    ],
    pill2: {
        title: "Calculando Nível de Neuroinflamação...",
        iconName: "Brain",
        content: "Sabia que 90% da Serotonina (o hormônio que alivia a dor e traz alegria) é produzida no seu intestino? Se você tem intestino preso, gases ou estufamento, você parou de produzir seu 'analgésico natural'.",
        highlight: "Sem tratar o intestino, nenhum antidepressivo funcionará a longo prazo.",
        image: "/images/dor-critica.png"
    },
    questionsFase3: [
        {
            id: 7,
            question: "Você já tentou algum tratamento que não funcionou como esperava?",
            options: [
                { text: "Sim, vários tratamentos convencionais (Remédios)", score: 30 },
                { text: "Sim, terapias alternativas", score: 20 },
                { text: "Sim, já consultei médicos renomados mas sem sucesso", score: 40 },
                { text: "Nunca encontrei algo que trouxesse resultados consistentes", score: 30 }
            ]
        },
        {
            id: 8,
            question: "Se tivesse uma solução real para suas dores, o que mudaria em 6 meses?",
            options: [
                { text: "Teria mais liberdade e qualidade de vida", score: 10 },
                { text: "Viveria sem medo das crises e limitações", score: 20 },
                { text: "Retomaria projetos pessoais e profissionais", score: 20 },
                { text: "Realizaria sonhos que antes pareciam impossíveis", score: 30 }
            ]
        }
    ],
    questionsFinancial: [
        {
            id: 9,
            question: "Em média, quanto você gasta por mês com medicamentos ou tratamentos?",
            options: [
                { text: "Até R$ 500", value: "low" },
                { text: "De R$ 500 a R$ 1.500", value: "med" },
                { text: "De R$ 1.500 a R$ 3.000", value: "high" },
                { text: "Acima de R$ 3.000", value: "very_high" }
            ]
        },
        {
            id: 10,
            question: "De 0 a 100, quanto você está disposta a investir em um novo tratamento definitivo?",
            options: [
                { text: "Menos de 30% (Estou cética)", value: "low" },
                { text: "Entre 30% e 50%", value: "med" },
                { text: "Entre 50% e 70%", value: "high" },
                { text: "Mais de 70% (Faço o que for preciso)", value: "very_high" }
            ]
        },
        {
            id: 11,
            question: "Você tem plano de saúde?",
            options: [
                { text: "Sim, básico", value: "basic" },
                { text: "Sim, intermediário", value: "mid" },
                { text: "Sim, premium", value: "premium" },
                { text: "Não, prefiro tratamentos particulares", value: "private" }
            ]
        },
        {
            id: 12,
            question: "Já buscou tratamento com médicos renomados ou especialistas famosos?",
            options: [
                { text: "Sim, mas não tive resultado", value: "tried" },
                { text: "Sim, tive pequenas melhoras", value: "tried_some" },
                { text: "Sim, mas não era o que eu esperava", value: "tried_bad" },
                { text: "Ainda não, mas tenho interesse em alto nível", value: "interested" }
            ]
        }
    ],
    results: {
        urgency: {
            headline: "Atenção, {name}: Seu Nível de Inflamação é CRÍTICO",
            subhead: "Seu corpo está em 'Alerta Vermelho'. As dores não vão passar sozinhas.",
            body: "Nossa análise detectou que suas mitocôndrias estão colapsando. Você não está apenas com dor, você está sofrendo de 'Inanição Energética Celular'. Seus remédios apenas mascaram o sintoma, mas o incêndio continua queimando.",
            solution: "Você precisa de um 'Pronto Socorro' metabólico. Não adianta tentar mudar a vida toda hoje. Você precisa APAGAR O INCÊNDIO agora para voltar a raciocinar.",
            cta: "Quero Alívio Imediato em 10 Dias",
            image: "/images/dor-critica.png"
        },
        autonomy: {
            headline: "Olá, {name}. Detectamos um Bloqueio Metabólico Silencioso",
            subhead: "Você corre perigo de entrar num ciclo de dor irreversível se não agir.",
            body: "Seus sintomas mostram que a inflamação está começando a afetar sua produção hormonal. Você ainda tem momentos bons, mas eles estão ficando mais raros. O perigo aqui é se acostumar com a dor.",
            solution: "Você não precisa de remédios mais fortes. Você precisa aprender a 'pescar'. Precisa de um método completo para desinflamar seu intestino e recuperar seu sono profundo.",
            cta: "Quero Tratar a Raiz do Problema",
            image: "/images/dor-critica.png"
        }
    }
};
