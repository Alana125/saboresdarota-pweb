import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { MapPin, Clock, Star, Heart } from 'lucide-react'
import { restaurants } from '../data/mockRestaurants'
import PrimaryButton from '../components/PrimaryButton'

const Container = styled.main`
  min-height: calc(100vh - 80px);
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.9fr;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Hero = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  overflow: hidden;
`

const HeroImage = styled.div`
  min-height: 320px;
  background: url(${({ src }) => src}) center/cover no-repeat;
`

const HeroBody = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary};
`

const MetaRow = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

const Section = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary};
`

const InfoList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`

const InfoItem = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`

const ActionRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`

const FavoriteButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.button};
  background: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.primary};
  min-height: 52px;
  padding: 0 20px;
  cursor: pointer;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

function Restaurant() {
  const { id } = useParams()
  const restaurant = restaurants.find((item) => item.id === id)

  if (!restaurant) {
    return (
      <Container>
        <Section>
          <Title>Restaurante não encontrado</Title>
          <Link to="/explore">Voltar à exploração</Link>
        </Section>
      </Container>
    )
  }

  return (
    <Container>
      <Content>
        <div>
          <Hero>
            <HeroImage src={restaurant.image} />
            <HeroBody>
              <Title>{restaurant.name}</Title>
              <MetaRow>
                <MetaItem>
                  <Star size={16} /> {restaurant.rating}
                </MetaItem>
                <MetaItem>
                  <MapPin size={16} /> {restaurant.distance}
                </MetaItem>
                <MetaItem>
                  <Clock size={16} /> 11:00 - 22:00
                </MetaItem>
              </MetaRow>
              <ActionRow>
                <PrimaryButton>Reservar mesa</PrimaryButton>
                <FavoriteButton>
                  <Heart size={16} /> Favoritar
                </FavoriteButton>
              </ActionRow>
            </HeroBody>
          </Hero>

          <Section>
            <SectionTitle>Cardápio digital</SectionTitle>
            <InfoList>
              <InfoItem>Prato 1 — Especialidade local</InfoItem>
              <InfoItem>Prato 2 — Sabor autêntico</InfoItem>
              <InfoItem>Prato 3 — Sugestão do chef</InfoItem>
            </InfoList>
          </Section>
        </div>

        <div>
          <Section>
            <SectionTitle>Sobre o restaurante</SectionTitle>
            <InfoList>
              <InfoItem>Culinária: {restaurant.cuisine}</InfoItem>
              <InfoItem>Faixa de preço: {restaurant.priceRange}</InfoItem>
              <InfoItem>Localização: Estrada Principal, Centro</InfoItem>
              <InfoItem>Experiência cultural e ambiente acolhedor.</InfoItem>
            </InfoList>
          </Section>
          <Section>
            <SectionTitle>Pratos recomendados</SectionTitle>
            <InfoItem>Carne de sol com mandioca, moqueca regional e sobremesa de caju.</InfoItem>
          </Section>
        </div>
      </Content>
    </Container>
  )
}

export default Restaurant
