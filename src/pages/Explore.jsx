import styled from 'styled-components'
import { Search, MapPin, Star, DollarSign, ChevronDown } from 'lucide-react'
import { restaurants } from '../data/mockRestaurants'
import RestaurantCard from '../components/RestaurantCard'
import SectionHeader from '../components/SectionHeader'
import { useState } from 'react'

const PageContainer = styled.main`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  min-height: calc(100vh - 68px);
`

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`

const HeaderSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const SearchSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.button};
  padding: 12px 16px;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.colors.shadow};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.colors.strongShadow};
  }
`

const SearchInput = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  font-size: 14px;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Poppins', sans-serif;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

const ViewToggle = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const ViewButton = styled.button`
  padding: 10px 16px;
  border: 1px solid ${({ theme, active }) => (active ? theme.colors.accent : theme.colors.border)};
  background: ${({ theme, active }) => (active ? theme.colors.accent : theme.colors.surface)};
  color: ${({ theme, active }) => (active ? 'white' : theme.colors.text)};
  border-radius: ${({ theme }) => theme.radii.button};
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 768px) {
    flex: 1;
  }
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 240px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const RestaurantsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`

const RestaurantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: ${({ theme }) => theme.spacing.md};
  }
`

const FilterPanel = styled.aside`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  height: fit-content;
  position: sticky;
  top: 80px;

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    padding: ${({ theme }) => theme.spacing.md};
  }
`

const FilterTitle = styled.h3`
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const FilterGroupTitle = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  input {
    cursor: pointer;
    accent-color: ${({ theme }) => theme.colors.accent};
  }
`

const PriceOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const PriceButton = styled.button`
  padding: 10px 12px;
  border: 1px solid ${({ theme, active }) => (active ? theme.colors.accent : theme.colors.border)};
  background: ${({ theme, active }) => (active ? theme.colors.accent : 'transparent')};
  color: ${({ theme, active }) => (active ? 'white' : theme.colors.text)};
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

const ResultsInfo = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 12px 0;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`

const cuisines = ['Nordestina', 'Italiana', 'Japonesa', 'Árabe', 'Cafeterias', 'Frutos do Mar']
const priceRanges = ['💰 Econômico', '💰💰 Moderado', '💰💰💰 Premium']

function Explore() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCuisines, setSelectedCuisines] = useState([])
  const [selectedPrice, setSelectedPrice] = useState('')
  const [minRating, setMinRating] = useState(0)

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCuisine =
      selectedCuisines.length === 0 || selectedCuisines.includes(restaurant.cuisine)

    const matchesPrice = !selectedPrice || restaurant.priceRange.includes(selectedPrice)

    const matchesRating = restaurant.rating >= minRating

    return matchesSearch && matchesCuisine && matchesPrice && matchesRating
  })

  const toggleCuisine = (cuisine) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisine) ? prev.filter((c) => c !== cuisine) : [...prev, cuisine]
    )
  }

  return (
    <PageContainer>
      <ContentWrapper>
        <HeaderSection>
          <SectionHeader
            title="Explorar Restaurantes"
            subtitle="Descubra novos lugares para explorar a gastronomia local"
          />
        </HeaderSection>

        <SearchSection>
          <SearchBox>
            <Search size={18} color="#3B2621" />
            <SearchInput
              placeholder="Buscar por nome, culinária ou cidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBox>
          <ViewToggle>
            <ViewButton active>Grid</ViewButton>
            <ViewButton>Mapa</ViewButton>
          </ViewToggle>
        </SearchSection>

        <Layout>
          <RestaurantsSection>
            <ResultsInfo>{filteredRestaurants.length} restaurantes encontrados</ResultsInfo>
            <RestaurantGrid>
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </RestaurantGrid>
          </RestaurantsSection>

          <FilterPanel>
            <FilterTitle>Filtros</FilterTitle>

            <FilterGroup>
              <FilterGroupTitle>Culinária</FilterGroupTitle>
              {cuisines.map((cuisine) => (
                <CheckboxLabel key={cuisine}>
                  <input
                    type="checkbox"
                    checked={selectedCuisines.includes(cuisine)}
                    onChange={() => toggleCuisine(cuisine)}
                  />
                  {cuisine}
                </CheckboxLabel>
              ))}
            </FilterGroup>

            <FilterGroup>
              <FilterGroupTitle>Faixa de Preço</FilterGroupTitle>
              <PriceOptions>
                {priceRanges.map((price, idx) => (
                  <PriceButton
                    key={price}
                    active={selectedPrice === price}
                    onClick={() => setSelectedPrice(selectedPrice === price ? '' : price)}
                  >
                    {price}
                  </PriceButton>
                ))}
              </PriceOptions>
            </FilterGroup>

            <FilterGroup>
              <FilterGroupTitle>Avaliação Mínima</FilterGroupTitle>
              {[0, 3, 4, 4.5].map((rating) => (
                <CheckboxLabel key={rating}>
                  <input
                    type="radio"
                    name="rating"
                    checked={minRating === rating}
                    onChange={() => setMinRating(rating)}
                  />
                  {rating === 0 ? 'Todas' : `${rating}⭐+`}
                </CheckboxLabel>
              ))}
            </FilterGroup>
          </FilterPanel>
        </Layout>
      </ContentWrapper>
    </PageContainer>
  )
}

export default Explore
