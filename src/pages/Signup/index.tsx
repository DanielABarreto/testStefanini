import { Button, Input } from '~/components'
import { LoginWrapper, FormWrapper, ButtonWrapper } from './styles'
import { addUsers, fetchUsers } from '~/store/modules'
import { RootState } from '~/store'
import { useAppDispatch, useAppSelector } from '~/hooks'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newLoginSchema = zod.object({
  name: zod.string(),
  nameFilter: zod.string(),
  password: zod.string(),
  confirmPassword: zod.string(),
})

type NewLoginData = zod.infer<typeof newLoginSchema>

export const Signup = () => {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector((state: RootState) => state.users)
  const [usersState, setUsersState] = useState(users)

  const { register, handleSubmit } = useForm<NewLoginData>({
    resolver: zodResolver(newLoginSchema),
    defaultValues: {
      name: '',
      nameFilter: '',
      password: '',
      confirmPassword: '',
    },
  })

  const handleAdd = (data: NewLoginData) => {
    console.log('passei', data)
    dispatch(
      addUsers([
        ...users,
        {
          name: data.name,
          password: data.password,
          confirmPassword: data.confirmPassword,
        },
      ]),
    )
  }

  const handleFilter = (data: NewLoginData) => {
    const newUsersFiltered =
      data.nameFilter.length > 0
        ? usersState.filter((item) => item.name.includes(data.nameFilter))
        : users

    setUsersState(newUsersFiltered)
  }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  useEffect(() => {
    setUsersState(users)
  }, [users])

  return (
    <LoginWrapper>
      <form onSubmit={handleSubmit(handleFilter)} action="">
        <FormWrapper>
          <Input label="Name Filter" {...register('nameFilter')} />
        </FormWrapper>
        <Button text="Filter" />
      </form>
      <form onSubmit={handleSubmit(handleAdd)} action="">
        <FormWrapper>
          <Input label="Name" {...register('name')} />
          <Input type="password" label="Password" {...register('password')} />
          <Input
            type="password"
            label="Confirm Password"
            {...register('confirmPassword')}
          />
        </FormWrapper>
        <ButtonWrapper>
          <Button text="Add" />
        </ButtonWrapper>
      </form>
      {usersState.map((item, index) => (
        <span key={index}>{item.name}</span>
      ))}
    </LoginWrapper>
  )
}
