import React from 'react'
import Mybutton from '../UI/MyButton/button';

const TableItem = (props) => {
    const {title,stack,id} = props.post
    return(
        <>
            <tbody>
                <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{stack}</td>
            <td>
                <Mybutton>Delete</Mybutton>
              </td>
                </tr>
            </tbody>
        </>
    )
}
export default TableItem