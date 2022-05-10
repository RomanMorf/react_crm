import {createSlice} from '@reduxjs/toolkit'
import { db } from 'src/firebase'
import { ref, set } from "firebase/database";
import { getUid } from 'src/helpers/getUid'

const taskslice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: []
  },
  reducers: {
    addTask (state, action) {
      state.tasks.push({...action.payload})
      const uid = getUid()
      if (uid) set(ref(db, `users/${uid}/tasks`), {...state.tasks})
    },
    removeTask (state, action) {
      const idx = state.tasks.findIndex(task => task.id === action.payload.id)
      state.tasks.splice(idx, 1)
      const uid = getUid()
      if (uid) set(ref(db, `users/${uid}/tasks`), {...state.tasks})
    },
    toggleTaskCompleted (state, action) {
      const idx = state.tasks.findIndex(task => task.id === action.payload.id)
      state.tasks[idx].completed = !state.tasks[idx].completed
      const uid = getUid()
      if (uid) set(ref(db, `users/${uid}/tasks`), {...state.tasks})
    },
    updateTasks (state, action) {
      state.tasks = action.payload.tasks
      const uid = getUid()
      if (uid) set(ref(db, `users/${uid}/tasks`), {...state.tasks})
    },
    uploadTasks (state) {
      const uid = getUid()
      if (uid) set(ref(db, `users/${uid}/tasks`), {...state.tasks})
    },
    setTasks (state, action) {
      state.tasks = action.payload
    },
  }
})

export const { 
  addTask,
  removeTask,
  toggleTaskCompleted,
  updateTasks,
  setTasks,
  uploadTasks
} = taskslice.actions;

export default taskslice.reducer;