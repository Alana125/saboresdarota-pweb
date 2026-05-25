import styled from 'styled-components'
import SectionHeader from '../components/SectionHeader'

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
`

function MerchantSettings() {
  return (
    <Container>
      <SectionHeader title="Configurações" subtitle="Ajustes do comerciante" />
      <Section>
        <p>Ajustes de conta e notificações ficarão disponíveis aqui.</p>
      </Section>
    </Container>
  )
}

export default MerchantSettings
