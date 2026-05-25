import { useState } from 'react'
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
  max-width: 560px;
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

const ProfileToggle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
`

const ProfileOption = styled.button`
  border: 1px solid ${({ active, theme }) => (active ? theme.colors.accent : theme.colors.border)};
  background: ${({ active, theme }) => (active ? theme.colors.accent : theme.colors.inputBg)};
  color: ${({ active }) => (active ? 'white' : '#3B2621')};
  border-radius: ${({ theme }) => theme.radii.base};
  padding: 16px;
  cursor: pointer;
  font-weight: 700;
`

const Fields = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`

const Footer = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
`

function Signup() {
  const [profileType, setProfileType] = useState('client')

  return (
    <Container>
      <Card>
        <Title>Cadastro</Title>
        <ProfileToggle>
          <ProfileOption active={profileType === 'client'} onClick={() => setProfileType('client')}>
            Cliente
          </ProfileOption>
          <ProfileOption active={profileType === 'merchant'} onClick={() => setProfileType('merchant')}>
            Comerciante
          </ProfileOption>
        </ProfileToggle>
        <Fields>
          <InputField type="text" placeholder="Nome completo" />
          <InputField type="email" placeholder="E-mail" />
          <InputField type="password" placeholder="Senha" />
          <InputField type="password" placeholder="Confirmar senha" />
          {profileType === 'merchant' && (
            <>
              <InputField type="text" placeholder="Nome do estabelecimento" />
              <InputField type="text" placeholder="Categoria" />
              <InputField type="text" placeholder="Endereço" />
            </>
          )}
        </Fields>
        <PrimaryButton>Criar conta</PrimaryButton>
        <SecondaryButton>Continuar com Google</SecondaryButton>
        <Footer>Ao criar sua conta, você concorda com os termos de uso.</Footer>
      </Card>
    </Container>
  )
}

export default Signup
