import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
`

export const InputComponent = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  font-size: 1.1rem;
  padding: 0 0.5rem;

  ${({ theme }) => css`
    border-bottom: 2px solid ${theme['gray-500']};
    color: ${theme['gray-100']};
    &:focus {
      box-shadow: none;
      border-color: ${theme['green-500']};
    }
    &::placeholder {
      color: ${theme['gray-500']};
    }
  `};
`
