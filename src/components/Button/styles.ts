import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary'

interface ButtonWrapperProps {
  variant: ButtonVariant
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  width: 200px;
  height: 80px;

  ${({ theme, variant }) => css`
    background-color: ${theme['gray-600']};
  `};
`
