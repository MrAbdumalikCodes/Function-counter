import React,{useState} from 'react'
import Mybutton from '../UI/MyButton/button'
import { MyInput } from '../UI/MyInput/MyInput'

export const PostForm = ({createPost}) => {
  const [pozt,setPozt] = useState({title:"",stack:""})
  const addPost = (e) => {
    e.preventDefault()
    const newPost ={
        ...pozt,
        id:Date.now()
    }
    createPost(newPost)
    setPozt({title:"",stack:""})
  }
  return (
    <>
        <form>
          <h5 className='text-center'>Create your first post</h5>

          <MyInput type="text"
            value={pozt.title}
            onChange={e => setPozt({...pozt,title:e.target.value})}
            className="form-control" 
            placeholder="Create new post"
          />

          <MyInput 
          className='form-control my-3' 
          placeholder='Enter your favorite stack...'
          value={pozt.stack}
          onChange={e => setPozt({...pozt,stack:e.target.value})}
          />
          <Mybutton onClick={addPost}>Add post</Mybutton>
        </form>
    </>
  )
}
