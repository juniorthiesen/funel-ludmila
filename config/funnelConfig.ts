export const funnelConfig = {
    products: {
        urgency: {
            id: "protocolo-10-dias",
            name: "Protocolo 10 Dias Sem Dores",
            price: 97.00,
            displayPrice: "R$ 97,00",
            checkoutUrl: "https://pay.kiwify.com.br/PROTOCOL10D" // Placeholder
        },
        autonomy: {
            id: "protocolo-3a",
            name: "Protocolo 3A: O Tratamento Completo",
            price: 297.00,
            displayPrice: "R$ 297,00",
            checkoutUrl: "https://pay.kiwify.com.br/PROTOCOL3A" // Placeholder
        },
        highTicket: {
            id: "consultoria-ppls",
            name: "Consultoria PPLS",
            price: 1997.00,
            displayPrice: "R$ 1.997,00",
            contactUrl: "https://wa.me/5511999999999" // Replace with actual WhatsApp
        },
        byeDor1Month: {
            id: "byedor-1-mes",
            name: "ByeDor (1 Mês de Tratamento)",
            price: 149.90,
            displayPrice: "R$ 149,90",
            checkoutUrl: "https://pay.kiwify.com.br/BYEDOR1M" // Placeholder
        },
        byeDor3Months: {
            id: "byedor-3-meses",
            name: "ByeDor (3 Meses de Tratamento)",
            price: 297.00, // Aggressive offer for 3 months (Buy 2 Get 1 Free approx)
            displayPrice: "R$ 297,00",
            checkoutUrl: "https://pay.kiwify.com.br/BYEDOR3M" // Placeholder
        }
    },
    scoring: {
        urgencyThreshold: 150, // Scores below this get Autonomy, above get Urgency (logic inverted in code? check Quiz.tsx)
        highTicketThreshold: 120 // Scores above this + High Financial Profile get High Ticket Upsell
    }
};
