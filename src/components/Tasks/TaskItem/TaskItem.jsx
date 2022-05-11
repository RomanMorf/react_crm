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

  const dExp = dateExpire < dateNow
  const dToday = dateExpire === dateNow
  const tComp = task.completed

  const deleteTask = () => {
    dispatch(removeTask({id: task.id}))
  }

  const toggleTask = () => {
    dispatch(toggleTaskCompleted({id: task.id}))
  }

  return (
    <div className={`task ${tComp ?'completed':''} ${dExp && !tComp ?'expired':''} ${dToday && !tComp ?'today':''}`}>
      <Checkbox checked={tComp} onChange={toggleTask}/>
      <p>{task.text}</p>
      <p>Expire - {dateExpire}</p>
      <button onClick={deleteTask}>
        <span className="material-icons">delete</span>
      </button>
    </div>
  )
}

export default TaskItem;