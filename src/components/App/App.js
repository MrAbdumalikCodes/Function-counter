import React,{ useState } from 'react'
import '../App/App.css'
import { PostForm } from '../PostForm/PostForm'
import { TableList } from '../TableList/TableList'


export default function App() {
  const [post,setPost] = useState([
    {id:1,title:'NextJs',stack:"Mern-Stack"},
    {id:2,title:'JavaScript',stack:"Full-Stack"},
    {id:3,title:'ReactJs',stack:"Mern-Stack"},
    {id:4,title:'AngularJs',stack:"Full-Stack"},
  ])
  const createPost = (newPost) => {
    setPost([...post,newPost])
  }

  const removePost = (posts) => {
    setPost(post.filter(s => s.id !== posts.id))
  }
  return (
    <>
      <div className='app w-50 mx-auto border-1'>
      <PostForm createPost = {createPost}/>
      {post.length
      ? <TableList removePost ={removePost} post={post} title="Programming Language"/>
      : <h4 className='my-3 text-center text-red'>You should add some Post</h4>
      } 
      </div>
    </>
  )
}
