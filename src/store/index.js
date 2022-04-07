import { configureStore } from '@reduxjs/toolkit';
import todoRducer from './todoSlice';
import userReducer  from './userSlice';
import authSlice from './authSlice';

export default configureStore({
  reducer: {
    todos: todoRducer,
    users: userReducer,
    auth: authSlice,
  }, 
  middleware: GetDefaultMiddleware =>
  GetDefaultMiddleware({
      serializableCheck: false,
    }),
})