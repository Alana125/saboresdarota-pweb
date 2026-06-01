# SPEC.md — Sabores da Rota 2.0

## 🎯 Visão do Produto

**Sabores da Rota** é uma plataforma de descoberta gastronômica regional que conecta turistas e moradores a experiências autênticas através da culinária.

O objetivo não é apenas encontrar restaurantes, mas permitir que o usuário descubra a cultura local através da comida, criando experiências memoráveis e roteiros gastronômicos.

O produto combina funcionalidades de turismo, gastronomia e recomendação inteligente em uma única plataforma.

---

## 🔥 Diferencial Principal

Ao contrário de aplicativos tradicionais de restaurantes, o Sabores da Rota prioriza:

- **Gastronomia regional** — Pratos e restaurantes típicos da região
- **Cultura local** — Histórias, tradições e autenticidade
- **Experiências autênticas** — Conexão genuína com a comunidade
- **Descoberta guiada por IA** — Recomendações inteligentes e personalizadas
- **Roteiros gastronômicos** — Jornadas temáticas (Rota da Tapioca, Rota do Café, etc.)

O usuário deve sentir que está explorando uma região através dos sabores.

---

## 👥 Público-Alvo

### Cliente
- Turistas
- Viajantes
- Moradores que desejam experimentar novos lugares
- Amantes da gastronomia

### Comerciante
- Restaurantes
- Cafeterias
- Bistrôs
- Negócios gastronômicos regionais

---

## 📋 Objetivo do MVP

Criar uma plataforma funcional onde o usuário possa:

1. ✅ Criar conta
2. ✅ Fazer login
3. ✅ Descobrir restaurantes
4. ✅ Buscar restaurantes
5. ✅ Favoritar restaurantes
6. ✅ Visualizar detalhes
7. 🔲 Fazer reservas
8. 🔲 Receber recomendações básicas

**Todo o restante é secundário até o MVP estar completo.**

---

## 📍 Fluxo Principal do Cliente

```
Splash
  ↓
Login/Cadastro
  ↓
Home
  ↓
Explorar Restaurantes
  ↓
Detalhes do Restaurante
  ↓
Reserva
  ↓
Confirmação
```

---

## 🏠 Home Page

A Home deve transmitir descoberta e experiência.

### Hero Section

**Título:**
> "Descubra sabores que contam histórias."

**Subtítulo:**
> "Explore restaurantes autênticos, pratos regionais e experiências gastronômicas únicas."

**CTA:** "Explorar Agora"

### Categorias

- 🥘 Nordestina
- 🍝 Italiana
- 🍣 Japonesa
- 🥙 Árabe
- ☕ Cafeterias
- 🍰 Doces
- 🦐 Frutos do Mar

### Restaurantes em Destaque

Cards grandes com:
- Foto
- Nome
- Localização
- Avaliação
- Breve história

**Exemplo:** "Receitas tradicionais cearenses há mais de 20 anos."

### Experiências (Roteiros Gastronômicos)

- 🌾 Rota da Tapioca
- 🦀 Rota do Caranguejo
- ☕ Rota do Café
- 🌵 Sabores do Sertão

### Próximos de Você

Utilizar geolocalização para mostrar restaurantes mais próximos do usuário.

---

## 🤖 Inteligência Artificial

A IA deve estar visível para o usuário.

### Assistente Gastronômico

**Prompt:** "O que você procura hoje?"

**Exemplos de Sugestões:**
- "Comida típica do Ceará"
- "Restaurante romântico"
- "Lugar barato perto de mim"
- "Restaurante para família"

A IA gera sugestões personalizadas baseadas em preferências, proximidade e histórico.

---

## 👤 Perfil do Usuário

### Dados Pessoais

- Nome
- Foto de perfil
- Email
- Telefone
- Endereço

### Preferências

- Tipos de culinária favoritos
- Faixa de preço
- Restrições alimentares
- Idioma preferido

### Histórico

- Restaurantes visitados
- Reservas realizadas
- Favoritos salvos
- Avaliações deixadas

---

## 💼 Dashboard do Comerciante

### Resumo

- 📅 Reservas Hoje
- 💰 Receita Semanal
- 👥 Clientes Novos
- ⭐ Avaliação Média

### Operação

- Gerenciar Reservas
- Gerenciar Cardápio
- Gerenciar Pedidos
- Responder Avaliações

### Analytics

- Reservas por período
- Pratos mais populares
- Horários de pico
- Crescimento de clientes

---

## 3. Funcionalidades por Fase

### Fase 1: MVP (Essencial) ✅

**Objetivo:** Criar MVP funcional com descoberta básica

- [x] Splash Screen com transição
- [x] Autenticação (email/password)
- [x] Home com destaques
- [x] Exploração de restaurantes
- [x] Página de detalhes do restaurante
- [x] Favoritar restaurantes
- [x] Página de favoritos
- [x] Perfil do usuário
- [ ] **Firebase Auth (configuração real)**
- [ ] **Firestore (persistência)**
- [ ] Busca por nome/tipo/localização
- [ ] Filtros básicos (preço, avaliação)

---

### Fase 2: Intermediária 🔲

**Objetivo:** Adicionar funcionalidades de localização e reservas

- [ ] Google Maps API
- [ ] Geolocalização do usuário
- [ ] Restaurantes próximos (raio configurável)
- [ ] Sistema de reservas completo (data/hora)
- [ ] Confirmação de reserva
- [ ] Notificações de reserva
- [ ] Sistema de avaliações (5 estrelas)
- [ ] Comentários e fotos
- [ ] Resposta de comerciante

---

### Fase 3: Avançada 🔲

**Objetivo:** Dashboard comerciante e analytics

- [ ] Dashboard comerciante
- [ ] Gerenciamento de reservas
- [ ] Gerenciamento de cardápio
- [ ] Pedidos e ordens
- [ ] Responder avaliações
- [ ] Analytics e relatórios
- [ ] Crescimento de clientes

---

### Fase 4: IA e Recomendações 🔲

**Objetivo:** Inteligência artificial visível ao usuário

- [ ] Assistente Gastronômico (chatbot)
- [ ] Recomendações baseadas em preferências
- [ ] Análise de histórico do usuário
- [ ] Ranking inteligente
- [ ] Tendências sazonais

---

### Fase 5: Marketplace Regional 🔲

**Objetivo:** Expandir para marketplace de produtos

- [ ] Marketplace de produtos regionais
- [ ] Roteiros gastronômicos (Rotas)
- [ ] Parcerias turísticas
- [ ] Vendedores locais

---

### Fase 6: Multilíngue e Expansão 🔲

**Objetivo:** Suporte global

- [ ] Interface multilíngue
- [ ] Tradução automática
- [ ] Suporte a múltiplas moedas
- [ ] Documentação multilíngue

---

## 4. Banco de Dados Firestore

Estrutura recomendada para o Firestore:

```
firestore/
├── users/{userId}
│   ├── name: string
│   ├── email: string
│   ├── profileType: "client" | "merchant"
│   ├── preferences: array
│   ├── avatar: string (URL)
│   └── createdAt: timestamp
├── restaurants/{restaurantId}
│   ├── name: string
│   ├── location: geopoint
│   ├── address: string
│   ├── phone: string
│   ├── email: string
│   ├── cuisine: array
│   ├── priceRange: "cheap" | "moderate" | "expensive"
│   ├── rating: number
│   ├── description: string
│   ├── image: string (URL)
│   ├── hours: object
│   └── createdAt: timestamp
├── favorites/{userId}
│   └── restaurantIds: array
├── reservations/{reservationId}
│   ├── userId: string
│   ├── restaurantId: string
│   ├── date: timestamp
│   ├── time: string
│   ├── guests: number
│   ├── status: "pending" | "confirmed" | "cancelled"
│   └── createdAt: timestamp
├── reviews/{reviewId}
│   ├── restaurantId: string
│   ├── userId: string
│   ├── rating: number (1-5)
│   ├── comment: string
│   ├── images: array
│   └── createdAt: timestamp
├── menus/{restaurantId}
│   └── items: array (dishes)
├── notifications/{userId}
│   └── items: array
├── categories
│   └── documents: array (cuisine types)
└── routes (roteiros gastronômicos)
    └── documents: array
```

---

## 5. Stack Tecnológico

### Frontend
- **React 19** — UI framework
- **Vite 5.4** — Build tool
- **Styled Components 6.4** — CSS-in-JS
- **React Router 7** — Roteamento
- **Lucide React 1.16** — Ícones

### Backend
- **Node.js 20+** — Runtime
- **Express.js** — Framework web
- **Firebase Admin SDK** — Autenticação e dados
- **Express Validator** — Validação

### Banco de Dados
- **Firebase Firestore** — NoSQL em tempo real
- **Firebase Storage** — Armazenamento de arquivos
- **Firebase Auth** — Autenticação

### Integrações
- **Google Maps API** — Mapas e geolocalização
- **Google Geocoding API** — Conversão de endereços
- **Firebase Cloud Messaging** — Notificações push
- **Stripe** (futuro) — Pagamentos

---

## 6. Diretriz de UX/UI

O sistema deve parecer uma experiência gastronômica **premium**.

### Inspirações
- 🏨 Airbnb — Descoberta visual
- 🏩 Booking — Interface limpa
- ⭐ Michelin Guide — Sofisticação
- 🗺️ Google Travel — Exploração

### O que Evitar
- ❌ Aparência de catálogo simples
- ❌ Design genérico
- ❌ Falta de contexto cultural

### O que Priorizar
- ✅ Descoberta e curiosidade
- ✅ Cultura local
- ✅ Experiências memoráveis
- ✅ Premium e sofisticado
- ✅ Narrativa de cada restaurante

Toda tela deve transmitir **descoberta, cultura local e experiência**.

---

## 7. Ordem de Desenvolvimento

### FASE 1 (Obrigatória para MVP)
1. ✅ Setup React/Vite
2. ✅ Design System completo
3. ✅ Componentes base
4. ✅ Páginas principais (Home, Explore, Restaurant, Favorites, Profile)
5. **🔲 Firebase Auth (real)**
6. **🔲 Firestore (persistência)**
7. 🔲 Busca e filtros
8. 🔲 Sincronização de favoritos

### FASE 2 (Próxima prioridade)
1. Google Maps API
2. Geolocalização do usuário
3. Restaurantes próximos
4. Sistema de reservas
5. Notificações básicas

### FASE 3
1. Dashboard comerciante
2. Analytics e relatórios
3. Gerenciamento de cardápio

### FASE 4
1. IA Recomendadora
2. Assistente Gastronômico
3. Previsões inteligentes

### FASE 5
1. Marketplace Regional
2. Roteiros Gastronômicos
3. Parcerias

### FASE 6
1. Multilíngue
2. Expansão global

---

## 4. Arquitetura Técnica

```
src/
├── components/        # Componentes reutilizáveis
│   ├── BrandNavbar.jsx
│   ├── Sidebar.jsx
│   ├── PrimaryButton.jsx
│   ├── SecondaryButton.jsx
│   ├── InputField.jsx
│   ├── Card.jsx
│   ├── RestaurantCard.jsx
│   ├── SectionHeader.jsx
│   └── SpecsNav.jsx
├── pages/            # Páginas/rotas
│   ├── Splash.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Home.jsx
│   ├── Explore.jsx
│   ├── Restaurant.jsx
│   ├── Favorites.jsx
│   ├── Profile.jsx
│   ├── MerchantDashboard.jsx
│   ├── MerchantOrders.jsx
│   ├── MerchantReservations.jsx
│   ├── MerchantReviews.jsx
│   ├── MerchantReports.jsx
│   ├── MerchantSettings.jsx
│   ├── SpecOverview.jsx
│   ├── SpecRequirements.jsx
│   ├── SpecTasks.jsx
│   ├── SpecFunctionality.jsx
│   ├── ForgotPassword.jsx
│   └── NotFound.jsx
├── styles/           # Design system
│   ├── theme.js
│   └── global.js
├── data/             # Dados mockados
│   └── mockRestaurants.js
└── App.jsx           # Roteamento principal
```

### 4.3 Fluxo de Dados

```
Frontend (React)
    ↓
Autenticação (Firebase)
    ↓
Banco de Dados (Firestore)
    ↓
Backend (Node.js/Express)
    ↓
Integrações (Google Maps, etc)
    ↓
Sincronização em Tempo Real
```

---

## 5. Design System

### 5.1 Paleta de Cores

| Nome | HEX | Uso |
|------|------|------|
| Bege Claro | #F5EBDD | Fundo principal |
| Marrom Escuro | #3B2621 | Botões e textos primários |
| Marrom Médio | #5A3D33 | Hover e estados |
| Caramelo | #C98B5B | Destaques e acentos |
| Areia | #D9B89C | Bordas e campos |
| Marrom Texto | #7A5C4E | Texto secundário |

### 5.2 Tipografia

| Elemento | Fonte | Peso | Tamanho |
|----------|-------|------|--------|
| Logo | Playfair Display | Bold | 36px |
| Título | Playfair Display | Bold | 28px |
| Subtítulo | Poppins | Medium | 18px |
| Corpo | Poppins | Regular | 14px |
| Botão | Poppins | SemiBold | 16px |

### 5.3 Componentes

#### Botão Primário
```css
background: #3B2621;
color: white;
height: 52px;
border-radius: 12px;
font-weight: 600;
```

#### Botão Secundário
```css
border: 1px solid #3B2621;
background: transparent;
color: #3B2621;
border-radius: 12px;
```

#### Input
```css
background: #FFF8F2;
border: 1px solid #D9B89C;
border-radius: 10px;
padding: 14px;
```

#### Card
```css
background: white;
border-radius: 16px;
box-shadow: 0 4px 12px rgba(0,0,0,0.08);
padding: 24px;
```

### 5.4 Espaçamento

| Tipo | Valor |
|------|-------|
| XS | 8px |
| SM | 16px |
| MD | 24px |
| LG | 32px |
| XL | 48px |

---

## 6. Requerimentos Funcionais

### 6.1 MVP (Fase 1)

- [x] Splash screen com fade
- [x] Login/Cadastro com validação
- [x] Home com destaques
- [x] Exploração de restaurantes com filtros
- [x] Página de restaurante com detalhes
- [x] Favoritar restaurantes
- [x] Perfil do usuário
- [ ] Busca por texto
- [ ] Autenticação com Firebase
- [ ] Persistência de dados

### 6.2 Fase 2

- [ ] GPS e localização
- [ ] Mapa interativo
- [ ] Restaurantes próximos
- [ ] Sistema de reservas completo
- [ ] Notificações push
- [ ] Avaliações com comentários

### 6.3 Fase 3

- [ ] IA de recomendação
- [ ] Análise de clima
- [ ] Dashboard comerciante avançado
- [ ] Multilíngue
- [ ] Marketplace regional
- [ ] Relatórios inteligentes

---

## 7. Requerimentos Não-Funcionais

### 7.1 Performance
- [ ] Tempo de carregamento < 3s
- [ ] Otimização de imagens
- [ ] Lazy loading de restaurantes
- [ ] Cache de dados

### 7.2 Segurança
- [ ] Validação de inputs
- [ ] Proteção de dados sensíveis
- [ ] Autenticação OAuth segura
- [ ] HTTPS obrigatório

### 7.3 Acessibilidade
- [ ] Contraste de cores WCAG AA
- [ ] Navegação por teclado
- [ ] Leitores de tela compatíveis
- [ ] Textos alternativos em imagens

### 7.4 Responsividade
- [ ] Mobile: 390px
- [ ] Tablet: 768px
- [ ] Desktop: 1440px+
- [ ] Touch-friendly em mobile

---

## 8. Roadmap

### T1 (Maio - Junho 2026)
- [x] Setup do projeto React/Vite
- [x] Criar componentes base
- [x] Design system completo
- [x] Páginas de exploração
- [ ] Autenticação Firebase
- [ ] Banco de dados Firestore

### T2 (Julho - Agosto 2026)
- [ ] GPS e localização
- [ ] Sistema de reservas
- [ ] Dashboard comerciante básico
- [ ] Avaliações e comentários
- [ ] Notificações

### T3 (Setembro - Outubro 2026)
- [ ] IA de recomendação
- [ ] Multilíngue
- [ ] Marketplace regional
- [ ] Relatórios avançados

---

## 9. Tarefas de Desenvolvimento

### Frontend (8/20)
- [x] Splash Screen
- [x] Login e Cadastro
- [x] Home
- [x] Explorar Restaurantes
- [x] Página de Restaurante
- [x] Perfil
- [x] Specs e Documentação
- [x] Navbar e Sidebar
- [ ] Busca completa
- [ ] Carrinho/Produtos
- [ ] Checkout
- [ ] Pagamento

### Backend (0/12)
- [ ] Setup Node.js/Express
- [ ] Autenticação Firebase
- [ ] API de Restaurantes
- [ ] API de Usuários
- [ ] API de Reservas
- [ ] API de Favoritos
- [ ] API de Avaliações
- [ ] API de Cardápios
- [ ] API de Pedidos
- [ ] API de Pagamento
- [ ] Notificações
- [ ] Relatórios

### Integrações (0/6)
- [ ] Google Maps API
- [ ] Google Geocoding
- [ ] Firebase Storage
- [ ] Firebase Cloud Messaging
- [ ] Payment Gateway (Stripe/PayPal)
- [ ] Email Service

### IA (0/4)
- [ ] Modelo de recomendação
- [ ] Análise de clima
- [ ] Clustering de preferências
- [ ] Previsão de tendências

---

## 10. Como Executar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```

Abra `http://localhost:5173`

### Build
```bash
npm run build
```

### Pré-visualização
```bash
npm run preview
```

---

## 11. Variáveis de Ambiente

```env
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=xxx
VITE_FIREBASE_PROJECT_ID=xxx
VITE_FIREBASE_STORAGE_BUCKET=xxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
VITE_FIREBASE_APP_ID=xxx
VITE_GOOGLE_MAPS_KEY=xxx
VITE_API_URL=http://localhost:3000
```

---

## 12. Próximas Prioridades

1. **Integrar Firebase** para autenticação real
2. **Setup de Backend** com Node.js e Express
3. **Criação de Firestore** com coleções
4. **Google Maps API** para localização
5. **Sistema de Reservas** completo

---

## 13. Links de Referência

### Páginas de Especificação
- `/specs` — Visão Geral
- `/specs/requirements` — Requerimentos
- `/specs/tasks` — Tarefas
- `/specs/functionality` — Funcionamento

### Documentação
- Figma: [Link ao design]
- Backend Repo: [Link ao repositório]
- API Docs: [Link à documentação da API]

---

## 14. Notas

- Design inspirado em Airbnb, iFood Gourmet e Booking
- Foco em experiência de usuário premium e intuitiva
- Expansão planejada para marketplace e roteiros gastronômicos
- Suporte multilíngue desde a arquitetura

---

**Versão:** 1.0  
**Última Atualização:** 25 de Maio de 2026  
**Status:** Em Desenvolvimento
