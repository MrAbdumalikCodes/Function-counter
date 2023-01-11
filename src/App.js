import React, { useState } from 'react'
import './App.css';

function App() {
  const [count,setCount]=useState(0)

  function inc(){
    setCount(count+1)
  }

  function dec(){
    setCount(count-1)
  }
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </>
  )
}
export default App;

