import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import InputField from '../components/InputField'

const Container = styled.main`
  min-height: calc(100vh - 80px);
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
`

const Card = styled.section`
  max-width: 420px;
  width: 100%;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const Title = styled.h1`
  margin: 0;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.primary};
`

const Text = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Helper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const LinkButton = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`

function Login() {
  return (
    <Container>
      <Card>
        <Title>Entrar</Title>
        <Text>Faça login para acessar recomendações, reservas e seus favoritos.</Text>
        <FormControl>
          <label htmlFor="email">E-mail</label>
          <InputField id="email" type="email" placeholder="seu@email.com" />
        </FormControl>
        <FormControl>
          <label htmlFor="password">Senha</label>
          <InputField id="password" type="password" placeholder="••••••••" />
        </FormControl>
        <PrimaryButton>Entrar</PrimaryButton>
        <SecondaryButton>Entrar com Google</SecondaryButton>
        <Helper>
          <LinkButton to="/forgot-password">Esqueci minha senha</LinkButton>
          <LinkButton to="/signup">Criar conta</LinkButton>
        </Helper>
      </Card>
    </Container>
  )
}

export default Login
