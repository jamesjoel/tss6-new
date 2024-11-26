import React from 'react'

const DeleteComponent = (props) => {
  return (
    <div className="modal fade" id='delModal' aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>Delete {props.title}</h4>
                </div>
                <div className="modal-body">
                    Are you sure want to detete <b>{props.name}</b> {props.title}.
                </div>
                <div className="modal-footer">
                    <button onClick={props.confDeleteHander} className='btn btn-danger' data-dismiss="modal">Delete</button>
                    <button className='btn btn-dark' data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
  )
}

/*
    <DeleteComponent title="Category" confDeleteHander={} name={"Home Applice"} />
    <DeleteComponent title="Sub-Category" name={} />
    <DeleteComponent title="Product" name={}/>
*/
export default DeleteComponent