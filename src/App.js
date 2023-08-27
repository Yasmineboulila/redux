
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState,useEffect } from "react";
import ListTask from './component/ListTask';
import Addtask from './component/Addtask';
import { Provider } from 'react-redux';
import store from './redux/store/store';
function App() {
 
  return ( 
  
   
      <Provider store={store}>
      <div>
        <h1>ToDo Application</h1>
        <Addtask />
        <ListTask />
      </div>
    </Provider>
  
  );
}

export default App;
