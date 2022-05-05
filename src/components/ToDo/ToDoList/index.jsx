import React, { useState } from 'react';
import './style.scss';
import ToDoItem from 'src/components/ToDo/ToDoItem';

import { Reorder, AnimatePresence } from 'framer-motion'
import { useDispatch } from 'react-redux';
import { updateTodos } from 'src/store/todoSlice';
import Checkbox from 'src/components/elements/Checkbox';

function ToDoList({todos}) {
  const dispatch = useDispatch()
  const [canEdit, setCanEdit] = useState(false)

  const reorderHandle = todos => dispatch(updateTodos({todos}))

  return (
    <div>
      <label htmlFor="can-edit">
        <Checkbox id="can-edit" checked={canEdit} onChange={() => setCanEdit(!canEdit)}/>
        <span className='unselectable'>Allow edit "To do list"</span>
      </label>
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