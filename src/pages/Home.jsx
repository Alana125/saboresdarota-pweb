import styled from 'styled-components'
import { Search, Star, MapPin } from 'lucide-react'
import { restaurants } from '../data/mockRestaurants'
import RestaurantCard from '../components/RestaurantCard'
import SectionHeader from '../components/SectionHeader'

const Container = styled.main`
  min-height: calc(100vh - 80px);
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
`

const Banner = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const BannerTitle = styled.h1`
  margin: 0;
  font-size: clamp(32px, 4vw, 44px);
  color: ${({ theme }) => theme.colors.primary};
`

const BannerDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 560px;
`

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${({ theme }) => theme.colors.inputBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.input};
  padding: 12px 16px;
`

const SearchInput = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

const Highlight = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`

const HighlightCard = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.colors.shadow};
`

const HighlightTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`

function Home() {
  return (
    <Container>
      <Banner>
        <BannerText>
          <span>Descubra rotas gastronômicas</span>
          <BannerTitle>Experiências de sabores e cultura regional</BannerTitle>
          <BannerDescription>
            Encontre refeições autênticas, restaurantes locais e recomendações especiais para seu passeio.
          </BannerDescription>
        </BannerText>
        <SearchBox>
          <Search size={18} />
          <SearchInput placeholder="Buscar restaurantes, pratos ou cidades" />
        </SearchBox>
      </Banner>

      <SectionHeader title="Restaurantes em destaque" subtitle="Os melhores lugares para experimentar" />
      <CardsRow>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </CardsRow>

      <Grid>
        <Highlight>
          <SectionHeader title="Comidas típicas" />
          <HighlightCard>
            <HighlightTitle>Sabores regionais</HighlightTitle>
            <p>Pratos que contam histórias da cultura local.</p>
          </HighlightCard>
          <HighlightCard>
            <HighlightTitle>Restaurantes próximos</HighlightTitle>
            <p>Descubra opções na sua rota com distância reduzida.</p>
          </HighlightCard>
        </Highlight>
        <Highlight>
          <SectionHeader title="Recomendações do dia" />
          <HighlightCard>
            <HighlightTitle>Mais avaliados</HighlightTitle>
            <p>Locais com melhor avaliação e experiência gastronômica.</p>
          </HighlightCard>
          <HighlightCard>
            <HighlightTitle>Experiências gourmet</HighlightTitle>
            <p>Ambientes que combinam gastronomia e turismo cultural.</p>
          </HighlightCard>
        </Highlight>
      </Grid>
    </Container>
  )
}

export default Home
