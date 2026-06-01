# ARCHITECTURE.md — Arquitetura Técnica

## 1. Diagrama de Arquitetura Geral

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (React/Vite)                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Splash     │  │    Home      │  │   Explore    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Restaurant   │  │  Favorites   │  │   Profile    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Merchant   │  │    Specs     │  │    Auth      │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└──────────────┬──────────────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────────────────┐
│           Services & State Management                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Auth Ctx   │  │   User Ctx   │  │ Router (RRD) │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└──────────────┬──────────────────────────────────────────────┘
               │
      ┌────────┴───────────┬────────────────┐
      ▼                    ▼                ▼
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│  Firebase    │   │ Backend API  │   │ Google Maps  │
│   Auth       │   │  (Node.js)   │   │     API      │
└──────┬───────┘   └──────┬───────┘   └──────────────┘
       │                  │
       └──────────┬───────┘
                  ▼
        ┌─────────────────────┐
        │  Firestore (Cloud)  │
        │   (Database Real)   │
        └─────────────────────┘
               │
       ┌───────┴──────────┬──────────────┐
       ▼                  ▼              ▼
   [Users]          [Restaurants]   [Reservations]
   [Favorites]      [Reviews]       [Orders]
```

---

## 2. Stack Tecnológico Detalhado

### Frontend
- **Framework:** React 19 + Vite 5.4
- **Roteamento:** React Router v7
- **Estado:** Context API + Hooks
- **Estilo:** Styled Components 6.4
- **Ícones:** Lucide React 1.16
- **HTTP:** Axios (será adicionado)
- **Validação:** Zod (será adicionado)

### Backend
- **Runtime:** Node.js 20+
- **Framework:** Express.js
- **Autenticação:** Firebase Admin
- **Validação:** Express Validator
- **Cors:** CORS middleware
- **Dotenv:** Variáveis de ambiente

### Database
- **Principal:** Google Firestore (NoSQL)
- **Real-time:** Firestore Listeners
- **Storage:** Firebase Storage
- **Auth:** Firebase Authentication

### Integrações
- **Mapas:** Google Maps API v3
- **Geocoding:** Google Geocoding API
- **Notificações:** Firebase Cloud Messaging
- **Pagamento:** Stripe (futuro)
- **Email:** SendGrid (futuro)

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
