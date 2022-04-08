import React, { useEffect } from 'react';
import './style.scss';
import ToDoItem from 'src/components/ToDo/ToDoItem';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodos, setTodos } from 'src/store/todoSlice';
import { Reorder, AnimatePresence } from 'framer-motion'
import {fetchFromFirebase} from 'src/helpers/fetchFromFirebase'
import Loader from 'src/components/Loader';
import { getUid } from 'src/helpers/getUid'

function ToDoList() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.todos)

  useEffect(() => {
    async function fetchTodos() {
      const uid = getUid()
      if (uid) {
        const todos = await fetchFromFirebase(`${uid}/todos`)
        if (todos) dispatch(setTodos(todos))
      }
    }
    fetchTodos()
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