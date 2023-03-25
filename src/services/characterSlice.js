import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchName: '',
  gender: '',
  status: '',
  page: 1,
}

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchName = action.payload
    },
    genderSelected: (state, action) => {
      state.gender = action.payload
    },
    statusSelected: (state, action) => {
      state.status = action.payload
    },
    pageSelected: (state, action) => {
      state.page = action.payload
    },
  },
})

export default characterSlice.reducer
export const { search, genderSelected, statusSelected, pageSelected } =
  characterSlice.actions
