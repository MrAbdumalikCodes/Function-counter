import React from 'react'
import '../App/App.css'
import TableHeader from '../TableHeader/TableHeader'
import TableItem from '../TableItem/TableItem'
export default function App() {
  return (
    <div className='app w-50 mx-auto border-1'>
        <table class="table table-striped">
      <TableHeader/>
      <TableItem post={{id:1, title:"VueJs",stack:'Full-Stack'}}/>
      </table>
    </div>
  )
}
