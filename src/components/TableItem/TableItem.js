import React from 'react'

const TableItem = (props) => {
    console.log(props);
    const {title,stack,id} = props.post
    return(
        <>
            <tbody>
                <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{stack}</td>
            <td>
              <button className='btn btn-outline-danger'>delete</button>
              </td>
                </tr>
            </tbody>
        </>
    )
}
export default TableItem