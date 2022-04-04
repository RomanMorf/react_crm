import React, { useEffect } from 'react';
import './style.scss';
import ToDoItem from '../ToDoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos, updateTodos } from '../../../store/todoSlice';
import { Reorder, AnimatePresence } from 'framer-motion'


function ToDoList() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.todos)

  useEffect(() => {
    dispatch(getTodos())
  }, []);

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
        <AnimatePresence initial={false}> 
          {todos.length 
            ? todos.map( todo => <ToDoItem key={todo.id} todo={todo} />) 
            : <p className='center'>No todos yet. Create new todo</p>
          }
        </AnimatePresence>
      </Reorder.Group>
    </div>
  )
}

export default ToDoList;