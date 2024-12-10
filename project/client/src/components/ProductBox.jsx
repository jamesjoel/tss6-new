import React from 'react'
import { API_PATH } from '../constants/API_URL'
import {NavLink} from 'react-router-dom'
const ProductBox = ({pro}) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4">
    <div className="box">
       <div className="option_container">
          <div className="options">
             <NavLink to={`/detail/${pro._id}`} className="option1">
             Detail
             </NavLink>
             
          </div>
       </div>
       <div className="img-box">
          <img src={`${API_PATH}/${pro.image}`} alt="" />
       </div>
       <div className="detail-box">
          <h5>
             {pro.title}
          </h5>
          <h6>
            {pro.price}
          </h6>
          
       </div>
          <p><small>{pro.category.name}</small></p>
    </div>
 </div>
  )
}

export default ProductBox