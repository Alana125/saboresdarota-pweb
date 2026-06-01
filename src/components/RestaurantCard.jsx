import styled from 'styled-components'
import { Star, MapPin, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: linear-gradient(135deg, #C68642 0%, #8B5E3C 100%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.slow};
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
      rgba(139, 94, 60, 0) 0%,
      rgba(139, 94, 60, 0.15) 40%,
      rgba(139, 94, 60, 0.5) 100%
    );
    transition: all ${({ theme }) => theme.transitions.smooth};
    z-index: 1;
    opacity: 0.7;
  }

  &:hover img {
    transform: scale(1.08);
  }
`

const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.base};
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  transition: all ${({ theme }) => theme.transitions.smooth};
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.colors.strongShadow};

    ${ImageWrapper} {
      img {
        filter: brightness(0.95);
      }
      
      &::after {
        opacity: 0.9;
      }
    }
  }
`

const ImageFavorite = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.98);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.base};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: scale(1.12);
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.16);
  }

  svg {
    color: ${({ isFavorite }) => (isFavorite ? '#D4A373' : '#8B5E3C')};
    fill: ${({ isFavorite }) => (isFavorite ? '#D4A373' : 'none')};
  }
`

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`

const TitleWrapper = styled.div`
  flex: 1;
`

const Title = styled.h3`
  margin: 0 0 6px 0;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.3;
`

const Cuisine = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const Description = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const InfoTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};

  svg {
    width: 14px;
    height: 14px;
    color: ${({ theme }) => theme.colors.accent};
  }
`

const PriceTag = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  background: rgba(198, 134, 66, 0.1);
  padding: 6px 12px;
  border-radius: 6px;
  margin-left: auto;
`

const ViewLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  margin-top: 16px;
  border-radius: ${({ theme }) => theme.radii.button};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 600;
  font-size: 14px;
  transition: all ${({ theme }) => theme.transitions.smooth};
  border: none;
  text-decoration: none;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.colors.shadowMedium};
  }

  &:active {
    transform: translateY(0);
  }
`

function RestaurantCard({ restaurant }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <Card>
      <ImageWrapper>
        <img src={restaurant.image} alt={restaurant.name} />
        <ImageFavorite onClick={handleFavorite} isFavorite={isFavorite}>
          <Heart size={20} />
        </ImageFavorite>
      </ImageWrapper>

      <Content>
        <Header>
          <TitleWrapper>
            <Title>{restaurant.name}</Title>
            <Cuisine>{restaurant.cuisine}</Cuisine>
          </TitleWrapper>
        </Header>

        <Description>{restaurant.description}</Description>

        <InfoRow>
          <InfoTag>
            <Star fill="currentColor" />
            {restaurant.rating}
          </InfoTag>
          <InfoTag>
            <MapPin />
            {restaurant.distance}
          </InfoTag>
          <PriceTag>{restaurant.priceRange}</PriceTag>
        </InfoRow>

        <ViewLink to={`/restaurant/${restaurant.id}`}>Explorar Restaurante</ViewLink>
      </Content>
    </Card>
  )
}

export default RestaurantCard
