import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  max-width: 75rem;
  margin: 5rem auto;
  padding: 2.5rem;
  background: ${({ theme }) => theme['gray-800']};
  border-radius: 8px;
`
