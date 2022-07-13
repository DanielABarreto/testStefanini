import { FC } from 'react'
import { ButtonWrapper, ButtonVariant } from './styles'

interface ButtonProps {
  variant?: ButtonVariant
}

export const Button: FC<ButtonProps> = ({ variant = 'primary' }) => {
  return <ButtonWrapper variant={variant}>Enviar</ButtonWrapper>
}
