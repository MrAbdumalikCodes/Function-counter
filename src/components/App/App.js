import React,{useState} from 'react'
import '../App/App.css'
import { TableList } from '../TableList/TableList'


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
      <TableList post={post} title="Programming Language"/>
      </div>
    </>
  )
}
