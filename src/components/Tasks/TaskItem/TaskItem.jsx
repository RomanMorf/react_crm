import React from 'react';
import './style.scss'

import { useDispatch } from 'react-redux';
import { dateFilter } from 'src/helpers/dateFilter'
import { removeTask, toggleTaskCompleted } from 'src/store/taskSlice';

import Checkbox from 'src/components/elements/Checkbox';

function TaskItem({task}) {
  const dispatch = useDispatch()
  const dateNow = dateFilter( Date.now() )
  const dateExpire = dateFilter( task.expireAt )

  const dExp = task.expireAt < Date.now()
  const dToday = dateExpire === dateNow
  const tComp = task.completed

  const deleteTask = () => {
    dispatch(removeTask({id: task.id}))
  }

  const toggleTask = () => {
    dispatch(toggleTaskCompleted({id: task.id}))
  }

  return (
    <div 
      id={task.id}
      data-id={ task.id }
      className={`task ${tComp ?'completed':''} ${dExp && !tComp ?'expired':''} ${dToday && !tComp ?'today':''}`}
    >
      <Checkbox checked={task.completed} onChange={toggleTask}/>
      <p className='task_text scroll'>{task.text}</p>
      <div className='task_expire'>{dateExpire}</div>
      <button onClick={deleteTask} className='mw768'>
        <span className="material-icons">delete</span>
      </button>
    </div>
  )
}

export default TaskItem;