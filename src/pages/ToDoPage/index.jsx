import React, { useState, useEffect } from 'react';
import './style.scss';

import { addTodo } from 'src/store/todoSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setTodos } from 'src/store/todoSlice';
import { getFromDatabase } from 'src/helpers/firebase/getFromDatabase';
import { getUid } from 'src/helpers/getUid';
import { useLoading } from 'src/hooks/useLoading';
import { useToast } from 'src/hooks/useToast';

import ToDoList from 'src/components/ToDo/ToDoList';
import Loader from 'src/components/Loader';
import InputField from 'src/components/elements/InputField';
import Button from 'src/components/elements/Button';

function ToDo() {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const {loading, turnOffLoading} = useLoading()
  const {toastSuccess} = useToast()

  const todos = useSelector(state => state.todos.todos)
  
  async function fetchTodos() {
    const uid = getUid()
    if (uid) {
      const getTodos = await getFromDatabase(`users/${uid}/todos`)
      if (getTodos) dispatch(setTodos(getTodos))
    }
  }

  useEffect(() => {
    fetchTodos()
    turnOffLoading()
  }, []);

  const addTask = async () => {
    if (text.trim().length) {
      dispatch(addTodo({text}))
      toastSuccess(`New task "${text}" created`)
      setText('')
    }
  }

  return (
    <div className="todo">
      <div className='todo_input'>
        <InputField 
          value={text} 
          handleInput={setText}
          handleEnter={addTask}
          placeholder='Enter taskname'
          />
        <div className='todo_btn'>
          <Button name="Add task" onClick={addTask}/>
        </div>
      </div>

      {loading && <Loader />}
      { todos.length 
        ? <ToDoList todos={todos} /> 
        : <p className='center'>No todos yet. Create new todo</p>
      }
    </div>
  )
}

export default ToDo;