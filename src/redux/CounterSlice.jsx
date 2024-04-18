import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: "dark",
  },
  reducers: {
    dark: (state) => {
      state.value = "dark"
    },
    ligth: (state) => {
      state.value = "ligth"
    }
  },
})


export const { dark, ligth } = counterSlice.actions

export default counterSlice.reducer