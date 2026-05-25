import styled from 'styled-components'
import { Zap, Users, MapPin, Heart, Utensils } from 'lucide-react'
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

const FlowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

const StepCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.inputBg};
  border-radius: 16px;
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
`

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  display: grid;
  place-items: center;
`

const StepTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`

const StepDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.6;
`

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
`

const DetailItem = styled.li`
  display: flex;
  gap: 12px;
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.5;

  &::before {
    content: '→';
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 700;
    flex-shrink: 0;
  }
`

function SpecFunctionality() {
  const flows = [
    {
      icon: Users,
      title: 'Fluxo de Usuário',
      description: 'Como um cliente interage com o app',
      steps: [
        'Acessar app e fazer login/cadastro',
        'Explorar restaurantes na Home',
        'Filtrar por localização, tipo ou avaliação',
        'Visualizar detalhes do restaurante',
        'Favoritar restaurantes preferidos',
        'Fazer reserva de mesa',
        'Avaliar experiência',
      ],
    },
    {
      icon: Utensils,
      title: 'Fluxo de Comerciante',
      description: 'Gerenciamento do restaurante',
      steps: [
        'Cadastrar estabelecimento',
        'Configurar cardápio digital',
        'Definir horários de funcionamento',
        'Receber reservas e pedidos',
        'Aprovar ou recusar pedidos',
        'Acompanhar avaliações de clientes',
        'Visualizar relatórios e métricas',
      ],
    },
    {
      icon: Heart,
      title: 'Fluxo de Favoritos',
      description: 'Gerenciar restaurantes salvos',
      steps: [
        'Adicionar restaurante aos favoritos',
        'Organizar por categorias',
        'Acessar histórico de visitas',
        'Comparar restaurantes favoritos',
        'Receber notificações de promoções',
        'Salvar pratos preferidos',
      ],
    },
    {
      icon: MapPin,
      title: 'Fluxo de Localização',
      description: 'Descoberta por proximidade',
      steps: [
        'Ativar GPS do dispositivo',
        'Visualizar restaurantes próximos',
        'Ver distância de cada local',
        'Abrir em mapa interativo',
        'Filtrar por raio de busca',
        'Receber sugestões de rota',
      ],
    },
  ]

  const sections = [
    {
      title: 'Arquitetura Geral',
      content: (
        <DetailList>
          <DetailItem>Frontend: React + Vite com roteamento React Router</DetailItem>
          <DetailItem>Backend: Node.js com Express e Firebase</DetailItem>
          <DetailItem>Banco de dados: Firestore para dados em tempo real</DetailItem>
          <DetailItem>Autenticação: Firebase Auth com email/Google</DetailItem>
          <DetailItem>Armazenamento: Firebase Storage para imagens</DetailItem>
          <DetailItem>Mapas: Google Maps API para localização</DetailItem>
        </DetailList>
      ),
    },
    {
      title: 'Fluxo de Dados',
      content: (
        <DetailList>
          <DetailItem>Usuário se cadastra → autenticação Firebase</DetailItem>
          <DetailItem>Dados salvos em Firestore com ID do usuário</DetailItem>
          <DetailItem>Restaurantes buscados em tempo real</DetailItem>
          <DetailItem>Favoritos sincronizados entre dispositivos</DetailItem>
          <DetailItem>Reservas com confirmação em tempo real</DetailItem>
          <DetailItem>Avaliações atualizadas dinamicamente</DetailItem>
        </DetailList>
      ),
    },
    {
      title: 'Recomendações Inteligentes',
      content: (
        <DetailList>
          <DetailItem>Análise de histórico do usuário</DetailItem>
          <DetailItem>Matriz de compatibilidade de gosto e clima</DetailItem>
          <DetailItem>Ranking por avaliação e proximidade</DetailItem>
          <DetailItem>Sugestão de pratos mais populares</DetailItem>
          <DetailItem>Tendências sazonais e eventos locais</DetailItem>
          <DetailItem>Personalização por perfil de usuário</DetailItem>
        </DetailList>
      ),
    },
  ]

  return (
    <Container>
      <SpecsNav current="functionality" />
      <SectionHeader title="Funcionamento do Sistema" subtitle="Fluxos, arquitetura e processos" />

      <Section>
        <SectionHeader title="Fluxos de Interação" />
        <FlowContainer>
          {flows.map((flow, idx) => {
            const Icon = flow.icon
            return (
              <StepCard key={idx}>
                <IconWrapper>
                  <Icon size={24} />
                </IconWrapper>
                <div>
                  <StepTitle>{flow.title}</StepTitle>
                  <StepDescription>{flow.description}</StepDescription>
                </div>
                <DetailList>
                  {flow.steps.map((step, i) => (
                    <DetailItem key={i}>{step}</DetailItem>
                  ))}
                </DetailList>
              </StepCard>
            )
          })}
        </FlowContainer>
      </Section>

      {sections.map((sec, idx) => (
        <Section key={idx}>
          <SectionHeader title={sec.title} />
          {sec.content}
        </Section>
      ))}
    </Container>
  )
}

export default SpecFunctionality
