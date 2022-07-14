import { Button, Input } from '~/components'
import { LoginWrapper, FormWrapper, ButtonWrapper } from './styles'

export const Login = () => {
  return (
    <LoginWrapper>
      <form action="">
        <FormWrapper>
          <Input name="name" label="Nome" />
          <Input type="password" name="password" label="Senha" />
        </FormWrapper>
        <ButtonWrapper>
          <Button text="Cadastrar" />
        </ButtonWrapper>
      </form>
    </LoginWrapper>
  )
}
