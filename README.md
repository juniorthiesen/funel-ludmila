# 10 Dias Sem Dores - Funnel de Vendas | Dra. Ludmila Simões

Este projeto é um funil de vendas interativo (Quiz + Página de Vendas) desenvolvido para a Dra. Ludmila Simões, focado no produto "Protocolo 10 Dias Sem Dor" e upsells relacionados.

## 🚀 Tecnologias Utilizadas

- **React** + **Vite** (Frontend rápido e moderno)
- **Tailwind CSS** (Estilização)
- **Framer Motion** (Animações fluidas)
- **Supabase** (Banco de dados para captura de leads)
- **React Router DOM** (Navegação)

---

## 🛠️ Configuração para Produção

Para colocar este projeto no ar, você precisa configurar algumas variáveis e serviços externos.

### 1. Instalação

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

```bash
# Instalar dependências
npm install
```

### 2. Configuração do Banco de Dados (Supabase)

O projeto utiliza o Supabase para salvar os leads do Quiz.

1.  Crie um projeto no [Supabase](https://supabase.com/).
2.  Crie uma tabela chamada `leads_byedor` com as seguintes colunas:
    *   `id` (uuid, primary key, default: gen_random_uuid())
    *   `created_at` (timestamptz, default: now())
    *   `updated_at` (timestamptz, nullable)
    *   `name` (text)
    *   `phone` (text)
    *   `score_partial` (int4, nullable)
    *   `final_score` (int4, nullable)
    *   `financial_profile` (text, nullable)
    *   `recommended_product` (text, nullable)

### 3. Variáveis de Ambiente (.env)

Crie um arquivo `.env.local` na raiz do projeto (baseado no exemplo abaixo) e adicione suas credenciais do Supabase:

```env
VITE_SUPABASE_URL=https://sua-url-do-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima-publica
```

### 4. Configuração de Analytics e Pixels

Para rastreamento de tráfego, você deve editar o arquivo `index.html` na raiz do projeto:

*   **Meta Pixel (Facebook):** Procure por `YOUR_PIXEL_ID` e substitua pelo ID do seu Pixel.
*   **Google Analytics (GA4):** Procure por `YOUR_GA_ID` e substitua pelo seu ID de Medição (G-XXXXXXXXXX).

### 5. Links de Checkout (Kiwify/Hotmart)

Os links de pagamento precisam ser configurados para que os botões de compra funcionem corretamente.

1.  Abra o arquivo `src/config/funnelConfig.ts`.
2.  Atualize os campos `checkoutUrl` para cada produto (`urgency`, `autonomy`, `byeDor1Month`, `byeDor3Months`).
3.  **Importante:** Na página de oferta (`src/pages/Offer10DaysPage.tsx`), existem lógicas de "Bundle" (Pacotes) que usam links específicos. Procure por `https://pay.kiwify.com.br/BUNDLE_...` e substitua pelos links dos seus checkouts personalizados para:
    *   **3A + ByeDor 3 Meses + 10 Dias Grátis**
    *   **3A + ByeDor 1 Mês + 10 Dias (R$ 67)**
    *   **ByeDor 3 Meses + 10 Dias (R$ 47)**

---

## 📦 Como Buildar (Gerar Versão Final)

Para gerar os arquivos otimizados para hospedagem (Vercel, Netlify, Hostinger, etc.):

```bash
npm run build
```

Isso criará uma pasta `dist` na raiz do projeto. O conteúdo desta pasta é o que deve ser enviado para o seu servidor de hospedagem.

### Testar a Build Localmente

Antes de subir, você pode testar a versão final no seu computador:

```bash
npm run preview
```

---

## 📝 Estrutura do Projeto

*   `/src/components`: Componentes reutilizáveis (Quiz, Header, Botões).
*   `/src/pages`: Páginas principais (Offer10DaysPage).
*   `/src/config`: Configurações globais do funil (Preços, Links, Textos do Quiz).
*   `/src/lib`: Configuração do cliente Supabase.
*   `/src/utils`: Utilitários de Analytics.

---

## 🚑 Suporte

Em caso de dúvidas sobre a implementação, verifique se as variáveis de ambiente estão carregadas corretamente e se o Supabase está aceitando conexões (RLS Policies podem precisar de ajuste para permitir `INSERT` e `UPDATE` públicos ou autenticados anonimamente).
# funel-ludmila
