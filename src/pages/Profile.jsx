import styled from 'styled-components'
import SectionHeader from '../components/SectionHeader'
import { User, Heart, Settings } from 'lucide-react'

const Container = styled.main`
  min-height: calc(100vh - 80px);
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
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

const Avatar = styled.div`
  width: 92px;
  height: 92px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  display: grid;
  place-items: center;
  font-size: 32px;
`

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const FieldLabel = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`

const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const MenuButton = styled.button`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.button};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 14px 16px;
  background: ${({ theme }) => theme.colors.inputBg};
  font-weight: 600;
  cursor: pointer;
`

function Profile() {
  return (
    <Container>
      <SectionHeader title="Meu Perfil" subtitle="Meus dados, preferências e histórico" />
      <Layout>
        <div>
          <Card>
            <ProfileRow>
              <Avatar>
                <User size={42} />
              </Avatar>
              <div>
                <h2>João Silva</h2>
                <p>Cliente</p>
              </div>
            </ProfileRow>
            <Field>
              <FieldLabel>E-mail</FieldLabel>
              <span>joao@email.com</span>
            </Field>
            <Field>
              <FieldLabel>Idioma</FieldLabel>
              <span>Português</span>
            </Field>
            <Field>
              <FieldLabel>Preferências</FieldLabel>
              <span>Comida mineira, pratos regionais</span>
            </Field>
          </Card>
          <Card>
            <SectionHeader title="Restaurantes favoritos" />
            <p>Veja seus restaurantes salvos para visitas futuras.</p>
          </Card>
        </div>
        <div>
          <Card>
            <SectionHeader title="Configurações" />
            <MenuButton>
              <Settings size={18} /> Atualizar perfil
            </MenuButton>
            <MenuButton>
              <Heart size={18} /> Favoritos
            </MenuButton>
            <MenuButton>
              <Settings size={18} /> Sair
            </MenuButton>
          </Card>
        </div>
      </Layout>
    </Container>
  )
}

export default Profile
