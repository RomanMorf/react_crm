import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [
      {id: 1, name: 'user 1', surname: 'user surname 1'},
      {id: 2, name: 'user 2', surname: 'user surname 2'},
      {id: 3, name: 'user 3', surname: 'user surname 3'},
      {id: 4, name: 'user 4', surname: 'user surname 4'},
      {id: 5, name: 'user 5', surname: 'user surname 5'},
      {id: 6, name: 'user 6', surname: 'user surname 6'},
    ]
  },
  reducers: {
    addUser (state, action) {
      state.users.push({
        id: new Date().toString(),
        name: action.payload.name,
        surname: action.payload.surname,
      })
    },
  }
})

export const {addUser} = userSlice.actions;

export default userSlice.reducer;