import styled from 'styled-components'

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.button};
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(59, 38, 33, 0.08);
  }
`

export default Button
