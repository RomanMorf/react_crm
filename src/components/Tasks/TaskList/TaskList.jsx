import React, { useState } from 'react';
import './style.scss';

import ContextMenu from 'src/components/ContextMenu/ContextMenu';
import TaskItem from 'src/components/Tasks/TaskItem';

import { useContextMenu } from 'src/hooks/useContextMenu'
import { useDispatch } from 'react-redux';
import { removeTask, updateTasks } from 'src/store/taskSlice';
import { useModal, ModalComponent } from 'src/hooks/useModal';
import TaskEdit from '../TaskEdit';


function TaskList({tasks}) {
  const dispatch = useDispatch()
  const {showModal, setShowModal, closeModal } = useModal(false)
  const {anchorPoint, showContextMenu, targetData, ContextMenuTrigger} = useContextMenu('id')
  const [taskForEdit, setTaskForEdit] = useState(null)

  const menuList = [
    {text: 'Edit', action: 'edit'},
    {text: 'Delete', action: 'delete'},
  ]

  const getTaskById = () => {
    const idx = tasks.findIndex(task => task.id === targetData)
    setTaskForEdit(tasks[idx])
  }

  const updateTask = editedTask => {
    const idx = tasks.findIndex(task => task.id === targetData)
    tasks.splice(idx, 1, editedTask)
    dispatch(updateTasks(tasks))
    closeModal()
  }

  const handleContextMenu = (action) => {
    switch (action) {
      case 'edit':
        getTaskById()
        setShowModal(true)
        break;
      case 'delete':
        dispatch(removeTask({id: targetData}))
        break;
  
      default:
        break;
    }
  }

  return (
    <>
      {showModal && 
        <ModalComponent 
          onCloseModal={closeModal}
        >
          <TaskEdit task={taskForEdit} handleChange={updateTask} handleCancel={closeModal} />
        </ModalComponent>}
      <ContextMenuTrigger id='context-trigger'>
        <div className='tasklist'>

          {showContextMenu && 
          <ContextMenu 
            handleClick={handleContextMenu} 
            anchorPoint={anchorPoint} 
            menuList={menuList} 
          />}

          {tasks.length 
          ? tasks.map(task => <TaskItem key={task.id} task={task}/>)
          : <p className='center'>Tasks list is epmty.</p>
        }
        </div>
      </ContextMenuTrigger>
    </>
  )
}

export default TaskList;