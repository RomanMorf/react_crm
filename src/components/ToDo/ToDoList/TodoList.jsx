import React, { useState } from 'react';
import './style.scss';

import { Reorder, AnimatePresence } from 'framer-motion'
import { useDispatch } from 'react-redux';
import { updateTodos } from 'src/store/todoSlice';

import ToDoItem from 'src/components/ToDo/ToDoItem';
import ToogleSwitch from 'src/components/elements/ToggleSwitch';

function ToDoList({todos}) {
  const dispatch = useDispatch()
  const [canEdit, setCanEdit] = useState(false)

  const reorderHandle = todos => dispatch(updateTodos({todos}))

  return (
    <div className='todolist'>
      <div className='todolist_checkbox'>
        <label htmlFor="can-edit">
          <ToogleSwitch id="can-edit" round checked={canEdit} onChange={() => setCanEdit(!canEdit)} />
          <span className='unselectable'>Allow edit "To do list"</span>
        </label>
      </div>
      <div className="todo_wrapper">
        <Reorder.Group
          className='todo_list unselectable scroll' 
          as='ul' 
          axis='y' 
          values={ todos } 
          onReorder={ reorderHandle }
        >
          <AnimatePresence initial={false}> 
            {todos.length &&
              todos.map( todo => <ToDoItem key={todo.id} todo={todo} canEdit={canEdit} />) 
            }
          </AnimatePresence>
        </ Reorder.Group>
      </div>
    </div>
  )
}

export default ToDoList;