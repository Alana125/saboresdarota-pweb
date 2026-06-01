import styled from 'styled-components'
import { Search } from 'lucide-react'
import { restaurants } from '../data/mockRestaurants'
import RestaurantCard from '../components/RestaurantCard'
import SectionHeader from '../components/SectionHeader'
import PrimaryButton from '../components/PrimaryButton'
import heroImage from '../assets/1000031933.png'

const PageContainer = styled.main`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`

// ============== HERO SECTION ==============
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: clamp(450px, 65vh, 650px);
  background: linear-gradient(135deg, #8B5E3C 0%, #6B4A2E 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${heroImage});
    background-size: cover;
    background-position: center;
    opacity: 0.35;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(139, 94, 60, 0.2) 0%,
      rgba(139, 94, 60, 0.5) 50%,
      rgba(139, 94, 60, 0.8) 100%
    );
    z-index: 2;
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 ${({ theme }) => theme.spacing.md};
  animation: fadeInDown 0.8s ease-out;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const HeroSubtitle = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.accent};
  font-size: clamp(12px, 2vw, 16px);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 16px;
`

const HeroTitle = styled.h1`
  margin: 0 0 16px 0;
  font-family: 'Playfair Display', serif;
  font-size: clamp(40px, 7vw, 60px);
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.15;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`

const HeroDescription = styled.p`
  margin: 0 0 40px 0;
  font-size: clamp(15px, 2.5vw, 18px);
  color: #F5E6D3;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
`

const SearchBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.98);
  border-radius: ${({ theme }) => theme.radii.button};
  padding: 16px 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
  transition: all ${({ theme }) => theme.transitions.smooth};

  &:focus-within {
    box-shadow: 0 16px 50px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`

const SearchInput = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

// ============== MAIN CONTENT ==============
const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }

  @media (min-width: 1024px) {
    padding: 0 ${({ theme }) => theme.spacing.xl};
  }
`

const Section = styled.section`
  padding: clamp(48px, 8vw, 80px) 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg} 0;
  }
`

// ============== CATEGORIES ==============
const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.sm};
  }
`

const CategoryCard = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.radii.base};
  padding: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.smooth};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-family: 'Poppins', sans-serif;
  box-shadow: ${({ theme }) => theme.colors.shadow};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.colors.strongShadow};
    transform: translateY(-4px);
  }
`

const CategoryIcon = styled.div`
  font-size: 36px;
  line-height: 1;
`

const CategoryName = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  line-height: 1.3;
`

// ============== RESTAURANTS GRID ==============
const RestaurantsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: ${({ theme }) => theme.spacing.md};
  }
`

// ============== EXPERIENCES ==============
const ExperiencesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ExperienceCard = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  transition: all ${({ theme }) => theme.transitions.smooth};
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.colors.strongShadow};
  }
`

const ExperienceImage = styled.div`
  height: 240px;
  background: linear-gradient(135deg, #C68642 0%, #8B5E3C 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
  overflow: hidden;
  background-size: cover;
  background-position: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ExperienceContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

const ExperienceTitle = styled.h3`
  margin: 0 0 12px 0;
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`

const ExperienceDesc = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`

// ============== CATEGORIES DATA ==============
const categories = [
  { id: 1, name: 'Nordestina', icon: '🥘' },
  { id: 2, name: 'Italiana', icon: '🍝' },
  { id: 3, name: 'Japonesa', icon: '🍣' },
  { id: 4, name: 'Árabe', icon: '🥙' },
  { id: 5, name: 'Cafeterias', icon: '☕' },
  { id: 6, name: 'Doces', icon: '🍰' },
  { id: 7, name: 'Frutos do Mar', icon: '🦐' },
]

const experiences = [
  {
    id: 1,
    name: 'Rota da Tapioca',
    desc: 'Descubra os melhores lugares para provar a tapioca, símbolo gastronômico nordestino.',
    icon: '🌾',
  },
  {
    id: 2,
    name: 'Rota do Caranguejo',
    desc: 'Explore restaurantes especializados em frutos do mar frescos e preparos únicos.',
    icon: '🦀',
  },
  {
    id: 3,
    name: 'Rota do Café',
    desc: 'Passeie por cafeterias premium com grãos selecionados e atmosfera acolhedora.',
    icon: '☕',
  },
  {
    id: 4,
    name: 'Sabores do Sertão',
    desc: 'Conheça a culinária autêntica do interior com comidas tradicionais e caseiras.',
    icon: '🌵',
  },
]

function Home() {
  return (
    <PageContainer>
      {/* ============== HERO BANNER ==============  */}
      <HeroSection>
        <HeroContent>
          <HeroSubtitle>✨ Experiências Gastronômicas</HeroSubtitle>
          <HeroTitle>Descubra sabores que contam histórias</HeroTitle>
          <HeroDescription>
            Explore restaurantes autênticos, pratos regionais e experiências culinárias que celebram a herança cultural de cada lugar.
          </HeroDescription>
          <SearchContainer>
            <SearchBox>
              <Search size={22} color="#8B5E3C" strokeWidth={2} />
              <SearchInput placeholder="Buscar restaurantes ou cidades..." />
            </SearchBox>
          </SearchContainer>
        </HeroContent>
      </HeroSection>

      <ContentWrapper>
        {/* ============== CATEGORIES ==============  */}
        <Section>
          <SectionHeader title="Explore por Categoria" subtitle="Encontre sabores que você ama" />
          <CategoriesGrid>
            {categories.map((cat) => (
              <CategoryCard key={cat.id} title={cat.name}>
                <CategoryIcon>{cat.icon}</CategoryIcon>
                <CategoryName>{cat.name}</CategoryName>
              </CategoryCard>
            ))}
          </CategoriesGrid>
        </Section>

        {/* ============== FEATURED RESTAURANTS ==============  */}
        <Section>
          <SectionHeader
            title="Restaurantes em Destaque"
            subtitle="Os melhores lugares para experimentar"
          />
          <RestaurantsGrid>
            {restaurants.slice(0, 6).map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </RestaurantsGrid>
        </Section>

        {/* ============== EXPERIENCES ==============  */}
        <Section>
          <SectionHeader
            title="Roteiros Gastronômicos"
            subtitle="Jornadas culinárias pela região"
          />
          <ExperiencesGrid>
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id}>
                <ExperienceImage>{exp.icon}</ExperienceImage>
                <ExperienceContent>
                  <ExperienceTitle>{exp.name}</ExperienceTitle>
                  <ExperienceDesc>{exp.desc}</ExperienceDesc>
                </ExperienceContent>
              </ExperienceCard>
            ))}
          </ExperiencesGrid>
        </Section>

        {/* ============== CTA SECTION ==============  */}
        <Section>
          <div style={{ textAlign: 'center', paddingTop: '20px' }}>
            <SectionHeader
              title="Pronto para explorar?"
              subtitle="Comece sua jornada gastronômica agora"
            />
            <PrimaryButton
              onClick={() => console.log('Navegar para explore')}
              style={{ marginTop: '24px' }}
            >
              Explorar Restaurantes
            </PrimaryButton>
          </div>
        </Section>
      </ContentWrapper>
    </PageContainer>
  )
}

export default Home
