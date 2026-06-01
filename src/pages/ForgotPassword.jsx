import styled from 'styled-components'
import PrimaryButton from '../components/PrimaryButton'
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
  width: 100%;
  max-width: 420px;
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
`

function ForgotPassword() {
  return (
    <Container>
      <Card>
        <Title>Recuperar senha</Title>
        <Text>Informe seu e-mail para receber o link de redefinição de senha.</Text>
        <InputField type="email" placeholder="seu@email.com" />
        <PrimaryButton>Enviar link</PrimaryButton>
      </Card>
    </Container>
  )
}

export default ForgotPassword
