import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { MapPin, Clock, Star, Heart, Phone, Mail, Globe, ChevronLeft } from 'lucide-react'
import { restaurants } from '../data/mockRestaurants'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'

const PageContainer = styled.main`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  min-height: calc(100vh - 68px);
`

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 12px 0;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:hover {
    gap: 10px;
  }
`

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
    padding-top: ${({ theme }) => theme.spacing.lg};
  }
`

const HeroSection = styled.section`
  position: relative;
  height: 300px;
  border-radius: ${({ theme }) => theme.radii.base};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.colors.strongShadow};

  @media (min-width: 768px) {
    height: 400px;
  }
`

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.2) 40%,
    rgba(0, 0, 0, 0.7) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.lg};
`

const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing.lg};
`

const HeroInfo = styled.div`
  color: white;
  flex: 1;
`

const HeroTitle = styled.h1`
  margin: 0 0 12px 0;
  font-family: 'Playfair Display', serif;
  font-size: clamp(28px, 5vw, 44px);
  font-weight: 700;
  line-height: 1.2;
`

const HeroMeta = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`

const HeroMetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;

  svg {
    width: 16px;
    height: 16px;
  }
`

const HeroActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    button {
      width: 100%;
    }
  }
`

const FavoriteButton = styled.button`
  width: 52px;
  height: 52px;
  border-radius: ${({ theme }) => theme.radii.button};
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: ${({ isFavorite }) => (isFavorite ? '#C98B5B' : '#3B2621')};

  &:hover {
    transform: scale(1.1);
  }

  svg {
    fill: ${({ isFavorite }) => (isFavorite ? 'currentColor' : 'none')};
  }

  @media (max-width: 768px) {
    width: auto;
    flex: 1;
    padding: 0 20px;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

const MainSection = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.colors.shadow};
`

const SectionTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
`

const Description = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  font-size: 15px;
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.button};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const InfoLabel = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const InfoValue = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`

const MenuSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`

const MenuItem = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.button};
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: white;

    h4,
    p {
      color: white;
    }
  }

  h4 {
    margin: 0 0 6px 0;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin: 0;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

const SidebarSection = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  height: fit-content;
  position: sticky;
  top: 80px;

  @media (max-width: 1024px) {
    position: relative;
    top: auto;
  }
`

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radii.button};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.accent};
  }

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.accent};
  }
`

const ReviewSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`

const RatingStars = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`

const NotFound = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
  }
`

function Restaurant() {
  const { id } = useParams()
  const [isFavorite, setIsFavorite] = useState(false)
  const restaurant = restaurants.find((item) => item.id === id)

  if (!restaurant) {
    return (
      <PageContainer>
        <ContentWrapper>
          <BackButton to="/explore">
            <ChevronLeft size={18} /> Voltar
          </BackButton>
          <NotFound>
            <h2>Restaurante não encontrado</h2>
            <p>Desculpe, não conseguimos encontrar este restaurante.</p>
          </NotFound>
        </ContentWrapper>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <HeroSection>
        <HeroImage src={restaurant.image} alt={restaurant.name} />
        <HeroOverlay>
          <HeroContent>
            <HeroInfo>
              <HeroTitle>{restaurant.name}</HeroTitle>
              <HeroMeta>
                <HeroMetaItem>
                  <Star fill="white" />
                  {restaurant.rating}
                </HeroMetaItem>
                <HeroMetaItem>
                  <MapPin size={16} />
                  {restaurant.distance}
                </HeroMetaItem>
                <HeroMetaItem>
                  <Clock size={16} />
                  11:00 - 22:00
                </HeroMetaItem>
              </HeroMeta>
            </HeroInfo>
            <HeroActions>
              <PrimaryButton>Reservar Mesa</PrimaryButton>
              <FavoriteButton
                isFavorite={isFavorite}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart size={20} />
              </FavoriteButton>
            </HeroActions>
          </HeroContent>
        </HeroOverlay>
      </HeroSection>

      <ContentWrapper>
        <BackButton to="/explore">
          <ChevronLeft size={18} /> Voltar
        </BackButton>

        <Content>
          <div>
            <MainSection>
              <SectionTitle>Sobre</SectionTitle>
              <Description>{restaurant.description}</Description>

              <InfoGrid>
                <InfoCard>
                  <InfoLabel>Culinária</InfoLabel>
                  <InfoValue>{restaurant.cuisine}</InfoValue>
                </InfoCard>
                <InfoCard>
                  <InfoLabel>Faixa de Preço</InfoLabel>
                  <InfoValue>{restaurant.priceRange}</InfoValue>
                </InfoCard>
                <InfoCard>
                  <InfoLabel>Localização</InfoLabel>
                  <InfoValue>Centro</InfoValue>
                </InfoCard>
                <InfoCard>
                  <InfoLabel>Ambiente</InfoLabel>
                  <InfoValue>Acolhedor</InfoValue>
                </InfoCard>
              </InfoGrid>
            </MainSection>

            <MainSection>
              <MenuSection>
                <SectionTitle>Cardápio Destacado</SectionTitle>
                <MenuGrid>
                  <MenuItem>
                    <h4>Prato 1</h4>
                    <p>Especialidade local</p>
                  </MenuItem>
                  <MenuItem>
                    <h4>Prato 2</h4>
                    <p>Sabor autêntico</p>
                  </MenuItem>
                  <MenuItem>
                    <h4>Prato 3</h4>
                    <p>Sugestão do chef</p>
                  </MenuItem>
                  <MenuItem>
                    <h4>Bebidas</h4>
                    <p>Seleção regional</p>
                  </MenuItem>
                  <MenuItem>
                    <h4>Sobremesas</h4>
                    <p>Doces artesanais</p>
                  </MenuItem>
                  <MenuItem>
                    <h4>Acompanhamentos</h4>
                    <p>Receitas tradicionais</p>
                  </MenuItem>
                </MenuGrid>
              </MenuSection>
            </MainSection>
          </div>

          <div>
            <SidebarSection>
              <SectionTitle>Contato</SectionTitle>
              <ContactList>
                <ContactItem href="tel:+558299999999">
                  <Phone size={18} />
                  (82) 99999-9999
                </ContactItem>
                <ContactItem href="mailto:info@restaurant.com">
                  <Mail size={18} />
                  info@restaurant.com
                </ContactItem>
                <ContactItem href="#" target="_blank">
                  <Globe size={18} />
                  www.restaurant.com
                </ContactItem>
              </ContactList>
            </SidebarSection>

            <SidebarSection style={{ marginTop: '20px' }}>
              <SectionTitle>Avaliações</SectionTitle>
              <ReviewSection>
                <InfoValue>{restaurant.rating}</InfoValue>
                <RatingStars>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < Math.floor(restaurant.rating) ? '#C98B5B' : '#D9B89C'}
                      color={i < Math.floor(restaurant.rating) ? '#C98B5B' : '#D9B89C'}
                    />
                  ))}
                </RatingStars>
                <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>245 avaliações</p>
              </ReviewSection>
            </SidebarSection>
          </div>
        </Content>
      </ContentWrapper>
    </PageContainer>
  )
}

export default Restaurant
