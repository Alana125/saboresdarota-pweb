import styled from 'styled-components'
import { Zap, Code, Palette, Users } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import SpecsNav from '../components/SpecsNav'

const Container = styled.main`
  min-height: calc(100vh - 80px);
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const Card = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const CardIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  display: grid;
  place-items: center;
`

const CardTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`

const CardText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.6;
`

const DetailSection = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const Table = styled.div`
  display: grid;
  gap: 2px;
`

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 16px;
  padding: 14px;
  background: ${({ theme }) => theme.colors.inputBg};
  border-radius: 10px;
  font-size: 14px;

  &:first-child {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    font-weight: 700;
  }
`

const TableCell = styled.div`
  color: inherit;
`

function SpecOverview() {
  const overview = [
    {
      icon: Zap,
      title: 'MVP (Base)',
      description: 'Funcionalidades essenciais para lançamento inicial: autenticação, exploração e favoritos.',
    },
    {
      icon: MapPin,
      title: 'Fase 2 (Localização)',
      description: 'GPS, restaurantes próximos, mapa interativo e filtro por distância.',
    },
    {
      icon: Users,
      title: 'Fase 3 (Comerciante)',
      description: 'Dashboard de gerenciamento, relatórios e controle operacional.',
    },
    {
      icon: Palette,
      title: 'Fase 4 (IA)',
      description: 'Recomendações inteligentes, multilíngue e sistema avançado.',
    },
  ]

  const technologies = [
    { component: 'Frontend', tech: 'React 19 + Vite', status: 'Pronto' },
    { component: 'Estilo', tech: 'Styled-components', status: 'Pronto' },
    { component: 'Autenticação', tech: 'Firebase Auth', status: 'Pendente' },
    { component: 'Banco de Dados', tech: 'Firestore', status: 'Pendente' },
    { component: 'Backend', tech: 'Node.js + Express', status: 'Pendente' },
    { component: 'Mapas', tech: 'Google Maps API', status: 'Pendente' },
  ]

  const design = [
    { elemento: 'Tema', detalhes: 'Warm Minimalism com tons terrosos' },
    { elemento: 'Tipografia', detalhes: 'Playfair Display (títulos) + Poppins (corpo)' },
    { elemento: 'Paleta', detalhes: 'Marrom #3B2621, Bege #F5EBDD, Caramelo #C98B5B' },
    { elemento: 'Layout', detalhes: 'Mobile first, responsivo até 1440px' },
    { elemento: 'Componentes', detalhes: 'Botões, inputs, cards, navbar, sidebar' },
  ]

  return (
    <Container>
      <SpecsNav current="overview" />
      <SectionHeader title="Visão Geral do Projeto" subtitle="Resumo executivo e especificações" />

      <Grid>
        {overview.map((item, idx) => {
          const Icon = item.icon
          return (
            <Card key={idx}>
              <CardIcon>
                <Icon size={28} />
              </CardIcon>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.description}</CardText>
            </Card>
          )
        })}
      </Grid>

      <DetailSection>
        <SectionHeader title="Pilares do Projeto" />
        <Table>
          <TableRow>
            <TableCell>Pilar</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
          {[
            {
              pilar: '🎯 Descoberta Gastronômica',
              desc: 'Exploração intuitiva de restaurantes regionais',
              status: '60%',
            },
            {
              pilar: '📍 Localização Inteligente',
              desc: 'GPS e recomendações baseadas em proximidade',
              status: '0%',
            },
            {
              pilar: '👥 Comunidade Premium',
              desc: 'Favoritos, reservas e avaliações colaborativas',
              status: '30%',
            },
            {
              pilar: '🤖 IA Recomendadora',
              desc: 'Sugestões personalizadas por clima e gosto',
              status: '0%',
            },
            {
              pilar: '💼 Dashboard Comerciante',
              desc: 'Gestão operacional e análise de vendas',
              status: '20%',
            },
            {
              pilar: '🌍 Expansão Global',
              desc: 'Multilíngue, marketplace e roteiros gastronômicos',
              status: '0%',
            },
          ].map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>{item.pilar}</TableCell>
              <TableCell>{item.desc}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </Table>
      </DetailSection>

      <DetailSection>
        <SectionHeader title="Stack Tecnológico" />
        <Table>
          <TableRow>
            <TableCell>Componente</TableCell>
            <TableCell>Tecnologia</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
          {technologies.map((tech, idx) => (
            <TableRow key={idx}>
              <TableCell>{tech.component}</TableCell>
              <TableCell>{tech.tech}</TableCell>
              <TableCell>{tech.status}</TableCell>
            </TableRow>
          ))}
        </Table>
      </DetailSection>

      <DetailSection>
        <SectionHeader title="Design System" />
        <Table>
          <TableRow>
            <TableCell>Elemento</TableCell>
            <TableCell>Especificação</TableCell>
          </TableRow>
          {design.map((d, idx) => (
            <TableRow key={idx}>
              <TableCell>{d.elemento}</TableCell>
              <TableCell>{d.detalhes}</TableCell>
            </TableRow>
          ))}
        </Table>
      </DetailSection>

      <DetailSection>
        <SectionHeader title="Objetivos Estratégicos" />
        <Table>
          <TableRow>
            <TableCell>Curto Prazo (1-2 meses)</TableCell>
            <TableCell>Médio Prazo (3-6 meses)</TableCell>
            <TableCell>Longo Prazo (6-12 meses)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              • MVP com exploração e favoritos
              <br />• Login/Cadastro funcionando
              <br />• Design completo
            </TableCell>
            <TableCell>
              • GPS e localização ativa
              <br />• Sistema de reservas
              <br />• Dashboard comerciante
            </TableCell>
            <TableCell>
              • IA e recomendações
              <br />• Multilíngue
              <br />• Marketplace regional
            </TableCell>
          </TableRow>
        </Table>
      </DetailSection>
    </Container>
  )
}

export default SpecOverview
