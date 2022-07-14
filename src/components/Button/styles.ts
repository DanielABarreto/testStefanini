import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary'

interface ButtonWrapperProps {
  backgroundColor: string
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: flex;
  align-items: flex;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  ${({ theme, backgroundColor }) => css`
    background: ${backgroundColor};
    color: ${theme['gray-100']};
  `};
`
