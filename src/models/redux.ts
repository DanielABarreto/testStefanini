export interface UserProps {
  name: string
  password: string
  confirmPassword: string
}

export interface UsersListProps {
  users: UserProps[]
}
