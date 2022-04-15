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
    setAuth (state, action) {
      console.log(action.payload, 'action.payload');
    },
    async signOutUser (state, action) {
      const auth = getAuth();

      await signOut(auth)
        .then(() => {
          // console.log('Sign-out successful.')
        })
        .catch((error) => {
          // console.error(error, 'error signOutUser')
          throw error
        });
    }
  }
})

export const { signOutUser, setAuth } = authSlice.actions;

export default authSlice.reducer;