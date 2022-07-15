import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '~/store'
import { getUsers } from '~/services'

export interface UserProps {
  name: string
  password: string
  confirmPassword?: string
}

const initialState: { users: UserProps[]; error: boolean } = {
  users: [],
  error: false,
}

const users = createSlice({
  name: 'users',
  initialState,

  reducers: {
    success(state, action: PayloadAction<UserProps[]>) {
      state.users = action.payload
    },

    error(state) {
      state.error = true
    },
  },
})

export const { success, error } = users.actions
export default users.reducer

export const fetchUsers = () => {
  return (dispatch: AppDispatch) => {
    const response = getUsers()
    dispatch(success(response))
  }
}

export const addUsers = (users: UserProps[]) => {
  return (dispatch: AppDispatch) => {
    dispatch(success(users))
  }
}
