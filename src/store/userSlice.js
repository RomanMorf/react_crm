import {createSlice} from '@reduxjs/toolkit'

import { ref, set } from "firebase/database"
import { db } from 'src/firebase'


const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    currentUser: {},
  },
  reducers: {
    setUserInfo (state, action) {
      const user = action.payload

      state.currentUser = {...user}
    },
    createUser (state, action) {
      const {uid, name, displayName, email} = action.payload

      const newUser = {
        name: name || displayName || 'none',
        email: email,
        uid: uid
      }

      if (uid) set(ref(db, `users/${uid}/userInfo`), {...newUser})
    },
  }
})

export const { createUser, setUserInfo } = userSlice.actions;

export default userSlice.reducer;