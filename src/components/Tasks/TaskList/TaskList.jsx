import React from 'react';
import './style.scss';

import TaskItem from '../TaskItem';

function TaskList({tasks}) {

  return (
    <div className='tasklist'>
      {tasks && tasks.map(task => <TaskItem key={task.id} task={task}/>)}
    </div>
  )
}

export default TaskList;