# DEVELOPMENT.md — Guia de Desenvolvimento

## 🎯 Objetivo Imediato

**Implementar FASE 1 (MVP) — Prioridade Máxima**

O frontend está 80% pronto, mas faltam:
1. **Firebase Auth** — Autenticação real
2. **Firestore** — Persistência de dados
3. **Busca/Filtros** — Funcionalidade de busca
4. **Sincronização** — Favoritos sincronizados

---

## 📋 Estado Atual (Junho 2026)

### ✅ Concluído
- React 19 + Vite com build otimizado
- Roteamento com React Router v7
- Design System completo (Warm Minimalism)
- Componentes reutilizáveis (Navbar, Card, Buttons)
- Páginas principais (Home, Explore, Restaurant, Favorites, Profile)
- Dashboard comerciante (estrutura)
- Página de especificações
- Layout responsivo mobile/desktop

### 🔲 Pendente (FASE 1)
- Firebase Authentication
- Firestore Database
- Sistema de busca
- Filtros avançados
- Sincronização de favoritos
- Validação de formulários

### 🔲 Futuro (FASE 2+)
- Google Maps API
- Geolocalização
- Sistema de reservas
- Avaliações
- IA Recomendadora
- Dashboard comerciante funcional

---

## 🚀 Próximos Passos (Ordem de Prioridade)

### 1️⃣ Firebase Authentication (CRÍTICO)

#### 1.1 Setup Firebase
```bash
# Instalar dependências
npm install firebase

# Criar arquivo de configuração
touch src/config/firebase.js
```

#### 1.2 Arquivo `src/config/firebase.js`
```javascript
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app
```

#### 1.3 Criar `.env.local`
```env
VITE_FIREBASE_API_KEY=your_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
```

#### 1.4 Criar `src/context/AuthContext.jsx`
```javascript
import { createContext, useState, useEffect } from 'react'
import { auth } from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, error }}>
      {children}
    </AuthContext.Provider>
  )
}
```

#### 1.5 Atualizar `src/main.jsx`
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
```

### 2️⃣ Firestore Database (CRÍTICO)

Após configurar Firebase, criar coleções:

```javascript
// src/services/firestore.js
import { db } from '../config/firebase'
import { collection, doc, setDoc, getDoc } from 'firebase/firestore'

// Exemplo: Salvar usuário após login
export async function saveUser(uid, userData) {
  try {
    await setDoc(doc(db, 'users', uid), {
      ...userData,
      createdAt: new Date(),
    })
  } catch (error) {
    console.error('Erro ao salvar usuário:', error)
  }
}
```

### 3️⃣ Atualizar Páginas de Autenticação

Integrar Login/Signup com Firebase:

```javascript
// src/pages/Login.jsx (exemplo)
import { auth } from '../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
  const handleLogin = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      // Redirecionar para Home
    } catch (error) {
      console.error('Erro no login:', error)
    }
  }
  // ... resto do componente
}
```

### 4️⃣ Sistema de Busca

Implementar funcionalidade de busca usando Firestore:

```javascript
// src/services/searchRestaurants.js
import { db } from '../config/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

export async function searchRestaurants(searchTerm) {
  const restaurantsRef = collection(db, 'restaurants')
  const q = query(
    restaurantsRef,
    where('name', '>=', searchTerm),
    where('name', '<=', searchTerm + '\uf8ff')
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}
```

---

## 📦 Dependências Adicionais Necessárias

```bash
# Firebase
npm install firebase

# Validação
npm install zod

# HTTP client (opcional, pode usar fetch)
npm install axios

# Date handling
npm install date-fns
```

---

## 🗂️ Estrutura de Pastas Necessária

```
src/
├── config/
│   └── firebase.js          # Configuração Firebase
├── context/
│   ├── AuthContext.jsx      # Contexto de autenticação
│   └── AppContext.jsx       # Contexto geral
├── services/
│   ├── auth.js              # Funções de autenticação
│   ├── firestore.js         # Operações Firestore
│   └── search.js            # Busca e filtros
├── hooks/
│   ├── useAuth.js           # Hook de autenticação
│   └── useRestaurants.js    # Hook de restaurantes
├── pages/
│   └── ... (já existem)
├── components/
│   └── ... (já existem)
└── styles/
    └── ... (já existem)
```

---

## ⚙️ Variáveis de Ambiente

Criar `.env.local` na raiz do projeto:

```env
# Firebase
VITE_FIREBASE_API_KEY=xxxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=xxxxx
VITE_FIREBASE_STORAGE_BUCKET=xxxxx.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxxx
VITE_FIREBASE_APP_ID=xxxxx

# API (para futuro backend)
VITE_API_URL=http://localhost:3000
```

---

## 🧪 Testes Sugeridos

Após cada implementação:

```bash
# Verificar console para erros
# Testar login/cadastro
# Testar criação de usuário no Firestore
# Testar busca de restaurantes
# Testar sincronização de favoritos
```

---

## 📅 Roadmap Estimado

| Semana | Tarefas |
|--------|---------|
| S1 | Firebase Auth + Context |
| S2 | Firestore Collections + User Service |
| S3 | Search + Filters |
| S4 | Synchronize Favorites |
| S5-S6 | Google Maps + Geolocation |
| S7-S8 | Reservations System |

---

## 🔗 Recursos Úteis

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [React Context API](https://react.dev/reference/react/useContext)
- [React Router v7](https://reactrouter.com/)

---

## 💡 Dicas de Desenvolvimento

1. Use `.env.local` para variáveis sensíveis
2. Sempre faça login no Firebase Console para verificar dados
3. Use Firestore Rules para segurança
4. Implemente rate limiting para APIs
5. Teste no mobile frequentemente
6. Use React DevTools para debug

#### 2.1 Login com Email/Senha
Atualizar: `src/pages/Login.jsx`

#### 2.2 Cadastro de Usuário
Atualizar: `src/pages/Signup.jsx`

#### 2.3 Recuperação de Senha
Atualizar: `src/pages/ForgotPassword.jsx`

### 3. Setup Backend Node.js

#### 3.1 Criar estrutura

```bash
mkdir backend
cd backend
npm init -y
npm install express cors dotenv firebase-admin axios
```

#### 3.2 Arquivo inicial: `backend/server.js`

```javascript
const express = require('express')
const cors = require('cors')
const admin = require('firebase-admin')

const app = express()
app.use(cors())
app.use(express.json())

// Firebase Admin
admin.initializeApp({
  projectId: process.env.FIREBASE_PROJECT_ID,
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
```

### 4. Estrutura de Dados Firestore

#### 4.1 Coleções Necessárias

```
users/
├── {userId}
│   ├── name: string
│   ├── email: string
│   ├── profileType: 'client' | 'merchant'
│   ├── preferences: array
│   ├── createdAt: timestamp
│   └── updatedAt: timestamp

restaurants/
├── {restaurantId}
│   ├── name: string
│   ├── address: string
│   ├── coordinates: { lat, lng }
│   ├── cuisine: string
│   ├── rating: number
│   ├── price: string
│   ├── hours: { open, close }
│   ├── images: array
│   ├── description: string
│   ├── createdAt: timestamp
│   └── updatedAt: timestamp

favorites/
├── {userId}/restaurants
│   ├── {restaurantId}: { timestamp }

reservations/
├── {reservationId}
│   ├── userId: string
│   ├── restaurantId: string
│   ├── date: timestamp
│   ├── time: string
│   ├── guests: number
│   ├── status: 'pending' | 'confirmed' | 'cancelled'
│   ├── createdAt: timestamp

reviews/
├── {reviewId}
│   ├── userId: string
│   ├── restaurantId: string
│   ├── rating: number
│   ├── comment: string
│   ├── images: array
│   ├── createdAt: timestamp
```

---

## Padrões de Código

### Components

```javascript
import styled from 'styled-components'

const Container = styled.div`
  /* estilos */
`

function MyComponent() {
  return <Container>Conteúdo</Container>
}

export default MyComponent
```

### Pages

```javascript
import styled from 'styled-components'
import SectionHeader from '../components/SectionHeader'

const Container = styled.main`
  min-height: calc(100vh - 80px);
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
`

function MyPage() {
  return (
    <Container>
      <SectionHeader title="Título" subtitle="Subtítulo" />
      {/* conteúdo */}
    </Container>
  )
}

export default MyPage
```

### Hooks Customizados

```javascript
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
```

---

## Estrutura de Commits

```
feat: Adicionar nova funcionalidade
fix: Corrigir bug
style: Mudanças de formato/estilo
refactor: Reestruturar código
docs: Documentação
chore: Tarefas administrativas
```

Exemplos:
```
git commit -m "feat: Integrar autenticação Firebase"
git commit -m "fix: Corrigir erro na página de favoritos"
git commit -m "style: Atualizar paleta de cores"
```

---

## Testagem Local

### Verificar Erros
```bash
npm run lint
```

### Build de Produção
```bash
npm run build
npm run preview
```

---

## Variáveis de Ambiente

Criar arquivo `.env.local` na raiz do projeto:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_GOOGLE_MAPS_KEY=
VITE_API_URL=http://localhost:3000
```

---

## Recursos Úteis

- [React Router Documentation](https://reactrouter.com)
- [Styled Components](https://styled-components.com)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Google Maps API](https://developers.google.com/maps)
- [Figma Design](https://figma.com)

---

## Dúvidas Frequentes

**P: Como adicionar uma nova página?**
A: 1) Criar arquivo em `src/pages/NovaPagina.jsx`
   2) Importar em `src/App.jsx`
   3) Adicionar rota em Routes

**P: Como criar um novo componente?**
A: 1) Criar arquivo em `src/components/MeuComponente.jsx`
   2) Usar styled-components para estilos
   3) Exportar e importar em páginas/componentes

**P: Como acessar dados do Firestore?**
A: Usar hooks customizados com `useEffect` e `onSnapshot` do Firebase

**P: Como fazer deploy?**
A: Use `firebase deploy` ou plataformas como Vercel/Netlify

---

**Status:** Em Desenvolvimento  
**Versão:** 1.0  
**Última Atualização:** 25 de Maio de 2026
