import React, {useEffect, useState} from 'react'
import { API_URL, API_PATH } from '../../constants/API_URL'
import axios from 'axios'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {addCart} from '../../redux/CartSlice'



/*
    interface PRO{
        title : String,
        price : Number,
        category : {
            name : String
        }
    }
*/
const Detail = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [showMsg, setShowMsg] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseMsg = (nav)=>{

    setShowMsg(false);
    navigate(nav);
  }
  const handleShowMsg = ()=>setShowMsg(true);


    let param = useParams();
    
    let BuyNow;
    let [pro, setPro] = useState({});
    useEffect(()=>{
        if(param.id){
            getProduct();
        }
    },[])

    let getProduct = async()=>{
        let response = await axios.get(`${API_URL}/product/${param.id}`);
        console.log(response.data[0])
        setPro(response.data[0]);
    }

    if(localStorage.getItem("access-user")){
        BuyNow = <button onClick={()=>navigate(`/buynow/${param.id}`)} className='btn btn-info m-3'>Buy Now</button>
    }else{
        BuyNow = <button onClick={handleShow} className='btn btn-info m-3'>Buy Now</button>

    }


    let goToLogin = ()=>{
        setShow(false);
        navigate("/login")
    }


    let addToCart = (pro)=>{
      setShowMsg(true);

      dispatch(addCart(pro))

    }

  return (
    <>
    

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You are not logged In
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={goToLogin}>
            Login
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>


      <Modal
        show={showMsg}
        onHide={handleCloseMsg}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This Item Added in you Cart
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={()=>handleCloseMsg("/products")}>
            Continue Shopping
          </Button>
          <Button variant="danger" onClick={()=>handleCloseMsg("/mycart")}>
            Go To Cart
          </Button>
          
        </Modal.Footer>
      </Modal>


    <div className="container my-4" style={{minHeight : "700px"}}>

       <div className="row">
            {
                pro
                ?
                <div className="col-md-12">
                <h4>Product Detail</h4>
                <hr/>
                <div className="row">
                    <div className="col-md-5">
                        <img src={`${API_PATH}/${pro.image}`} className='img-thumbnail'/>
                        <br />
                        <button onClick={()=>addToCart(pro)} className='btn btn-info m-3'>Add to Cart</button>
                        {BuyNow}
                    </div>
                    <div className="col-md-7">
                        <h5>{pro.title}</h5>
                        
                        <p>{pro.category ? pro.category.name : ''} -&gt; {pro.subcategory ? pro.subcategory.name : ''}</p>

                        <h5>&#8377; { pro.price && pro.discount ? (pro.price - (pro.price*pro.discount/100)).toFixed(2) : '' } 
                            <span className='text-info'>({pro.discount}% off)</span>
                        </h5>
                        
                        <h6><del className='text-danger'>&#8377; { pro.price ?  pro.price.toFixed(2) : ''}</del></h6>
                        <br />
                        <p>{pro.detail}</p>
                    </div>
                </div>
            </div>
            :
            ''
            }
        </div>

        
        
    </div>
    </>
  )
}

export default Detail

/*
let a;
for(a = 1; a <= 10; a++){
}

console.log(a);
*/