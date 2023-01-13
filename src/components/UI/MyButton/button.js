import React from 'react'

const Mybutton = ({children, ...props}) => {
  return (
    <button {...props} className='btn btn-primary w-100'>
      {children} {/* props.childern bu MyButton componenti ichidagi ma'lumotni olib beradi */}
    </button>
  )
}
export default Mybutton