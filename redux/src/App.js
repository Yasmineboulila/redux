
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState,useEffect } from "react";
import ListTask from './component/ListTask';
import Addtask from './component/Addtask';

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    var newTodo=JSON.parse(localStorage.getItem("data"))
    if(newTodo){
    setData([...data,newTodo])
    }
  },[data])
  return ( 
  
    <div className="App">
      <Addtask/>
   <ListTask task={data} />
    </div>
  );
}

export default App;
