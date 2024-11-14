import React from 'react'

const Product = () => {
    let allProduct = [
        {
            name : "I-Phone",
            price : 5000.00,
            detail : "sdfg sdfg sdfge35gsdfg e5g sdfgs eg",
            category : "Mobiles",
            stock : 10,
            image : "https://inspireonline.in/cdn/shop/files/iPhone_15_Green_PDP_Image_Position-1__en-IN.jpg?v=1694605323&width=823"
        },
        {
            name : "Sofa Set",
            price : 25000.00,
            detail : "sdfg sdfg sdfge35gsdfg e5g sdfgs eg",
            category : "Furniture",
            stock : 5,
            image : "https://5.imimg.com/data5/SELLER/Default/2022/10/CM/BY/RT/149977258/living-room-sofa-set-500x500.jpg"
        },
        {
            name : "T-Shirt",
            price : 1200.00,
            stock : 200,
            detail : "sdfg sdfg sdfge35gsdfg e5g sdfgs eg",
            category : "Fashion Men",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTszsnp4z1_1fEyxPTmdvwE-Om2zjWZnXEWzw&s"
        },
        {
            name : "Fridge",
            price : 25800.00,
            detail : "",
            stock : 0,
            category : "Electronics",
            image : "https://electronicparadise.in/cdn/shop/files/1_37771ff3-9cb0-49c4-96b0-d97ab37e91f1.png?v=1702290574&width=1100"
        }
    ]


  return (
    <div className="row">


        {
            allProduct.map((item)=>{
                return(
                    <div className="col-md-3">
                        <div className="card my-3">
                            <img className="card-img-top" src={item.image} style={{height : "200px"}} alt="Card image" />
                                <div className="card-body">
                                    <h6 className="card-title">{item.name}</h6>
                                    <p className="card-text m-0">{item.category} ${item.price}</p>
                                    {
                                        item.stock > 0 
                                        ?
                                        <small>In-Stock</small>
                                        :
                                        <small className='text-danger'>Out of Stock</small>

                                    }
                                    <br />
                                    <a href="#" className={"btn " + (item.price < 20000 ? "btn-primary " : "btn-success ") + (item.price < 5000 ? "disabled" : "")}>See Profile</a>
                                    
                                </div>
                        </div>
                        
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default Product