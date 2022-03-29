import React, { useEffect } from 'react';
import './style.scss';
import ToDoItem from '../ToDoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../../../store/todoSlice'

function ToDoList() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos())
  }, []);

  const todos = useSelector(state => state.todos.todos)

  return (
    <div>
      <ul className='todo_list'>
        {todos.length 
          ? todos.map( todo => <ToDoItem key={todo.id} todo={todo} />) 
          : <p className='center'>No todos yet. Create new todo</p>
        }
      </ul>
    </div>
  )
}

export default ToDoList;