import React, { useState } from 'react'
import Counter from '../Counter/Counter'
import WithInput from '../WithInput/WithInput'
import ShowText from '../ShowText/ShowText';
import './App.css';

function App() {
  return (
    <>
      <div className="app">
        <Counter/>
        <WithInput/>
        <ShowText/>
      </div>
    </>
  )
}
export default App;

