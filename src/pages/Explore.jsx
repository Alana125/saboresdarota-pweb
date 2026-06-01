import styled from 'styled-components'
import { Search, MapPin, Star, DollarSign } from 'lucide-react'
import { restaurants } from '../data/mockRestaurants'
import RestaurantCard from '../components/RestaurantCard'
import SectionHeader from '../components/SectionHeader'
import InputField from '../components/InputField'

const Container = styled.main`
  min-height: calc(100vh - 80px);
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const FilterPanel = styled.aside`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const FilterTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`

const FilterItem = styled.div`
  display: grid;
  gap: 10px;
`

const FilterInput = styled(InputField)`
  width: 100%;
`

const RestaurantGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`

const MapPreview = styled.div`
  min-height: 240px;
  border-radius: ${({ theme }) => theme.radii.base};
  background: linear-gradient(180deg, rgba(201, 139, 91, 0.14), rgba(245, 235, 221, 0.87));
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
`

function Explore() {
  return (
    <Container>
      <SectionHeader title="Explorar restaurantes" subtitle="Encontre o melhor lugar para sua jornada gastronômica" />
      <Layout>
        <div>
          <SearchBox>
            <Search size={18} />
            <SearchInput placeholder="Pesquisar por culinária, cidade ou prato" />
          </SearchBox>
          <RestaurantGrid>
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </RestaurantGrid>
        </div>
        <FilterPanel>
          <FilterTitle>Filtros</FilterTitle>
          <FilterItem>
            <label>Preço</label>
            <FilterInput type="text" placeholder="Baixo - Alto" />
          </FilterItem>
          <FilterItem>
            <label>Distância</label>
            <FilterInput type="text" placeholder="Menos de 5 km" />
          </FilterItem>
          <FilterItem>
            <label>Avaliação</label>
            <FilterInput type="text" placeholder="4 estrelas ou mais" />
          </FilterItem>
          <FilterItem>
            <label>Tipo de comida</label>
            <FilterInput type="text" placeholder="Regional, Gourmet" />
          </FilterItem>
          <FilterItem>
            <label>Clima</label>
            <FilterInput type="text" placeholder="Ensolarado, Chuvoso" />
          </FilterItem>
          <MapPreview>Mapa interativo será integrado aqui.</MapPreview>
        </FilterPanel>
      </Layout>
    </Container>
  )
}

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${({ theme }) => theme.colors.inputBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.input};
  padding: 14px 16px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const SearchInput = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  font-size: 14px;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
`

export default Explore
