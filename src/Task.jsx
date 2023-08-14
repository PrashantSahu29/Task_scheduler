import React from 'react'

 const Task = ({title,description,deleteTask,index}) => {


  return (
    <div className='task'>
        <div>
            <p>{title}</p>
            <span>{description}</span>
        </div>
        <button  onClick={()=>deleteTask(index)}>-</button>
        {/* we can not direct write the delete taks otherwise it will delete automatically whenever it is runn hence we pass via arrow function */}
    </div>
  )
}

export default Task;