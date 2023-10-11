import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);
  
  useEffect(()=>{
    count != 0 && count < 3 ? setAge(age+1) : setAge(age)
  },[count])

  return (
    <div>
      <div>안녕하십니까 전 {age}</div>
      <button onClick={()=>{
          setCount(count+1)
          console.log("누름")
      }}>누르면한살먹기</button>
    </div>
  )

}

export default App;
