import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { usersReducer } from './modules'

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()
