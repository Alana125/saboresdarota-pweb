import styled from 'styled-components'
import SectionHeader from '../components/SectionHeader'
import SpecsNav from '../components/SpecsNav'

const Container = styled.main`
  min-height: calc(100vh - 80px);
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
`

const Section = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const Requirement = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.inputBg};
  border-radius: 8px;
  margin-bottom: 12px;
`

const Title = styled.h3`
  margin: 0 0 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`

const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`

function SpecRequirements() {
  const requirements = {
    essencial: [
      { title: 'Cadastro e Login', description: 'Permitir criação de conta e autenticação de usuários' },
      { title: 'Tela Inicial', description: 'Home com boas-vindas e destaques' },
      { title: 'Lista de Restaurantes', description: 'Exibir restaurantes com filtros básicos' },
      { title: 'Página do Restaurante', description: 'Detalhes completos de cada restaurante' },
      { title: 'Busca Simples', description: 'Busca por nome, tipo de comida ou localização' },
      { title: 'Favoritar Restaurantes', description: 'Salvar restaurantes preferidos' },
    ],
    intermediario: [
      { title: 'GPS e Localização', description: 'Integração com serviços de geolocalização' },
      { title: 'Restaurantes Próximos', description: 'Listar restaurantes por proximidade' },
      { title: 'Mapa Interativo', description: 'Visualizar restaurantes em mapa' },
      { title: 'Filtro por Distância', description: 'Buscar restaurantes por raio de distância' },
      { title: 'Sistema de Reservas', description: 'Reservar mesa com data e hora' },
    ],
    avancado: [
      { title: 'Recomendações Inteligentes', description: 'IA baseada em gosto e clima' },
      { title: 'Histórico de Usuário', description: 'Rastrear atividades e preferências' },
      { title: 'Sugestão de Pratos', description: 'Recomendar pratos baseado em preferências' },
      { title: 'Dashboard Comerciante', description: 'Área administrativa com métricas' },
      { title: 'Multilíngue', description: 'Tradução automática de conteúdo' },
    ],
  }

  return (
    <Container>
      <SpecsNav current="requirements" />
      <SectionHeader title="Especificações de Requerimentos" subtitle="Funcionalidades essenciais, intermediárias e avançadas" />

      <Section>
        <SectionHeader title="🎯 Essencial (MVP)" extra="Prioridade 1" />
        {requirements.essencial.map((req, idx) => (
          <Requirement key={idx}>
            <Title>{req.title}</Title>
            <Description>{req.description}</Description>
          </Requirement>
        ))}
      </Section>

      <Section>
        <SectionHeader title="📍 Intermediário" extra="Prioridade 2" />
        {requirements.intermediario.map((req, idx) => (
          <Requirement key={idx}>
            <Title>{req.title}</Title>
            <Description>{req.description}</Description>
          </Requirement>
        ))}
      </Section>

      <Section>
        <SectionHeader title="🚀 Avançado" extra="Prioridade 3" />
        {requirements.avancado.map((req, idx) => (
          <Requirement key={idx}>
            <Title>{req.title}</Title>
            <Description>{req.description}</Description>
          </Requirement>
        ))}
      </Section>
    </Container>
  )
}

export default SpecRequirements
