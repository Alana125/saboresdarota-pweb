import styled from 'styled-components'

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 24px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.button};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export default Button
