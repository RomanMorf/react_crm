import React from 'react';
import './style.scss';
import ToDoItem from 'src/components/ToDo/ToDoItem';
import { useDispatch } from 'react-redux';
import { updateTodos } from 'src/store/todoSlice';
import { Reorder, AnimatePresence } from 'framer-motion'

function ToDoList({todos}) {
  const dispatch = useDispatch()

  const reorderHandle = todos => dispatch(updateTodos({todos}))

  return (
    <div>
      <Reorder.Group 
        className='todo_list' 
        as='ul' 
        axis='y' 
        values={ todos } 
        onReorder={reorderHandle}
      >
        {todos.length 
        ? <AnimatePresence initial={false}> 
            {todos.length &&
              todos.map( todo => <ToDoItem key={todo.id} todo={todo} />) 
            }
          </AnimatePresence>
        : <p className='center'>No todos yet. Create new todo</p> }
      </Reorder.Group>
    </div>
  )
}

export default ToDoList;