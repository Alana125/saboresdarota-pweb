# ARCHITECTURE.md — Arquitetura Técnica

## 1. Stack Tecnológico

### Frontend (✅ Pronto)
- **React 19** — UI framework moderno
- **Vite 5.4** — Build tool ultrarrápido
- **Styled Components 6.4** — CSS-in-JS com componentes
- **React Router 7** — Roteamento declarativo
- **Lucide React 1.16** — Ícones SVG

### Backend (🔲 A Fazer - FASE 2)
- **Node.js 20+** — Runtime JavaScript
- **Express.js** — Framework web leve
- **Firebase Admin SDK** — Gerenciamento de autenticação
- **Express Validator** — Validação de dados

### Banco de Dados (🔲 Firebase - Configurar em FASE 1)
- **Firebase Firestore** — NoSQL em tempo real
- **Firebase Storage** — Armazenamento de arquivos/imagens
- **Firebase Auth** — Autenticação segura

### Integrações (🔲 Futuro)
- **Google Maps API v3** — Mapas e geolocalização
- **Google Geocoding API** — Conversão de endereços
- **Firebase Cloud Messaging** — Notificações push
- **Stripe** — Pagamentos (FASE 5+)

---

## 2. Diagrama de Arquitetura Geral

```
┌─────────────────────────────────────────────────────┐
│              Frontend (React/Vite)                   │
│  ┌──────────────────────────────────────────────┐  │
│  │  Pages: Home, Explore, Restaurant, Profile  │  │
│  │  Dashboard, Favorites, Auth                  │  │
│  └──────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────┐  │
│  │  Components: Navbar, Card, Button, Input     │  │
│  │  SectionHeader, RestaurantCard, Sidebar      │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────┬──────────────────────────────────┘
                  │
        ┌─────────┴──────────────┬────────────┐
        ▼                        ▼            ▼
   ┌──────────┐          ┌────────────┐  ┌─────────┐
   │ Firebase │          │ Google     │  │ Backend │
   │ Auth     │          │ Maps API   │  │ API     │
   │          │          │            │  │ (Future)│
   └────┬─────┘          └────────────┘  └─────────┘
        │
        ▼
   ┌──────────────┐
   │ Firestore    │
   │ Database     │
   │              │
   │ Collections: │
   │ - users      │
   │ - restaurants│
   │ - favorites  │
   │ - reservations
   │ - reviews    │
   │ - menus      │
   │ - categories │
   │ - routes     │
   └──────────────┘
```

---

## 3. Fluxo de Dados

### Fase 1 (MVP)
```
Usuário
  ↓
React Component (Home, Explore, etc)
  ↓
AuthContext / State Management
  ↓
Firebase SDK
  ↓
Firebase (Auth + Firestore)
  ↓
Local State / React State
  ↓
Renderização UI
```

### Fase 2+ (Com Backend)
```
Usuário
  ↓
React Component
  ↓
API Service (Axios/Fetch)
  ↓
Backend API (Node.js/Express)
  ↓
Firebase Admin SDK
  ↓
Firebase (Firestore + Storage)
  ↓
Response → Frontend → Update UI
```

---

## 4. Estrutura Firestore

### Coleção: `users`
```json
users/{userId}
├── name: string
├── email: string
├── profileType: "client" | "merchant"
├── avatar: string (URL Firebase Storage)
├── phone: string
├── address: string
├── preferences: {
│   cuisines: array,
│   priceRange: "cheap" | "moderate" | "expensive",
│   restrictions: array (vegetarian, etc)
│ }
├── language: "pt-BR" | "en" | ...
├── createdAt: timestamp
├── updatedAt: timestamp
└── lastLogin: timestamp
```

### Coleção: `restaurants`
```json
restaurants/{restaurantId}
├── name: string
├── email: string
├── phone: string
├── address: string
├── location: geopoint {latitude, longitude}
├── cuisine: array ["Nordestina", "Italiana"]
├── priceRange: "cheap" | "moderate" | "expensive"
├── rating: number (0-5)
├── reviewCount: number
├── description: string
├── image: string (URL)
├── hours: {
│   monday: {open: "11:00", close: "23:00"},
│   ...
│ }
├── createdAt: timestamp
└── updatedAt: timestamp
```

### Subcoleção: `restaurants/{restaurantId}/reviews`
```json
reviews/{reviewId}
├── userId: string
├── userName: string
├── rating: number (1-5)
├── comment: string
├── images: array (URLs)
├── createdAt: timestamp
└── helpful: number
```

### Subcoleção: `restaurants/{restaurantId}/menu`
```json
menu/{itemId}
├── name: string
├── description: string
├── price: number
├── category: string (entradas, pratos, sobremesas)
├── image: string (URL)
├── available: boolean
└── createdAt: timestamp
```

### Coleção: `favorites`
```json
favorites/{userId}
├── restaurantIds: array [restaurantId1, restaurantId2, ...]
└── updatedAt: timestamp
```

### Coleção: `reservations`
```json
reservations/{reservationId}
├── userId: string
├── restaurantId: string
├── date: timestamp
├── time: string ("19:30")
├── guests: number
├── specialRequests: string
├── status: "pending" | "confirmed" | "cancelled" | "completed"
├── createdAt: timestamp
├── updatedAt: timestamp
└── userNotes: string
```

### Coleção: `notifications`
```json
notifications/{userId}
├── items: array [
│   {
│     id: string,
│     title: string,
│     message: string,
│     type: "reservation" | "review" | "promotion",
│     read: boolean,
│     createdAt: timestamp
│   }
│ ]
└── lastRead: timestamp
```

### Coleção: `categories`
```json
categories
├── Nordestina: {icon, color, description}
├── Italiana: {icon, color, description}
├── Japonesa: {icon, color, description}
├── Árabe: {icon, color, description}
├── Cafeterias: {icon, color, description}
├── Doces: {icon, color, description}
└── Frutos do Mar: {icon, color, description}
```

### Coleção: `routes` (Roteiros Gastronômicos)
```json
routes/{routeId}
├── name: string ("Rota da Tapioca")
├── description: string
├── restaurants: array [restaurantId1, restaurantId2, ...]
├── distance: number (km)
├── duration: number (horas)
├── image: string (URL)
├── createdAt: timestamp
└── difficulty: "easy" | "medium" | "hard"
```

---

## 5. Estrutura de Pastas do Projeto

```
saboresdaota-pweb/
├── src/
│   ├── config/
│   │   └── firebase.js              # Configuração Firebase
│   ├── context/
│   │   ├── AuthContext.jsx          # Contexto de autenticação
│   │   └── AppContext.jsx           # Contexto global
│   ├── services/
│   │   ├── auth.js                  # Funções de autenticação
│   │   ├── firestore.js             # Operações Firestore
│   │   ├── search.js                # Busca e filtros
│   │   └── storage.js               # Upload de arquivos
│   ├── hooks/
│   │   ├── useAuth.js               # Hook de autenticação
│   │   ├── useRestaurants.js        # Hook de restaurantes
│   │   └── useFavorites.js          # Hook de favoritos
│   ├── components/
│   │   ├── BrandNavbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── PrimaryButton.jsx
│   │   ├── SecondaryButton.jsx
│   │   ├── InputField.jsx
│   │   ├── RestaurantCard.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── SpecsNav.jsx
│   │   └── Card.jsx
│   ├── pages/
│   │   ├── Splash.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── Restaurant.jsx
│   │   ├── Favorites.jsx
│   │   ├── Profile.jsx
│   │   ├── MerchantDashboard.jsx
│   │   ├── MerchantOrders.jsx
│   │   ├── MerchantReservations.jsx
│   │   ├── MerchantReviews.jsx
│   │   ├── MerchantReports.jsx
│   │   ├── MerchantSettings.jsx
│   │   ├── SpecOverview.jsx
│   │   ├── SpecRequirements.jsx
│   │   ├── SpecTasks.jsx
│   │   ├── SpecFunctionality.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   └── mockRestaurants.js       # Dados de teste
│   ├── styles/
│   │   ├── theme.js                 # Design tokens (cores, tipografia)
│   │   └── global.js                # Estilos globais
│   ├── App.jsx                      # Roteamento principal
│   ├── main.jsx                     # Entry point
│   ├── index.css                    # CSS global
│   └── App.css
├── public/
├── .env.local                       # Variáveis de ambiente (não commitar)
├── .gitignore
├── package.json
├── vite.config.js
├── eslint.config.js
├── SPEC.md
├── ARCHITECTURE.md
├── DEVELOPMENT.md
├── TODO.md
├── README.md
└── index.html
```

---

## 6. Design System

### Paleta de Cores

| Nome | HEX | RGB | Uso |
|------|------|------|------|
| Bege Claro | #F5EBDD | rgb(245, 235, 221) | Fundo principal |
| Marrom Escuro | #3B2621 | rgb(59, 38, 33) | Botões, textos primários |
| Marrom Médio | #5A3D33 | rgb(90, 61, 51) | Hover, estados |
| Caramelo | #C98B5B | rgb(201, 139, 91) | Destaques, acentos |
| Areia | #D9B89C | rgb(217, 184, 156) | Bordas, campos |
| Marrom Texto | #7A5C4E | rgb(122, 92, 78) | Texto secundário |
| Branco | #FFFFFF | rgb(255, 255, 255) | Fundo cards |

### Tipografia

| Elemento | Fonte | Peso | Tamanho |
|----------|-------|------|--------|
| Logo | Playfair Display | Bold | 36px |
| Título Principal | Playfair Display | Bold | 28px |
| Título Seção | Playfair Display | SemiBold | 24px |
| Subtítulo | Poppins | Medium | 18px |
| Corpo | Poppins | Regular | 16px |
| Pequeno | Poppins | Regular | 14px |
| Botão | Poppins | SemiBold | 16px |

### Componentes Estilizados

#### Botão Primário
```css
background: #3B2621;
color: white;
height: 52px;
border-radius: 12px;
font-weight: 600;
transition: all 0.3s ease;

&:hover {
  background: #5A3D33;
}
```

#### Botão Secundário
```css
border: 1px solid #3B2621;
background: transparent;
color: #3B2621;
border-radius: 12px;
height: 52px;
font-weight: 600;
```

#### Input Field
```css
background: #FFF8F2;
border: 1px solid #D9B89C;
border-radius: 10px;
padding: 14px 16px;
font-size: 16px;

&:focus {
  border-color: #3B2621;
  outline: none;
}
```

#### Card
```css
background: white;
border-radius: 16px;
box-shadow: 0 4px 12px rgba(0,0,0,0.08);
padding: 24px;
```

#### RestaurantCard
```css
background: white;
border-radius: 12px;
overflow: hidden;
box-shadow: 0 2px 8px rgba(0,0,0,0.1);
transition: transform 0.3s, box-shadow 0.3s;

&:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.12);
}
```

---

## 7. Regras de Segurança Firestore

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Usuários
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
    
    // Restaurantes (todos podem ler)
    match /restaurants/{restaurantId} {
      allow read: if true;
      allow write: if request.auth.uid != null && 
                      request.resource.data.userId == request.auth.uid;
      
      // Reviews (subcoleção)
      match /reviews/{reviewId} {
        allow read: if true;
        allow create: if request.auth.uid != null &&
                         request.resource.data.userId == request.auth.uid;
      }
    }
    
    // Favoritos
    match /favorites/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
    
    // Reservas
    match /reservations/{reservationId} {
      allow read, write: if request.auth.uid != null &&
                           request.resource.data.userId == request.auth.uid;
    }
  }
}
```

---

## 8. Variáveis de Ambiente

`.env.local`:
```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Backend (Futuro)
VITE_API_URL=http://localhost:3000

# Google Maps (Futuro)
VITE_GOOGLE_MAPS_API_KEY=your_api_key
```

---

## 9. Performance & Otimizações

- ✅ Lazy loading de componentes com React.lazy()
- ✅ Code splitting com React Router
- ✅ Otimização de imagens com compressão
- ✅ Cache de dados com localStorage
- ✅ Memoização de componentes com React.memo()
- 🔲 Service Workers (PWA)
- 🔲 Image CDN (Cloudinary, etc)

---

## 3. Estrutura de Dados (Firestore)

### Coleção: `users`
```json
{
  "userId": {
    "name": "João Silva",
    "email": "joao@email.com",
    "profileType": "client",
    "avatar": "gs://bucket/avatars/uuid.jpg",
    "preferences": ["comida mineira", "pratos regionais"],
    "language": "pt-BR",
    "phone": "+55 82 98765-4321",
    "address": "Rua Principal, 123",
    "createdAt": 1234567890,
    "updatedAt": 1234567890,
    "lastLogin": 1234567890
  }
}
```

### Coleção: `restaurants`
```json
{
  "restaurantId": {
    "name": "Casa do Sabor Regional",
    "owner": "userId",
    "address": "Estrada Principal, 456",
    "city": "Maceió",
    "coordinates": {
      "lat": -9.6558,
      "lng": -35.7353
    },
    "cuisine": "Comida Mineira",
    "description": "Especializada em pratos típicos da região",
    "phone": "+55 82 3221-0000",
    "website": "https://...",
    "hours": {
      "monday": ["11:00", "22:00"],
      "tuesday": ["11:00", "22:00"],
      "wednesday": ["11:00", "22:00"],
      "thursday": ["11:00", "22:00"],
      "friday": ["11:00", "23:00"],
      "saturday": ["12:00", "23:00"],
      "sunday": ["12:00", "22:00"]
    },
    "rating": 4.8,
    "reviewCount": 42,
    "priceRange": "$$",
    "images": [
      "gs://bucket/restaurants/uuid/1.jpg",
      "gs://bucket/restaurants/uuid/2.jpg"
    ],
    "category": ["regional", "gourmet"],
    "createdAt": 1234567890,
    "updatedAt": 1234567890,
    "featured": true
  }
}
```

### Coleção: `favorites`
```
/favorites/{userId}/restaurants/{restaurantId}
{
  "addedAt": 1234567890,
  "notes": "Muito bom!"
}
```

### Coleção: `reservations`
```json
{
  "reservationId": {
    "userId": "userId",
    "restaurantId": "restaurantId",
    "date": "2026-06-15",
    "time": "19:30",
    "guests": 4,
    "specialRequests": "Próximo à janela",
    "status": "confirmed",
    "confirmationCode": "ABC123DEF456",
    "createdAt": 1234567890,
    "updatedAt": 1234567890,
    "cancelledAt": null
  }
}
```

### Coleção: `reviews`
```json
{
  "reviewId": {
    "userId": "userId",
    "restaurantId": "restaurantId",
    "rating": 5,
    "title": "Experiência incrível",
    "comment": "Comida deliciosa, atendimento excelente!",
    "images": ["gs://bucket/reviews/uuid/1.jpg"],
    "helpful": 23,
    "merchantResponse": "Obrigado pela avaliação!",
    "createdAt": 1234567890,
    "updatedAt": 1234567890
  }
}
```

### Coleção: `orders`
```json
{
  "orderId": {
    "userId": "userId",
    "restaurantId": "restaurantId",
    "items": [
      {
        "name": "Carne de Sol",
        "quantity": 2,
        "price": 45.90
      }
    ],
    "total": 91.80,
    "status": "pending",
    "deliveryAddress": "Rua X, 123",
    "deliveryDate": "2026-06-15",
    "createdAt": 1234567890,
    "estimatedDelivery": "2026-06-16"
  }
}
```

---

## 4. API REST Backend

### Base URL: `http://localhost:3000/api`

#### Autenticação
```
POST   /auth/register
POST   /auth/login
POST   /auth/logout
POST   /auth/refresh-token
GET    /auth/me
POST   /auth/forgot-password
```

#### Restaurantes
```
GET    /restaurants                      # Listar com filtros
GET    /restaurants/:id                  # Detalhes
POST   /restaurants                      # Criar (admin)
PUT    /restaurants/:id                  # Atualizar (admin)
DELETE /restaurants/:id                  # Deletar (admin)
```

#### Favoritos
```
GET    /favorites                        # Listar favoritos do usuário
POST   /favorites/:restaurantId          # Adicionar
DELETE /favorites/:restaurantId          # Remover
```

#### Reservas
```
GET    /reservations                     # Listar do usuário
POST   /reservations                     # Criar reserva
GET    /reservations/:id                 # Detalhes
PUT    /reservations/:id                 # Atualizar
DELETE /reservations/:id                 # Cancelar
GET    /restaurants/:id/availability     # Horários disponíveis
```

#### Avaliações
```
GET    /restaurants/:id/reviews          # Listar
POST   /restaurants/:id/reviews          # Criar
PUT    /reviews/:id                      # Atualizar
DELETE /reviews/:id                      # Deletar
```

#### Dashboard Comerciante
```
GET    /merchant/dashboard               # Visão geral
GET    /merchant/orders                  # Pedidos
PUT    /merchant/orders/:id              # Atualizar status
GET    /merchant/reservations            # Reservas
GET    /merchant/reviews                 # Avaliações
GET    /merchant/analytics               # Relatórios
```

---

## 5. Fluxo de Autenticação

```
┌─────────────────────────────────────────┐
│  Usuário acessa o App                   │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│  Verificar se tem token armazenado      │
│  (localStorage/sessionStorage)          │
└────────────────┬────────────────────────┘
                 │
        ┌────────┴────────┐
        │                 │
    Token OK         Token Inválido
        │                 │
        ▼                 ▼
   Ir para Home    Ir para Login
        │                 │
        │                 ▼
        │          ┌──────────────────┐
        │          │  Email + Senha   │
        │          └────────┬─────────┘
        │                   │
        │                   ▼
        │          ┌──────────────────┐
        │          │ Firebase Auth    │
        │          └────────┬─────────┘
        │                   │
        │                   ▼
        │          ┌──────────────────┐
        │          │ Gerar JWT Token  │
        │          └────────┬─────────┘
        │                   │
        │                   ▼
        │          ┌──────────────────┐
        │          │ Salvar Token     │
        │          │ (localStorage)   │
        │          └────────┬─────────┘
        │                   │
        └───────────┬───────┘
                    │
                    ▼
         ┌──────────────────────┐
         │   Ir para Home       │
         │  (Autenticado)       │
         └──────────────────────┘
```

---

## 6. Fluxo de Exploração de Restaurantes

```
┌───────────────────────────────┐
│  Usuário em /explore          │
└───────────┬───────────────────┘
            │
            ▼
┌───────────────────────────────┐
│  Carregar lista de            │
│  restaurantes (Firestore)     │
└───────────┬───────────────────┘
            │
            ▼
┌───────────────────────────────┐
│  Aplicar Filtros:             │
│  • Preço                       │
│  • Avaliação                   │
│  • Tipo de comida             │
│  • Distância                   │
└───────────┬───────────────────┘
            │
            ▼
┌───────────────────────────────┐
│  Exibir Cards com             │
│  informações do restaurante   │
└───────────┬───────────────────┘
            │
    ┌───────┴──────────┐
    │                  │
 Clica em          Clica em
 Card              Favorito
    │                  │
    ▼                  ▼
┌─────────┐      ┌──────────────┐
│ Detalhes│      │ Adicionar ao │
│do Rest  │      │ Favoritos    │
└─────────┘      └──────────────┘
```

---

## 7. Fluxo de Reserva

```
┌──────────────────────────────┐
│  Usuário clica em Reservar   │
└────────────────┬─────────────┘
                 │
                 ▼
┌──────────────────────────────┐
│  Formulário de Reserva:      │
│  • Data                       │
│  • Hora                       │
│  • Quantidade de pessoas     │
│  • Pedidos especiais         │
└────────────────┬─────────────┘
                 │
                 ▼
┌──────────────────────────────┐
│  Verificar Disponibilidade   │
│  (GET /availability)         │
└────────────────┬─────────────┘
                 │
        ┌────────┴────────┐
        │                 │
   Disponível       Indisponível
        │                 │
        ▼                 ▼
   Continuar         Sugerir
                    outros horários
        │
        ▼
┌──────────────────────────────┐
│  Criar Reserva               │
│  (POST /reservations)        │
└────────────────┬─────────────┘
                 │
                 ▼
┌──────────────────────────────┐
│  Salvar em Firestore         │
└────────────────┬─────────────┘
                 │
                 ▼
┌──────────────────────────────┐
│  Enviar Confirmação          │
│  (Email + Notificação)       │
└────────────────┬─────────────┘
                 │
                 ▼
┌──────────────────────────────┐
│  Mostrar Código de           │
│  Confirmação ao Usuário      │
└──────────────────────────────┘
```

---

## 8. Segurança

### Autenticação
- ✅ Firebase Auth (OAuth2)
- ✅ JWT Tokens
- ✅ Refresh Token Rotation
- ✅ Proteção CSRF

### Autorização
- ✅ Role-based Access Control (RBAC)
- ✅ Rules no Firestore
- ✅ Middleware no Backend

### Dados
- ✅ HTTPS obrigatório
- ✅ Variáveis de ambiente sensíveis
- ✅ Validação de inputs
- ✅ Sanitização de dados

### Storage
- ✅ Firebase Storage com permissões
- ✅ Assinatura de URLs públicas
- ✅ Tamanho máximo de arquivo

---

## 9. Performance

### Frontend
- Lazy loading de imagens
- Code splitting por rota
- Memoização de componentes
- Debounce em buscas

### Backend
- Índices no Firestore
- Paginação de resultados
- Cache de dados frequentes
- CDN para imagens

### Database
- Estrutura desnormalizada (NoSQL)
- Indexes nas queries principais
- Compound indexes onde necessário
- Limite de documentos por query

---

## 10. Escalabilidade

### Estágios de Crescimento

**Fase 1 (MVP):** 10-100 usuários
- Firebase Spark Plan
- Single server Node.js
- Sem cache

**Fase 2 (Tração):** 100-1000 usuários
- Firebase Blaze Plan
- Load balancer
- Redis cache
- CDN global

**Fase 3 (Escala):** 1000+ usuários
- Kubernetes
- Microserviços
- Multiple servers
- Advanced caching

---

**Versão:** 1.0  
**Última Atualização:** 25 de Maio de 2026  
**Status:** Documentação em Progresso
