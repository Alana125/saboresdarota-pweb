import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const Title = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`

const Subtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
`

const Extra = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

function SectionHeader({ title, subtitle, extra }) {
  return (
    <HeaderWrapper>
      <div>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </div>
      {extra && <Extra>{extra}</Extra>}
    </HeaderWrapper>
  )
}

export default SectionHeader
