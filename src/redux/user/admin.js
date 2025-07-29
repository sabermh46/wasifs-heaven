import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  admin: null,
  dashboardData: {},
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdmin(state, action) {
      Object.assign(state, action.payload)
    },
    clearAdmin() {
      return initialState
    },
  },
})

export const { setAdmin, clearAdmin } = adminSlice.actions
export default adminSlice.reducer
