import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import {removeTodo, toggleTodoCompleted} from '../../../store/todoSlice'
import { Reorder } from 'framer-motion'

const variants = {
  initial: {},
  animate: {},
  exit: {},
}

function ToDoItem({todo}) {
  const dispatch = useDispatch()

  function toggleTodo() {
    dispatch(toggleTodoCompleted({id: todo.id}))
  }

  function deleteTodo() {
    dispatch(removeTodo({id: todo.id}))
  }

  return (
    <Reorder.Item 
      value={todo} 
      className='todoitem'
      whileHover={{
        cursor: 'grab',
      }}
      whileDrag={{
        scale: 1.05,
        cursor: 'grabbing',
      }}
      {...variants}
    >
      <input 
        className='todoitem_checkbox'
        type="checkbox" 
        checked={todo.completed} 
        onChange={toggleTodo} />
      <span className='todoitem_text'>{todo.text}</span>
      <button className='todoitem_btn' onClick={deleteTodo}>
      <span className="material-icons">delete</span>
      </button>
    </Reorder.Item>
  )
}

export default ToDoItem;