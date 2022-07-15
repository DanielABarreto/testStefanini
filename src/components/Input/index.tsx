import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import { InputWrapper, InputComponent } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: ForwardRefRenderFunction<any, InputProps> = (
  { label, ...rest },
  ref,
) => {
  return (
    <InputWrapper>
      <label htmlFor={rest.name}>{label}</label>
      <InputComponent ref={ref} {...rest} />
    </InputWrapper>
  )
}

export default forwardRef(Input)
