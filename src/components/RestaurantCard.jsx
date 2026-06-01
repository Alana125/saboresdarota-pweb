import styled from 'styled-components'
import { Star, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  overflow: hidden;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Image = styled.div`
  min-height: 170px;
  background: linear-gradient(180deg, rgba(59,38,33,0.12), rgba(0,0,0,0.04)), url(${({ src }) => src});
  background-size: cover;
  background-position: center;
`

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const TagRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
`

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`

const Price = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
`

const ViewLink = styled(Link)`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 600;
  transition: background 0.2s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`

function RestaurantCard({ restaurant }) {
  return (
    <Card>
      <Image src={restaurant.image} />
      <Content>
        <Title>{restaurant.name}</Title>
        <TagRow>
          <Tag>
            <Star size={14} /> {restaurant.rating}
          </Tag>
          <Tag>
            <MapPin size={14} /> {restaurant.distance}
          </Tag>
          <Tag>{restaurant.priceRange}</Tag>
        </TagRow>
        <Price>{restaurant.cuisine}</Price>
        <ViewLink to={`/restaurant/${restaurant.id}`}>Ver restaurante</ViewLink>
      </Content>
    </Card>
  )
}

export default RestaurantCard
