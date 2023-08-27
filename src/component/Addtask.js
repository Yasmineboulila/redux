import React, { useState } from 'react';


import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/actions';
export default function Addtask() {
  const dispatch = useDispatch();
   
      const[description,setdescription]=useState("")
     
   
      const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim() === '') return;
        const id = Date.now(); 
        dispatch(addTask(id, description));
        setdescription('');
      };
         
    
  return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Add new task"
      value={description}
      onChange={(e) => setdescription(e.target.value)}
    />
    <button type="submit" >Add Task</button>
  </form>
);
};


