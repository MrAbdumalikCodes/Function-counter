import React from 'react'
import TableHeader from '../TableHeader/TableHeader'
import TableItem from '../TableItem/TableItem'
export const TableList = ({post,title,removePost}) => {
  return (
    <>
     <h2 className='text-center'>{title}</h2>
        <table className="table table-striped">
      <TableHeader title={title}/>
      {post.map((post,index) => (
        <TableItem removePost={removePost} number={index + 1} post={post} key={post.id}/>
      ))}
      </table>
    </>
  )
}
