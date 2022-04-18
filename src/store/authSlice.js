import {createSlice} from '@reduxjs/toolkit'
import { 
  getAuth,
  signOut,
} from 'firebase/auth'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: {}
  },
  reducers: {
    async signOutUser () {
      const auth = getAuth();

      await signOut(auth)
    }
  }
})

export const { signOutUser } = authSlice.actions;

export default authSlice.reducer;