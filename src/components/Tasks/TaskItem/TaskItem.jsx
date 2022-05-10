import React from 'react';
import './style.scss'

import { useDispatch } from 'react-redux';
import { dateFilter } from 'src/helpers/dateFilter'
import { removeTask, toggleTaskCompleted } from 'src/store/taskSlice';

import Checkbox from 'src/components/elements/Checkbox';

function TaskItem({task}) {
  const dispatch = useDispatch()

  const expireAt = task.expireAt

  const deleteTask = () => {
    dispatch(removeTask({id: task.id}))
  }

  const toggleTask = () => {
    dispatch(toggleTaskCompleted({id: task.id}))
  }

  return (
    <div 
    className={task.completed ? 'task completed' : 'task'} 
    style={{backgroundColor: (
      expireAt < Date.now()) 
      && !task.completed ? 'rgb(251 116 116)' : null }}>
      <Checkbox checked={task.completed} onChange={toggleTask}/>
      <p>{task.text}</p>
      <p>Expire - {dateFilter(task.expireAt, 'date')}</p>
      <button onClick={deleteTask}>
        <span className="material-icons">delete</span>
      </button>
    </div>
  )
}

export default TaskItem;