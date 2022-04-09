import {createSlice} from '@reduxjs/toolkit'
import { db } from 'src/firebase'
import { ref, set } from "firebase/database";

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {
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

export const { createUser, fetchUsers } = userSlice.actions;

export default userSlice.reducer;