import { configureStore } from '@reduxjs/toolkit'
import { characterApi } from './services/characterApi'
import characterSlice from './services/characterSlice'

export const store = configureStore({
  reducer: {
    [characterApi.reducerPath]: characterApi.reducer,
    character: characterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(characterApi.middleware),
})
