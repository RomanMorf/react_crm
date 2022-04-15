import { createSlice } from '@reduxjs/toolkit'

const errorSlice = createSlice({
  name: 'errors',
  initialState: {
    errors: []
  },
  reducers: {
    setError (state, action) {
      state.errors.push({...action.payload})
    },
    clearErrors (state) {
      state.errors = []
    }
  }
})

export const { setError, clearErrors } = errorSlice.actions;

export default errorSlice.reducer;