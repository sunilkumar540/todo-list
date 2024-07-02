import React, { useEffect, useState } from 'react'
import './TaskList'
import { IInputField} from '../interface/toDo';

const completedTask:React.FC=()=> {
  const [inputFields, setInputFields]=useState<IInputField[]>([]);
  
  useEffect (()=>{
    const storedTaskList = JSON.parse(localStorage.getItem('completedTaskList') as string);
    if (storedTaskList){
      setInputFields(storedTaskList);
    } else{
      setInputFields([{value:''}]);
    }

  },[])
  
  const handleChange = (
    index : number,
   event : React.ChangeEvent <HTMLInputElement>) => {

      let value =[...inputFields];
      value[index].value = event.target.value;
      setInputFields(value)
      localStorage.setItem('completedTaskList',JSON.stringify(value))
  } 
  const handleRemoveTask=(index:number) =>{
    const values = [...inputFields];
    values.splice(index,1);
    setInputFields(values);
    localStorage.setItem('completedTaskList',
      JSON.stringify(values)
    ); 
  }
  const handleCompleteTask =(index:number,isChecked:boolean)=>{
    const values = [...inputFields];
    if(isChecked){
      let taskList = [];
      const newTaskList = JSON.parse
      (localStorage.getitem('TaskList')as string);
      if(newTaskList){
        taskList = newTaskList;
      } if (newTaskList[newTaskList.length-1].value===""){
        taskList.slice(newTaskList.length-1,0,values[index]);
      }else{
        taskList.push(values[index])
      }
      localStorage.setItem ('TaskList',JSON.stringify(newTaskList) );
      values.splice(index,1);
      setInputFields(values);
      localStorage.setItem('completedtaskList',JSON.stringify(values));
      
    }

  }
  return (
    <>
    <div className='task_list_section'>
      {
      inputFields.map((item,index) => (
        
    

      <div className='task_list_item' key={index}>
        {
          item.value?(
        
        <input type='checkbox' checked title='check' className='task_checkbox' onChange={
          (event)=>{handleCompleteTask(index,event.target.checked)}}></input>):

        (<span>+</span>)}
          
        <input type='text' title='text' className='task_input'value={item.value} onChange={(event) =>{ 
          handleChange(index,event)
        } }></input>
        {item.value &&(
        <button type='button' title='subbmit' onClick = {()=>{
          handleRemoveTask(index);
        }}>Remove</button>
        )}

      </div>
        ))}
    </div>
      
    </>
  )
}

export default completedTask
