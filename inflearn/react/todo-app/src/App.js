import './App.css';
import React, {useCallback, useState} from 'react';
import Lists from './components/Lists';
import Form from './components/Form';

export default function App(){
  console.log("App rendering")

  const initialTodoData = localStorage.getItem("todoData")
  ? JSON.parse(localStorage.getItem("todoData"))
  : [];
  const [todoData, setTodoData] = useState(initialTodoData) 
  const [value, setValue] = useState("")
  



  const handleClick = useCallback((id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData))
  }, [todoData])

  const handleRemoveClick = () => {
    setTodoData([]);
    localStorage.setItem("todoData", JSON.stringify([]));
  }
  
  return(
    <div className='flex items-center justify-center w-screen h-screen bg-blue-300'>
      <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
        <div className='flex justify-between mb-3'>
          <h1>할일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
      </div>
      <Lists todoData = {todoData} setTodoData = {setTodoData} handleClick={handleClick}/>
      <Form value={value} todoData = {todoData} setValue = {setValue} setTodoData = {setTodoData}/>
      </div>
    </div>
  )
}