import React from 'react'
import './TaskList.scss'

const TaskList:React.FC=()=> {
  return (
    <>
    <div className='task_list_section'>

      <div className='task_list_item'>
        <input type='checkbox' title='check' className='task_checkbox'></input>
        <input type='text' title='text' className='task_input'></input>
        <button type='button' title='subbmit'>Remove</button>

      </div>
    </div>
      I love you
    </>
  )
}

export default TaskList
