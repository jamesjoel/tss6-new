import React from 'react'
import { NavLink } from 'react-router-dom'

const OrderSuccess = () => {
  return (
    <div className="container my-5" style={{minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-12">
            <h2 className='text-center'>
                Your Order Has been successfuly placed ...
            </h2>
            <NavLink to='/view-order'>View Order</NavLink>
            </div>
        </div>
    </div>
  )
}

export default OrderSuccess