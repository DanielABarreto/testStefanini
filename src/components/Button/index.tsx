import { FC, ButtonHTMLAttributes } from 'react'
import { useTheme } from 'styled-components'
import { ButtonWrapper, ButtonVariant } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  text: string
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  text,
  ...rest
}) => {
  const theme = useTheme()

  const variantButton = {
    primary: theme['green-300'],
    secondary: theme['yellow-500'],
  }

  return (
    <ButtonWrapper backgroundColor={variantButton[variant]} {...rest}>
      {text}
    </ButtonWrapper>
  )
}
