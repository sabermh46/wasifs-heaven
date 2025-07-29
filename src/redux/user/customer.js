import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
  favorites: [],
}

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomer(state, action) {
      Object.assign(state, action.payload)
    },
    clearCustomer() {
      return initialState
    },
  },
})

export const { setCustomer, clearCustomer } = customerSlice.actions
export default customerSlice.reducer
