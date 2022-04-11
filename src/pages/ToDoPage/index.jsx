import React, { useState, useEffect } from 'react';
import './style.scss';

import { addTodo } from 'src/store/todoSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setTodos } from 'src/store/todoSlice';
import { getFromDatabase } from 'src/helpers/firebase/getFromDatabase';
import { getUid } from 'src/helpers/getUid';
import { useLoading } from 'src/hooks/useLoading';

import ToDoList from 'src/components/ToDo/ToDoList';
import Loader from 'src/components/Loader';
import InputField from 'src/components/InputField';

function ToDo() {
  const [text, setText] = useState('')
  const {loading, toggleLoading, turnOffLoading, turnOnLoading} = useLoading()
  const dispatch = useDispatch()

  const todos = useSelector(state => state.todos.todos)

  useEffect(() => {
    async function fetchTodos() {
      const uid = getUid()
      if (uid) {
        const todos = await getFromDatabase(`users/${uid}/todos`)
        if (todos) dispatch(setTodos(todos))
      }
    }
    fetchTodos()
    turnOffLoading()
  }, []);


  const addTask = async (e) => {
    if (text.trim().length) {
      dispatch(addTodo({text}))
      setText('')
    }
  }

  return (
    <div className="todo">
      <h1>ToDo page</h1>
      <div className='todo_input'>
        {loading && <Loader/>}
        <InputField 
          value={text} 
          handleInput={setText}
          handleEnter={addTask}
          placeholder='Enter taskname'
        />
        <button onClick={addTask}>
          Add task
        </button>
      </div>

      <ToDoList todos={todos} />
    </div>
  )
};

export default ToDo;