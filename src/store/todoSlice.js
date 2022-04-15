import {createSlice} from '@reduxjs/toolkit'
import { db } from '../firebase'
import { ref, set } from "firebase/database";
import { getUid } from 'src/helpers/getUid'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo (state, action) {
      state.todos.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false
      })
      const uid = getUid()
      if (uid) set(ref(db, `users/${uid}/todos`), {...state.todos})
    },
    removeTodo (state, action) {
      const idx = state.todos.findIndex(todo => todo.id === action.payload.id)
      state.todos.splice(idx, 1)
      const uid = getUid()
      if (uid) set(ref(db, `users/${uid}/todos`), {...state.todos})
    },
    toggleTodoCompleted (state, action) {
      const idx = state.todos.findIndex(todo => todo.id === action.payload.id)
      state.todos[idx].completed = !state.todos[idx].completed
      const uid = getUid()
      if (uid) set(ref(db, `users/${uid}/todos`), {...state.todos})
    },
    updateTodos (state, action) {
      state.todos = action.payload.todos
      const uid = getUid()
      if (uid) set(ref(db, `users/${uid}/todos`), {...state.todos})
    },
    uploadTodos (state) {
      const uid = getUid()
      if (uid) set(ref(db, `users/${uid}/todos`), {...state.todos})
    },
    setTodos (state, action) {
      state.todos = action.payload
    },
  }
})

export const { addTodo, removeTodo, toggleTodoCompleted, updateTodos, setTodos, uploadTodos } = todoSlice.actions;

export default todoSlice.reducer;