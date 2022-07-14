import { FC } from 'react'
import { InputWrapper } from './styles'

interface InputProps {
  text: string
}

export const Input: FC<InputProps> = ({ text }) => {
  return (
    <InputWrapper>
      <label>{text}</label>
    </InputWrapper>
  )
}
