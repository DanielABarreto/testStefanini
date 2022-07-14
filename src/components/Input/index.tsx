import { FC, InputHTMLAttributes } from 'react'
import { InputWrapper, InputComponent } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

export const Input: FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <InputWrapper>
      <label htmlFor={name}>{label}</label>
      <InputComponent id={name} {...rest} />
    </InputWrapper>
  )
}
