import { FC } from 'react'
import { useTheme } from 'styled-components'
import { ButtonWrapper, ButtonVariant } from './styles'

interface ButtonProps {
  variant?: ButtonVariant
  text: string
}

export const Button: FC<ButtonProps> = ({ variant = 'primary', text }) => {
  const theme = useTheme()

  const variantButton = {
    primary: theme['green-300'],
    secondary: theme['yellow-500'],
  }

  return (
    <ButtonWrapper backgroundColor={variantButton[variant]}>
      {text}
    </ButtonWrapper>
  )
}
