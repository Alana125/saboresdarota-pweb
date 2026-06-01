import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Search, Heart, User, Menu, X } from 'lucide-react'
import { useState } from 'react'
import logoImage from '../assets/logotiposabores.png'

const Header = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    padding: 12px ${({ theme }) => theme.spacing.lg};
  }
`

const BrandWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`

const LogoImage = styled.img`
  height: 44px;
  width: auto;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const Brand = styled(Link)`
  display: none;
  align-items: center;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  gap: 8px;

  @media (min-width: 768px) {
    display: flex;
  }
`

const NavLinksWrapper = styled.nav`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex: 1;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    gap: ${({ theme }) => theme.spacing.lg};
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    font-size: 14px;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};

      &::after {
        width: 100%;
      }
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.accent};
      transition: width 0.3s ease;
    }
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`

const IconButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.button};
  background: ${({ theme }) => theme.colors.background};
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: white;
    transform: translateY(-2px);
  }

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`

const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.button};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: white;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileMenu = styled.nav`
  position: fixed;
  top: 68px;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0;
  max-height: calc(100vh - 68px);
  overflow-y: auto;
  animation: slideDown 0.3s ease;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    display: none;
  }

  a {
    padding: 14px ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    transition: all 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.accent};
      padding-left: calc(${({ theme }) => theme.spacing.md} + 8px);
    }

    &.specs-link {
      color: ${({ theme }) => theme.colors.accent};
      font-weight: 600;
    }
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 68px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 40;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`

function BrandNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <Header>
        <BrandWrapper>
          <LogoImage src={logoImage} alt="Sabores da Rota" />
          <Brand to="/">Sabores</Brand>
        </BrandWrapper>

        <NavLinksWrapper>
          <Link to="/home">Home</Link>
          <Link to="/explore">Explorar</Link>
          <Link to="/favorites">Favoritos</Link>
          <Link to="/profile">Perfil</Link>
        </NavLinksWrapper>

        <Actions>
          <IconButton to="/explore" title="Buscar">
            <Search size={18} />
          </IconButton>
          <IconButton to="/favorites" title="Favoritos">
            <Heart size={18} />
          </IconButton>
          <IconButton to="/profile" title="Perfil">
            <User size={18} />
          </IconButton>
          <HamburgerButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </HamburgerButton>
        </Actions>
      </Header>

      {mobileMenuOpen && (
        <>
          <Overlay onClick={closeMobileMenu} />
          <MobileMenu>
            <Link to="/home" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to="/explore" onClick={closeMobileMenu}>
              Explorar
            </Link>
            <Link to="/favorites" onClick={closeMobileMenu}>
              Favoritos
            </Link>
            <Link to="/profile" onClick={closeMobileMenu}>
              Perfil
            </Link>
          </MobileMenu>
        </>
      )}
    </>
  )
}

export default BrandNavbar
