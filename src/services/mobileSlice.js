import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  visibility: false,
}

const mobileSlice = createSlice({
  name: 'mobile',
  initialState,
  reducers: {
    setVisibility: (state, action) => {
      state.visibility = action.payload
    },
  },
})

export default mobileSlice.reducer
export const { setVisibility } = mobileSlice.actions
