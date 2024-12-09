import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('userProfile')) ? JSON.parse(localStorage.getItem('userProfile')) : null,
  },
  reducers: {
    userData: (state, action) => {
      state.value = action.payload
    },
  },
})


export const { userData } = counterSlice.actions

export default counterSlice.reducer