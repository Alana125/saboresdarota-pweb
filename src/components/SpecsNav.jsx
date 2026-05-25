import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const NavLink = styled(Link)`
  padding: 12px 16px;
  border-radius: 10px;
  background: ${({ active, theme }) => (active ? theme.colors.accent : theme.colors.inputBg)};
  color: ${({ active }) => (active ? 'white' : '#3B2621')};
  font-weight: 600;
  font-size: 14px;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: white;
  }
`

function SpecsNav({ current }) {
  return (
    <Nav>
      <NavLink to="/specs" active={current === 'overview'}>
        Visão Geral
      </NavLink>
      <NavLink to="/specs/requirements" active={current === 'requirements'}>
        Requerimentos
      </NavLink>
      <NavLink to="/specs/tasks" active={current === 'tasks'}>
        Tarefas
      </NavLink>
      <NavLink to="/specs/functionality" active={current === 'functionality'}>
        Funcionamento
      </NavLink>
    </Nav>
  )
}

export default SpecsNav
