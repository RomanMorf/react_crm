import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {
    addUser (state, action) {
      state.users.push({
        id: new Date().toString(),
        name: action.payload.name,
        surname: action.payload.surname,
      })
    },
    createNewUser (state, action) {
      
    }
  }
})

export const {addUser} = userSlice.actions;

export default userSlice.reducer;