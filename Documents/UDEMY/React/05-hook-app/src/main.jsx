import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainApp } from './09-useContext/mainApp';
import { BrowserRouter } from "react-router-dom";
//import { Padre } from './07-tarea-memo/Padre';
//import './08-useReducer/intro-reducer';




//import { TodoApp } from './08-useReducer/TodoApp';
//import { CallbackHook } from './06-memos/CallbackHook'
//import { MemoHook } from './06-memos/MemoHook'
//import { Memorize } from './06-memos/Memorize'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { MultiplesCustomHooks } from './03-examples/MultiplesCustomHooks'
//import { FormWithCustomHook } from './02-UseEffect/FormWithCustomHook'
//import { SimpleForm } from './02-UseEffect/SimpleForm'
//import { CounterWithCustomHook } from './01-UseState/CounterWithCustomHook'
// import { CounterApp } from './01-UseState/CounterApp'
//import { HookApp } from './HookApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <BrowserRouter>
   {/* <React.StrictMode> */}
    
      <MainApp />  
  
    {/* </React.StrictMode> */}
 </BrowserRouter>
  
)
