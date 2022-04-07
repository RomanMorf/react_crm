import {createSlice} from '@reduxjs/toolkit'

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
    },
    updateTodos (state, actions) {
      state.todos = actions.payload.todos
      localStorage.setItem('todos', JSON.stringify(state.todos))
    }
  }
})

export const {addTodo, removeTodo, toggleTodoCompleted, getTodos, updateTodos} = todoSlice.actions;

export default todoSlice.reducer;