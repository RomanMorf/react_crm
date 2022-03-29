import { configureStore } from '@reduxjs/toolkit';
import todoRducer from './todoSlice';
import userReducer  from './userSlice';

export default configureStore({
  reducer: {
    todos: todoRducer,
    users: userReducer,
  }
})