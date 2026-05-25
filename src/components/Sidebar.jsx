import styled from 'styled-components'
import { LayoutDashboard, ClipboardList, CalendarDays, MessageSquare, BarChart3, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

const SidebarContainer = styled.aside`
  width: 280px;
  min-width: 280px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const SidebarItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: ${({ theme }) => theme.radii.base};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.inputBg};
  font-weight: 600;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarItem to="/merchant/dashboard">
        <LayoutDashboard size={18} /> Dashboard
      </SidebarItem>
      <SidebarItem to="/merchant/orders">
        <ClipboardList size={18} /> Pedidos
      </SidebarItem>
      <SidebarItem to="/merchant/reservations">
        <CalendarDays size={18} /> Reservas
      </SidebarItem>
      <SidebarItem to="/merchant/reviews">
        <MessageSquare size={18} /> Avaliações
      </SidebarItem>
      <SidebarItem to="/merchant/reports">
        <BarChart3 size={18} /> Relatórios
      </SidebarItem>
      <SidebarItem to="/merchant/settings">
        <Settings size={18} /> Configurações
      </SidebarItem>
    </SidebarContainer>
  )
}

export default Sidebar
