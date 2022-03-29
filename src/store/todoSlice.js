import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      {id: 1, text: 'some todo text 1', completed: false},
      {id: 2, text: 'some todo text 2', completed: false},
      {id: 3, text: 'some todo text 3', completed: true},
      {id: 4, text: 'some todo text 4', completed: false},
      {id: 5, text: 'some todo text 5', completed: true},
    ]
  },
  reducers: {
    addTodo (state, action) {
      state.todos.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false
      })
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    removeTodo (state, action) {
      const idx = state.todos.findIndex(todo => todo.id === action.payload.id)
      state.todos.splice(idx, 1)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    toggleTodoCompleted (state, action) {
      const idx = state.todos.findIndex(todo => todo.id === action.payload.id)
      state.todos[idx].completed = !state.todos[idx].completed
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    getTodos (state, action) {
      const todos = localStorage.getItem('todos')
      if (!todos) {
        state.todos = []
      } else {
        const parceTodos = JSON.parse(todos)
        state.todos = parceTodos
      }
    }
  }
})

export const {addTodo, removeTodo, toggleTodoCompleted, getTodos} = todoSlice.actions;

export default todoSlice.reducer;