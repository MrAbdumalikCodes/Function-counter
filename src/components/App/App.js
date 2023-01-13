import React,{useState} from 'react'
import '../App/App.css'
import { TableList } from '../TableList/TableList'
import Mybutton from '../UI/MyButton/button'


export default function App() {
  const [post,setPost] = useState([
    {id:1,title:'NextJs',stack:"Mern-Stack"},
    {id:2,title:'JavaScript',stack:"Full-Stack"},
    {id:3,title:'ReactJs',stack:"Mern-Stack"},
    {id:4,title:'AngularJs',stack:"Full-Stack"},
  ])
  return (
    <>
      <div className='app w-50 mx-auto border-1'>
        <form>
          <h5 className='text-center'>Create your first post</h5>
          <input type="text"
            className="form-control" 
            placeholder='Programming language...'
          />
          <input type="text"
            className='form-control my-3' 
            placeholder='Enter your favorite stack...'
          />
          <Mybutton disabled>Add post</Mybutton>
        </form>
      <TableList post={post} title="Programming Language"/>
      </div>
    </>
  )
}
