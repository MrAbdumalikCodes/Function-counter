import React,{ useState } from 'react'
import '../App/App.css'
import { TableList } from '../TableList/TableList'
import Mybutton from '../UI/MyButton/button'
import { MyInput } from '../UI/MyInput/MyInput'

export default function App() {
  const [post,setPost] = useState([
    {id:1,title:'NextJs',stack:"Mern-Stack"},
    {id:2,title:'JavaScript',stack:"Full-Stack"},
    {id:3,title:'ReactJs',stack:"Mern-Stack"},
    {id:4,title:'AngularJs',stack:"Full-Stack"},
  ])
  const [title,setTitle]=useState('')
  const [stack,setStack] = useState('')

  const addPost = (e) => {
    e.preventDefault()
    const newPost = {
      id:Date.now(),
      title, //title:title
      stack //stack:stack
    }
    console.log(title);
    console.log(stack);
    setPost([...post,newPost])
    setTitle("")
    setStack("")
  }

  return (
    <>
      <div className='app w-50 mx-auto border-1'>
        <form>
          <h5 className='text-center'>Create your first post</h5>

          <MyInput type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="form-control" 
            placeholder="Create new post"
          />

          <MyInput 
          className='form-control my-3' 
          placeholder='Enter your favorite stack...'
          value={stack}
          onChange={e => setStack(e.target.value)}
          />
          <Mybutton onClick={addPost}>Add post</Mybutton>
        </form>
      <TableList post={post} title="Programming Language"/>
      </div>
    </>
  )
}
