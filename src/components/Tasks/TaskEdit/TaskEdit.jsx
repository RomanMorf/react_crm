import React, { useState } from 'react';
import './style.scss';

import Button from 'src/components/elements/Button';

function TaskEdit({task, handleChange, handleCancel}) {
  const [editedTask, setEditedTask] = useState(task)

  const getNumerickFullYear = () => {
    const date = new Date(editedTask.expireAt)
    const year = date.getFullYear() 
    const mon = parseInt(date.getMonth()+1) < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1 
    const day = parseInt(date.getDate()) < 10 ? `0${date.getDate()}` : date.getDate() 

    return `${year}-${mon}-${day}`
  }

  return (
    <div>
      <h2>TaskEdit</h2>
      <p><input type="text" value={editedTask.text} onChange={e =>  setEditedTask({...editedTask, text: e.target.value})} /></p>
      <p><input type="date" value={getNumerickFullYear()} onChange={e => setEditedTask({...editedTask, expireAt: new Date(e.target.value).getTime()})}  /></p>

      <Button onClick={() => handleChange(editedTask)} name='Save'/>
      <Button onClick={handleCancel} name='Cancel'/>
    </div>
  )
}

export default TaskEdit;