import { useState } from 'react'
import { useTodo, TodoContextProvider,TodoContext } from './contexts'
import './App.css'

function App() {
  const [todos,setTodos] = useState([]);

  const addTodo = (todo) =>{
     (prev)=>{
      
     }
  }

  return (
   <TodoContextProvider>
    <h1>Todo</h1>

   </TodoContextProvider>
  )
}

export default App
