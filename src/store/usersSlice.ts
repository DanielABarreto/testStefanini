import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserProps, UsersListProps } from '~/models'

const initialState: UsersListProps = {
  users: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<UserProps[]>) {
      state.users = action.payload
    },
  },
})
