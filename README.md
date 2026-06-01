# Sabores da Rota

Aplicativo web para descoberta gastronômica regional com interface premium e navegação intuitiva.

## 🎯 Sobre

Sabores da Rota é uma plataforma que conecta turistas e locais a restaurantes autênticos, experiências culturais e sabores regionais. O app usa design **Warm Minimalism** com tons terrosos, transmitindo acolhimento, sofisticação e experiência premium.

## 📊 Status do Projeto

```
Frontend:    ████████░░ 40% (MVP básico pronto)
Backend:     ░░░░░░░░░░ 0%
Database:    ░░░░░░░░░░ 0%
Integrações: ░░░░░░░░░░ 0%

Total Geral: ██░░░░░░░░ 8%
```

## 📚 Documentação

### Especificações Completas
- **[SPEC.md](./SPEC.md)** — Especificação completa do projeto, funcionalidades e roadmap
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** — Arquitetura técnica, diagramas e estrutura de dados
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** — Guia de desenvolvimento com próximos passos
- **[TODO.md](./TODO.md)** — Tarefas organizadas por prioridade

### Páginas de Especificação (In-App)
- `/specs` — Visão Geral do Projeto
- `/specs/requirements` — Requerimentos Funcionais
- `/specs/tasks` — Tarefas e Progresso
- `/specs/functionality` — Funcionamento do Sistema

## 🚀 Quick Start

### Pré-requisitos
- Node.js 20+
- npm ou yarn
- Git

### Instalação

```bash
# Clonar repositório
git clone <repo-url>
cd saboresdaota-pweb

# Instalar dependências
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
```

Abra `http://localhost:5173` no navegador.

### Build para Produção

```bash
npm run build
```

### Visualização de Build

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── BrandNavbar.jsx
│   ├── Sidebar.jsx
│   ├── PrimaryButton.jsx
│   ├── SecondaryButton.jsx
│   ├── InputField.jsx
│   ├── RestaurantCard.jsx
│   ├── SectionHeader.jsx
│   └── SpecsNav.jsx
├── pages/              # Páginas e rotas
│   ├── Splash.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Home.jsx
│   ├── Explore.jsx
│   ├── Restaurant.jsx
│   ├── Favorites.jsx
│   ├── Profile.jsx
│   ├── MerchantDashboard.jsx
│   ├── SpecOverview.jsx
│   ├── SpecRequirements.jsx
│   ├── SpecTasks.jsx
│   ├── SpecFunctionality.jsx
│   └── ...
├── styles/            # Design system
│   ├── theme.js
│   └── global.js
├── data/              # Dados mockados
│   └── mockRestaurants.js
└── App.jsx           # Roteamento principal
```

## 🎨 Design System

### Paleta de Cores
- **Bege Claro:** #F5EBDD (fundo)
- **Marrom Escuro:** #3B2621 (primário)
- **Marrom Médio:** #5A3D33 (hover)
- **Caramelo:** #C98B5B (destaques)
- **Areia:** #D9B89C (bordas)
- **Marrom Texto:** #7A5C4E (secundário)

### Tipografia
- **Títulos:** Playfair Display Bold
- **Corpo:** Poppins Regular
- **Botões:** Poppins SemiBold

### Componentes
- Botões primário/secundário
- Campos de input validados
- Cards com sombras
- Navbar sticky
- Sidebar navegável

## 🔧 Tecnologias

- **React 19** — UI framework
- **Vite 5** — Build tool
- **Styled Components** — CSS-in-JS
- **React Router v7** — Roteamento
- **Lucide React** — Ícones
- **Firebase** — Backend (futuro)
- **Node.js/Express** — API (futuro)

## 📋 Funcionalidades Implementadas

### ✅ MVP
- [x] Splash screen
- [x] Login e cadastro
- [x] Home com destaques
- [x] Exploração de restaurantes
- [x] Página de restaurante
- [x] Favoritos
- [x] Perfil do usuário
- [x] Dashboard comerciante
- [x] Especificações do projeto

### ⏳ Próximas
- [ ] Autenticação Firebase
- [ ] Firestore database
- [ ] Google Maps API
- [ ] Sistema de reservas
- [ ] IA recomendadora

## 🌍 Roadmap

### Fase 1: MVP (Maio - Junho 2026) — 40% ✅
- Frontend completo
- Design system
- Componentes base
- Páginas principais

### Fase 2: Backend & Integrações (Julho - Agosto 2026) — 0%
- Firebase Auth
- Firestore setup
- Google Maps
- Sistema de reservas

### Fase 3: IA & Expansão (Setembro - Outubro 2026) — 0%
- Recomendações inteligentes
- Multilíngue
- Dashboard comerciante avançado
- Marketplace regional

## 🛠️ Desenvolvimento

### Padrões de Código

**Componentes:**
```jsx
import styled from 'styled-components'

const Container = styled.div`
  /* estilos */
`

function MyComponent() {
  return <Container>Conteúdo</Container>
}

export default MyComponent
```

**Commits:**
```bash
git commit -m "feat: Adicionar nova funcionalidade"
git commit -m "fix: Corrigir bug na página X"
```

### Checklist de Qualidade
- [ ] Código segue padrão do projeto
- [ ] Componentes são reutilizáveis
- [ ] Responsivo em mobile/tablet/desktop
- [ ] Sem erros no console
- [ ] Build bem-sucedido
- [ ] Documentação atualizada

## 📖 Referências

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Styled Components](https://styled-components.com)
- [React Router](https://reactrouter.com)

## 👥 Contribuindo

1. Criar branch: `git checkout -b feature/sua-feature`
2. Commit changes: `git commit -m 'feat: descrição'`
3. Push branch: `git push origin feature/sua-feature`
4. Abrir Pull Request

## 📝 Licença

MIT

## 👨‍💻 Autor

Desenvolvido para Sabores da Rota

---

**Última Atualização:** 25 de Maio de 2026  
**Status:** Em Desenvolvimento  
**Versão:** 1.0.0
