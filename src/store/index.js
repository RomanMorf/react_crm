import { configureStore } from '@reduxjs/toolkit';
import todoRducer from './todoSlice';
import userReducer  from './userSlice';
import authReducer from './authSlice';
import taskReducer from './taskSlice';
import errorReducer from './errorSlice';


export default configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    todos: todoRducer,
    tasks: taskReducer,
    errors: errorReducer,
  }, 
  middleware: GetDefaultMiddleware =>
  GetDefaultMiddleware({
      serializableCheck: false,
    }),
})