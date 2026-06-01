import styled from 'styled-components'
import SectionHeader from '../components/SectionHeader'

const Container = styled.main`
  min-height: calc(100vh - 80px);
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const MetricCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const MetricValue = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`

const MetricLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Section = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: ${({ theme }) => theme.spacing.lg};
`

const Table = styled.div`
  display: grid;
  gap: 12px;
`

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 12px;
  padding: 14px;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.inputBg};
`

function MerchantDashboard() {
  return (
    <Container>
      <SectionHeader title="Dashboard do Comerciante" subtitle="Visão geral das operações e desempenho" />
      <Grid>
        <MetricCard>
          <MetricLabel>Reservas</MetricLabel>
          <MetricValue>124</MetricValue>
        </MetricCard>
        <MetricCard>
          <MetricLabel>Vendas</MetricLabel>
          <MetricValue>R$ 18.400</MetricValue>
        </MetricCard>
        <MetricCard>
          <MetricLabel>Avaliação média</MetricLabel>
          <MetricValue>4.8</MetricValue>
        </MetricCard>
      </Grid>
      <Section>
        <SectionHeader title="Pedidos recentes" />
        <Table>
          <TableRow>
            <span>Pedido #1021</span>
            <span>Em andamento</span>
            <span>R$ 125</span>
          </TableRow>
          <TableRow>
            <span>Pedido #1022</span>
            <span>Finalizado</span>
            <span>R$ 210</span>
          </TableRow>
          <TableRow>
            <span>Pedido #1023</span>
            <span>Confirmado</span>
            <span>R$ 180</span>
          </TableRow>
        </Table>
      </Section>
    </Container>
  )
}

export default MerchantDashboard
