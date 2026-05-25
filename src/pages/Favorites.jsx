import styled from 'styled-components'
import SectionHeader from '../components/SectionHeader'
import { restaurants } from '../data/mockRestaurants'
import RestaurantCard from '../components/RestaurantCard'

const Container = styled.main`
  min-height: calc(100vh - 80px);
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
`

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`

function Favorites() {
  return (
    <Container>
      <SectionHeader title="Favoritos" subtitle="Seus restaurantes salvos" />
      <Grid>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </Grid>
    </Container>
  )
}

export default Favorites
