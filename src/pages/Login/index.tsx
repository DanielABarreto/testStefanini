import { Button, Input } from '~/components'
import { LoginWrapper, FormWrapper, ButtonWrapper } from './styles'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'

const newLoginSchema = zod.object({
  name: zod.string(),
  password: zod.string(),
})

type NewLoginData = zod.infer<typeof newLoginSchema>

export const Login = () => {
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm<NewLoginData>({
    resolver: zodResolver(newLoginSchema),
    defaultValues: {
      name: '',
      password: '',
    },
  })

  const handleSignup = useCallback(
    () => navigate('/signup', { replace: true }),
    [navigate],
  )

  return (
    <LoginWrapper>
      <form onSubmit={handleSubmit(handleSignup)} action="">
        <FormWrapper>
          <Input label="Name" {...register('name')} />
          <Input type="password" label="Password" {...register('password')} />
        </FormWrapper>
        <ButtonWrapper>
          <Button text="Signup" />
        </ButtonWrapper>
      </form>
    </LoginWrapper>
  )
}
