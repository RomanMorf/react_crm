import {createSlice} from '@reduxjs/toolkit'
import firebase from '../firebase'
import { 
  getAuth,
  signOut,
} from 'firebase/auth'

const auth = getAuth();

const initialState = {
  uid: null,
  email: null,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: initialState
  },
  reducers: {
    async getUid (state, action) {
      console.log(auth.currentUser?.uid, 'uid');
    },
    setAuth (state, action) {
      console.log('setAuth - action');
      const {uid, email, token} = action.payload
      state.auth.uid = uid
      state.auth.email = email
      state.auth.token = token
      console.log('Sign-in - successful');
    },
    async singOutUser (state, action) {
      console.log('logOut');
      signOut(auth)
        .then(() => {
          state.auth.uid = null
          state.auth.email = null
          state.auth.token = null
          console.log('Sign-out successful.')
        })
        .catch((error) => {
          console.log(error)
          throw error
        });
    }
  }
})

export const { getUid, singOutUser, setAuth } = authSlice.actions;

export default authSlice.reducer;