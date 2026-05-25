import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Search, Heart, User, Home } from 'lucide-react'

const Header = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.md};
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;

  a {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    transition: color 0.2s ease;
    &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

const IconButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.inputBg};
  }
`

function BrandNavbar() {
  return (
    <Header>
      <Brand to="/">Sabores da Rota</Brand>
      <NavLinks>
        <Link to="/home">Home</Link>
        <Link to="/explore">Explorar</Link>
        <Link to="/favorites">Favoritos</Link>
        <Link to="/profile">Perfil</Link>
        <Link to="/specs" style={{ fontSize: '12px', color: '#C98B5B' }}>Specs</Link>
      </NavLinks>
      <Actions>
        <IconButton to="/explore" aria-label="Buscar">
          <Search size={18} />
        </IconButton>
        <IconButton to="/favorites" aria-label="Favoritos">
          <Heart size={18} />
        </IconButton>
        <IconButton to="/profile" aria-label="Perfil">
          <User size={18} />
        </IconButton>
      </Actions>
    </Header>
  )
}

export default BrandNavbar
