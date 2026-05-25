import styled from 'styled-components'
import { CheckCircle2, Circle, AlertCircle } from 'lucide-react'
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

const TaskList = styled.div`
  display: grid;
  gap: 12px;
`

const TaskItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 12px;
  background: ${({ status, theme }) => {
    if (status === 'completed') return theme.colors.inputBg
    if (status === 'in-progress') return 'rgba(201, 139, 91, 0.12)'
    return theme.colors.inputBg
  }};
  border-left: 4px solid ${({ status, theme }) => {
    if (status === 'completed') return '#4ade80'
    if (status === 'in-progress') return theme.colors.accent
    return theme.colors.border
  }};
`

const IconWrapper = styled.div`
  flex-shrink: 0;
  margin-top: 2px;
`

const Content = styled.div`
  flex: 1;
`

const TaskTitle = styled.h4`
  margin: 0 0 4px;
  color: ${({ status, theme }) => (status === 'completed' ? theme.colors.muted : theme.colors.primary)};
  text-decoration: ${({ status }) => (status === 'completed' ? 'line-through' : 'none')};
`

const TaskDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
  line-height: 1.5;
`

function SpecTasks() {
  const tasks = {
    frontend: [
      { title: 'Layout Splash Screen', description: 'Tela inicial com animação de carregamento', status: 'completed' },
      { title: 'Login e Cadastro', description: 'Formulários com validação', status: 'completed' },
      { title: 'Página Home', description: 'Destaques e recomendações', status: 'in-progress' },
      { title: 'Explorar Restaurantes', description: 'Grid com filtros', status: 'completed' },
      { title: 'Página de Restaurante', description: 'Detalhes, cardápio, avaliações', status: 'in-progress' },
      { title: 'Perfil do Usuário', description: 'Dados, favoritos, histórico', status: 'not-started' },
      { title: 'Dashboard Comerciante', description: 'Métricas e pedidos', status: 'not-started' },
      { title: 'Sistema de Reservas', description: 'Agendamento de mesas', status: 'not-started' },
    ],
    backend: [
      { title: 'Autenticação Firebase', description: 'Setup de autenticação com email/Google', status: 'not-started' },
      { title: 'Banco de Dados', description: 'Firestore com coleções de restaurantes e usuários', status: 'not-started' },
      { title: 'API de Restaurantes', description: 'CRUD para restaurantes', status: 'not-started' },
      { title: 'API de Reservas', description: 'Criar, atualizar, cancelar reservas', status: 'not-started' },
      { title: 'API de Favoritos', description: 'Salvar e gerenciar favoritos', status: 'not-started' },
      { title: 'API de Avaliações', description: 'Comentários e notas', status: 'not-started' },
    ],
    integracao: [
      { title: 'Google Maps API', description: 'Integração de localização e mapas', status: 'not-started' },
      { title: 'Geocoding', description: 'Converter endereço em coordenadas', status: 'not-started' },
      { title: 'Storage de Imagens', description: 'Firebase Storage ou CDN', status: 'not-started' },
      { title: 'Notificações Push', description: 'Alertas de reserva e pedidos', status: 'not-started' },
    ],
    ia: [
      { title: 'Recomendador de Restaurantes', description: 'IA baseada em preferências', status: 'not-started' },
      { title: 'Análise de Clima', description: 'Recomendar por condições climáticas', status: 'not-started' },
      { title: 'Sugestão de Pratos', description: 'Pratos populares por perfil', status: 'not-started' },
      { title: 'Relatórios Inteligentes', description: 'Dashboard com insights para comerciantes', status: 'not-started' },
    ],
  }

  const getIcon = (status) => {
    if (status === 'completed') return <CheckCircle2 size={20} color="#4ade80" />
    if (status === 'in-progress') return <AlertCircle size={20} color="#C98B5B" />
    return <Circle size={20} color="#D9B89C" />
  }

  const renderTasks = (taskArray) =>
    taskArray.map((task, idx) => (
      <TaskItem key={idx} status={task.status}>
        <IconWrapper>{getIcon(task.status)}</IconWrapper>
        <Content>
          <TaskTitle status={task.status}>{task.title}</TaskTitle>
          <TaskDescription>{task.description}</TaskDescription>
        </Content>
      </TaskItem>
    ))

  return (
    <Container>
      <SpecsNav current="tasks" />
      <SectionHeader title="Tarefas de Desenvolvimento" subtitle="Roadmap e progresso do projeto" />

      <Section>
        <SectionHeader title="Frontend React" extra={`${tasks.frontend.filter((t) => t.status === 'completed').length}/${tasks.frontend.length}`} />
        <TaskList>{renderTasks(tasks.frontend)}</TaskList>
      </Section>

      <Section>
        <SectionHeader title="Backend e APIs" extra={`${tasks.backend.filter((t) => t.status === 'completed').length}/${tasks.backend.length}`} />
        <TaskList>{renderTasks(tasks.backend)}</TaskList>
      </Section>

      <Section>
        <SectionHeader title="Integrações Externas" extra={`${tasks.integracao.filter((t) => t.status === 'completed').length}/${tasks.integracao.length}`} />
        <TaskList>{renderTasks(tasks.integracao)}</TaskList>
      </Section>

      <Section>
        <SectionHeader title="Sistema Inteligente (IA)" extra={`${tasks.ia.filter((t) => t.status === 'completed').length}/${tasks.ia.length}`} />
        <TaskList>{renderTasks(tasks.ia)}</TaskList>
      </Section>
    </Container>
  )
}

export default SpecTasks
