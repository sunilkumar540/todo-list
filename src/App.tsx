import React from 'react'
import CompletedTask from './components/CompletedTask'
import TaskList from './components/TaskList'
import './App.scss';

const App:React.FC = () => {
  return (
    <>
    <div className='todo_list_section'>

      <div className='todo_list_container'>
        
        <div className='new_task_list task_list'>
          <h2>TaskList</h2>

          <div>
            <TaskList/>
          </div>
        </div>

        <div>
          <div className='completed_task_list task_list'>
            <h2>CompletedTask</h2>
            </div>
            <div>
              <CompletedTask/>
              </div> 
        </div>

      </div>
    </div>
    </>
  )
}

export default App
