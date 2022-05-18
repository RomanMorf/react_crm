import React from 'react';
import './style.scss';

import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoCompleted } from 'src/store/todoSlice'
import { Reorder, useDragControls } from 'framer-motion'

import Checkbox from 'src/components/elements/Checkbox';

function ToDoItem({todo, canEdit}) {
  const dispatch = useDispatch()
  const dragControls = useDragControls()

  function toggleTodo() {
    dispatch(toggleTodoCompleted({id: todo.id}))
  }

  function deleteTodo() {
    dispatch(removeTodo({id: todo.id}))
  }

  return (
    <Reorder.Item 
      value={todo}
      dragListener={!canEdit ? false : true}
      dragControls={dragControls}
      dragDirectionLock
      className={todo.completed ? 'todoitem completed' : 'todoitem'}
      whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
    >
      <Checkbox 
        onChange={ toggleTodo }
        checked={ todo.completed } 
        className='todoitem_checkbox'
      />
      <span className='todoitem_text'>{ todo.text }</span>
      <div className="todoitem_buttons">
        { canEdit && 
        <button 
          className='todoitem_btn hover' 
          onPointerDown={ e => dragControls.start(e, { snapToCursor: true }) }
        >
          <span className="material-icons">drag_indicator</span>
        </button>
        }
        <button className='todoitem_btn' onClick={deleteTodo}>
          <span className="material-icons">delete</span>
        </button>
      </div>
    </Reorder.Item>
  )
}

export default ToDoItem;