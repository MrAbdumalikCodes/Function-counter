import React,{useState} from 'react'
function ShowText() {
    const [toggleBtn,setToggleBtn] = useState(false)

    return (
        <>
            <button className='show' onClick={() => setToggleBtn(!toggleBtn)} >Show</button>
            {toggleBtn 
            ? 
            <p>YouTube Content</p>
            :null
            }
        </>
    )
}
export default ShowText
