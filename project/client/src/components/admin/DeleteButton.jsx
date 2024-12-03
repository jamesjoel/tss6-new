import React from 'react'

const DeleteButton = (props) => {
  return (
    <button onClick={()=>props.onClick(props.item)} data-toggle="modal" data-target="#delModal" className='btn btn-danger btn-sm'>
        <i className="fa fa-trash" aria-hidden="true"></i>
    </button>
  )
}

export default DeleteButton