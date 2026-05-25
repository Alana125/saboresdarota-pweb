import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PrimaryButton from '../components/PrimaryButton'

const Container = styled.main`
  min-height: calc(100vh - 80px);
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
`

const Card = styled.section`
  max-width: 540px;
  width: 100%;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`

const Title = styled.h1`
  margin: 0 0 16px;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary};
`

const Description = styled.p`
  margin: 0 0 24px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

function NotFound() {
  return (
    <Container>
      <Card>
        <Title>Página não encontrada</Title>
        <Description>Desculpe, a página que você procura não existe.</Description>
        <PrimaryButton as={Link} to="/home">Ir para Home</PrimaryButton>
      </Card>
    </Container>
  )
}

export default NotFound
