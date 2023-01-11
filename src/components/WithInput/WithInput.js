import React,{useState} from 'react'

function WithInput() {
    const [value,setValue] = useState("Hi Say")
  return (
    <>
        <hr/>
        <p>Value: {value}</p>
        <input 
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        />
    </>
  )
}
export default  WithInput