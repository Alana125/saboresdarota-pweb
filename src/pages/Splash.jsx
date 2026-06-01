import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PrimaryButton from '../components/PrimaryButton'

const SplashWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(180deg, #3B2621 0%, #5A3D33 45%, #D9B89C 100%);
  color: white;
`

const Content = styled.section`
  max-width: 720px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: clamp(36px, 5vw, 56px);
  margin: 0;
`

const Subtitle = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.87);
  max-width: 580px;
  margin: 0 auto;
`

function Splash() {
  return (
    <SplashWrapper>
      <Content>
        <span>Bem-vindo ao</span>
        <Title>Sabores da Rota</Title>
        <Subtitle>
          Descubra experiências gastronômicas regionais, turismo cultural e restaurantes premium com um layout acolhedor e intuitivo.
        </Subtitle>
        <PrimaryButton as={Link} to="/login">Entrar agora</PrimaryButton>
      </Content>
    </SplashWrapper>
  )
}

export default Splash
