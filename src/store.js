import { configureStore } from '@reduxjs/toolkit'
import { characterApi } from './services/characterApi'
import characterSlice from './services/characterSlice'
import mobileSlice from './services/mobileSlice'

export const store = configureStore({
  reducer: {
    [characterApi.reducerPath]: characterApi.reducer,
    character: characterSlice,
    mobile: mobileSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(characterApi.middleware),
})
