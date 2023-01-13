import React from 'react'

export const MyInput = React.forwardRef((props,ref) => {
  return (
    <input {...props} ref={ref}/>
  )
})
