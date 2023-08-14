import userEvent from '@testing-library/user-event';
import React, { useInsertionEffect } from 'react'
import { useState,useEffect } from 'react';
import Task from './Task';



 const Home = () => {
  const initialArray = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
  const [tasks,setTasks]=useState(initialArray);
  const[title,settitle]=useState("");
  const[description,setDescription]=useState("");

  console.log(title);
  console.log(description);


  const submithandler=(e)=>{
    e.preventDefault();
    // ...it is the spread operator, give single single element without array quotes [1,2,3 ]=== 1 2 3 ,,
    setTasks([...tasks,{title,description}]);

    settitle("");
    setDescription("");

    
  };

  const deletetask = (index)=>{
      const filteredArr = tasks.filter((val,i)=>{
        return i !==index;
      });
      setTasks(filteredArr);
  }

 useEffect (()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks));
 },[tasks]);


  return (
    <div className='container'>
        <h1>Daily goals</h1>

      <form onSubmit={submithandler}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>settitle(e.target.value)}/>

        <textarea placeholder='Description'  value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>

        <button type='submit'>Add</button>
      </form>

      {/* when ever task value is change it auto get changed with the help of userstate */}
      {tasks.map((item,index)=>(
        <Task key={index} 
        title={item.title} 
        description={item.description}
        deleteTask = {deletetask}
        index = {index}/>
      ))}
    </div>
  )
 }

export default Home;
