import React, { useState } from 'react';
import './style.scss';
import ToDoList from '../../components/ToDo/ToDoList';
import { addTodo } from '../../store/todoSlice';
import { useDispatch } from 'react-redux';
import InputField from '../../components/InputField';

function ToDo() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

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
        <InputField 
          value={text} 
          handleInput={(e) => setText(e.target.value)}
          handleEnter={addTask}
          placeholder='Enter taskname'
        />
        <button onClick={addTask}>
          Add task
        </button>
      </div>

      <ToDoList />
    </div>
  )
};

export default ToDo;