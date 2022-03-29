import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import {removeTodo, toggleTodoCompleted} from '../../../store/todoSlice'


function ToDoItem({todo}) {
  const dispatch = useDispatch()

  function toggleTodo() {
    dispatch(toggleTodoCompleted({id: todo.id}))
  }

  function deleteTodo() {
    dispatch(removeTodo({id: todo.id}))
  }

  return (
    <li className='todoitem'>
      <input 
        className='todoitem_checkbox'
        type="checkbox" 
        checked={todo.completed} 
        onChange={toggleTodo} />
      <span className='todoitem_text'>{todo.text}</span>
      <button className='todoitem_btn' onClick={deleteTodo}>
      <span className="material-icons">delete</span>
      </button>
    </li>
  )
}

export default ToDoItem;