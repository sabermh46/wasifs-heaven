import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
  },
})

export const { increment } = exampleSlice.actions
export default exampleSlice.reducer
