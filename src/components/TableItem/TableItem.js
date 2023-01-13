import React from 'react'
import Mybutton from '../UI/MyButton/button';

const TableItem = (props) => {
    return(
        <>
            <tbody>
                <tr>
            <td>{props.number}</td>
            <td>{props.post.title}</td>
            <td>{props.post.stack}</td>
            <td>
                <Mybutton>Delete</Mybutton>
              </td>
                </tr>
            </tbody>
        </>
    )
}
export default TableItem