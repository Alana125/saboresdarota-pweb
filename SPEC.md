# SPEC.md — Sabores da Rota

## 1. Visão Geral

**Sabores da Rota** é uma plataforma web de descoberta gastronômica regional que conecta turistas e locais a restaurantes autênticos, experiências culturais e sabores regionais.

A interface utiliza design **Warm Minimalism** com tons terrosos, transmitindo acolhimento, sofisticação e experiência premium.

---

## 2. Pilares do Projeto

### 🎯 Descoberta Gastronômica
Exploração intuitiva de restaurantes regionais com filtros e recomendações personalizadas.

### 📍 Localização Inteligente
GPS e recomendações baseadas em proximidade, clima e gosto do usuário.

### 👥 Comunidade Premium
Favoritos, reservas, avaliações colaborativas e histórico de visitações.

### 🤖 IA Recomendadora
Sistema inteligente de sugestões baseado em preferências, clima e tendências.

### 💼 Dashboard Comerciante
Gestão operacional, relatórios e análise de vendas para restaurantes.

### 🌍 Expansão Global
Multilíngue, marketplace regional e roteiros gastronômicos.

---

## 3. Funcionalidades por Fase

### Fase 1: MVP (Essencial) — Prioridade 1

#### 3.1 Autenticação
- [ ] Cadastro com email e senha
- [ ] Login com email/Google
- [ ] Recuperação de senha
- [ ] Dois tipos de conta: Cliente e Comerciante

#### 3.2 Exploração
- [x] Splash Screen
- [x] Home com destaques
- [x] Lista de restaurantes com cards
- [x] Página de restaurante com detalhes
- [ ] Busca simples por nome/tipo/localização
- [ ] Filtros básicos (preço, avaliação, tipo)

#### 3.3 Favoritos
- [x] Adicionar/remover favoritos
- [x] Página de favoritos
- [ ] Sincronização entre dispositivos
- [ ] Organização por categorias

#### 3.4 Perfil
- [x] Página de perfil do usuário
- [ ] Editar dados pessoais
- [ ] Histórico de reservas
- [ ] Preferências gastronômicas
- [ ] Alterar idioma

#### 3.5 Design
- [x] Paleta de cores conforme SPEC
- [x] Tipografia (Playfair + Poppins)
- [x] Componentes base (Botão, Input, Card)
- [x] Navbar e Sidebar
- [x] Layout responsivo

---

### Fase 2: Intermediária — Prioridade 2

#### 3.6 GPS e Localização
- [ ] Integração com Google Maps API
- [ ] Detecção de localização do usuário
- [ ] Restaurantes próximos (raio configurável)
- [ ] Geocoding de endereços

#### 3.7 Reservas
- [ ] Seleção de data e hora
- [ ] Verificação de disponibilidade
- [ ] Confirmação automática
- [ ] Notificações de reserva
- [ ] Cancelamento e modificação

#### 3.8 Avaliações
- [ ] Sistema de 5 estrelas
- [ ] Comentários e fotos
- [ ] Resposta de comerciante
- [ ] Filtrar por avaliação

---

### Fase 3: Avançada — Prioridade 3

#### 3.9 IA e Recomendações
- [ ] Análise de histórico do usuário
- [ ] Recomendações baseadas em clima
- [ ] Sugestão de pratos populares
- [ ] Ranking inteligente
- [ ] Tendências sazonais

#### 3.10 Dashboard Comerciante
- [ ] Visão geral de métricas
- [ ] Gerenciamento de reservas
- [ ] Pedidos recebidos
- [ ] Avaliações de clientes
- [ ] Relatórios de vendas
- [ ] Gerenciamento de cardápio

#### 3.11 Multilíngue
- [ ] Troca de idioma
- [ ] Tradução automática de conteúdo
- [ ] Interface em múltiplos idiomas

#### 3.12 Expansão
- [ ] Marketplace de produtos regionais
- [ ] Roteiros gastronômicos
- [ ] Parcerias turísticas

---

## 4. Arquitetura Técnica

### 4.1 Stack Tecnológico

| Camada | Tecnologia | Status |
|--------|-----------|--------|
| Frontend | React 19 + Vite | ✅ Pronto |
| Estilo | Styled-components | ✅ Pronto |
| Roteamento | React Router v7 | ✅ Pronto |
| Ícones | Lucide React | ✅ Pronto |
| Autenticação | Firebase Auth | ⏳ Pendente |
| BD em Tempo Real | Firestore | ⏳ Pendente |
| Backend | Node.js + Express | ⏳ Pendente |
| Storage | Firebase Storage | ⏳ Pendente |
| Mapas | Google Maps API | ⏳ Pendente |
| Notificações | Firebase Cloud Messaging | ⏳ Pendente |

### 4.2 Arquitetura de Pasta

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
