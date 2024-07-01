import React, { useEffect, useState } from 'react'
import './TaskList.scss'
import { IInputField} from '../interface/toDo';

const TaskList:React.FC=()=> {
  const [inputFields, setInputFields]=useState<IInputField[]>([]);
  
  useEffect (()=>{
    setInputFields([{value:''}])
  },[])
  const handleAddField=()=> {
    if (inputFields[inputField.length-1].value.trim() !=='')

  
    setInputFields([...inputFields,{value :''}]);

  }

  const handleChange = (
    index : number,
   event : React.ChangeEvent <HTMLInputElement>) => {

      let value =[...inputFields];
      value[index].value = event.target.value;
      setInputFields(value)
      localStorage.setItem('taskList',JSON.stringify(value))
      handleAddField();
  } 
  return (
    <>
    <div className='task_list_section'>
      {
      inputFields.map((item,index) => (
        
    

      <div className='task_list_item' key={index}>
        <input type='checkbox' title='check' className='task_checkbox'></input>
        <input type='text' title='text' className='task_input'value={item.value} onChange={(event) =>{ 
          handleChange(index,event)
        } }></input>
        <button type='button' title='subbmit'>Remove</button>

      </div>
        ))}
    </div>
      I love you
    </>
  )
}

export default TaskList
