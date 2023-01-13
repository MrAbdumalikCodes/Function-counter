import React from 'react'
import TableHeader from '../TableHeader/TableHeader'
import TableItem from '../TableItem/TableItem'
export const TableList = ({post,title}) => {
  return (
    <>
     <h2 className='text-center'>{title}</h2>
        <table class="table table-striped">
      <TableHeader title={title}/>
      {post.map((post,index) => (
        <TableItem number={index + 1} post={post} key={post.id}/>
      ))}
      </table>
    </>
  )
}
