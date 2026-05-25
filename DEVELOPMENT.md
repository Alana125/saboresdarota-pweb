# DEVELOPMENT.md — Guia de Desenvolvimento

## Orientações para Continuação do Projeto

### Estado Atual (25/05/2026)

**Frontend:** 60% completo
- ✅ Estrutura React/Vite
- ✅ Roteamento com React Router
- ✅ Design System e estilos
- ✅ Componentes reutilizáveis
- ✅ Páginas principais (Home, Explorar, Restaurante, Perfil)
- ✅ Dashboard do comerciante
- ✅ Páginas de especificações
- ⏳ Integração com Firebase
- ⏳ Backend e APIs
- ⏳ Mapas e GPS

**Backend:** 0% completo
**Database:** 0% completo
**Integrações:** 0% completo

---

## Próximos Passos Imediatos

### 1. Configurar Firebase (Prioridade Alta)

#### 1.1 Criar Projeto Firebase
```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login na conta Google
firebase login

# Inicializar Firebase no projeto
firebase init
```

#### 1.2 Adicionar Pacotes
```bash
npm install firebase
```

#### 1.3 Criar arquivo de configuração
Arquivo: `src/config/firebase.js`

```javascript
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
```

#### 1.4 Criar Context de Autenticação
Arquivo: `src/context/AuthContext.jsx`

```javascript
import { createContext, useState, useEffect } from 'react'
import { auth } from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
```

### 2. Implementar Autenticação

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
