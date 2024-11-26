import React from 'react'

const ProductBox = ({pro}) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4">
    <div className="box">
       <div className="option_container">
          <div className="options">
             <a href="" className="option1">
             Add To Cart
             </a>
             <a href="" className="option2">
             Buy Now
             </a>
          </div>
       </div>
       <div className="img-box">
          <img src="" alt="" />
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