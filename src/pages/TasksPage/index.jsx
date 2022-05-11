import React, { useEffect, useMemo, useState } from 'react';
import './style.scss';

import { useSelector, useDispatch } from 'react-redux';
import { getUid } from 'src/helpers/getUid';
import { getFromDatabase } from 'src/helpers/firebase/getFromDatabase';
import { useInput } from 'src/hooks/useInput';
import { addTask, setTasks } from 'src/store/taskSlice';
import { sortByFunc } from 'src/helpers/sortByFunc';

import TaskList from 'src/components/Tasks/TaskList';
import InputField from 'src/components/elements/InputField';
import Button from 'src/components/elements/Button';
import Select from 'react-select'

function TasksPage() {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.tasks)
  const taskText = useInput('')
  const taskDate = useInput('')
  const [filteredBy, setFilteredtBy] = useState('uncompleted')
  const [sortBy, setSortBy] = useState(false)

  useEffect(async () => {
    await fetchTasks()
  }, []);

  async function fetchTasks() {
    const uid = getUid()
    if (uid) {
      const getTasks = await getFromDatabase(`users/${uid}/tasks`)
      if (getTasks) dispatch(setTasks(getTasks))
    }
    
  }

  const filteredTasks = useMemo(() => {
    if (filteredBy === 'completed') {
      const filtered = tasks.filter(task => task.completed === true)
      return filtered

    } else if (filteredBy === 'uncompleted') {
      const filtered = tasks.filter(task => task.completed === false)
      return filtered

    } else {
      return tasks
    }

  }, [tasks, filteredBy])

  const sortingTasks = [...filteredTasks]
  sortByFunc(sortingTasks, 'expireAt', {reverse: sortBy})

  const createTask = async () => {

    if (taskText.value.trim() && taskDate.value.trim()) {
      const newTask = {
        id: `task-id-${Date.now()}`,
        text: taskText.value,
        completed: false,
        ctreatedAt: Date.now(),
        expireAt: new Date(taskDate.value).getTime()
      }

      dispatch(addTask(newTask))
      taskText.cleareValue()
      await fetchTasks()
    }
  }

  const selectOptions = [
    { value: 'all', label: 'All' },
    { value: 'completed', label: 'Completed' },
    { value: 'uncompleted', label: 'Uncompleted' }
  ]

  return (
    <div className='tasks'>
      <div className='tasks_input'>
        <InputField 
          placeholder='Enter task text' 
          value={taskText.value} 
          onChange={taskText.onChange}
          handleEnter={createTask}
        />
        <div>
          <input type="date" onChange={taskDate.onChange} value={taskDate.value ? taskDate.value : ''} />
        </div>
        <div>
          <Button name='Create task' onClick={createTask} />
        </div>
      </div>

      <div className="tasks_bar">
        <div className="tasks_select">
          <Select
            options={selectOptions}
            onChange={value => setFilteredtBy(value.value)}
            defaultValue={selectOptions[2]}
            isSearchable={false}
          />
        </div>
        <button 
          className={sortBy ? 'tasks_btn reverse' : 'tasks_btn'} 
          onClick={() => setSortBy(!sortBy)}
        >
          <span className="material-icons">sort</span>
        </button>
      </div>

      <div className='tasks_list'>
        { filteredTasks.length
          ? <TaskList tasks={sortingTasks} /> 
          : <p className='center'>Tasks list empty.</p>
        }
      </div>
    </div>
  )
}

export default TasksPage;