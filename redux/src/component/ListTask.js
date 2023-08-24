import React from 'react'
import Task from './Task';
import { useState } from 'react';
import Addtask from './Addtask';
export default function ListTask({data}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    
  }
  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
    {data.filter((task)=>task.isDone).map((el)=><Task key={el.id} task={el} />)}
    <button style={{backgroundColor:"orange"}} onClick={handleShow} >Add Task</button>
    <Addtask show={show}  handleClose={()=>handleClose()} />

    </div>
  )
}