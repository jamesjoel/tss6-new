import React, {useEffect} from 'react'
import './MyCart.module.css';
import { API_PATH } from '../constants/API_URL';
import { useSelector, useDispatch } from 'react-redux';
import { removeOneItem } from '../redux/CartSlice';

const MyCart = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    let dispatch = useDispatch();
    let cartData = useSelector(state=>state.CartSlice)
    let totalPrice = 0;
    let totalDiscount = 0;

    let cartTable = cartData.map(item=>{
        totalPrice += item.price;
        let x = item.price*item.discount/100;
        totalDiscount += x;
        return(
            <div className="row my-4" key={item._id}>
                <div className="row main align-items-center">
                    <div className="col-md-2"><img className="img-fluid img-thumbnail" src={`${API_PATH}/${item.image}`} /></div>
                    <div className="col-md-4">
                        <div className=" text-muted">{item.title}</div>
                        <div className="">{item.category ? item.category.name : ''}</div>
                    </div>
                    <div className='col-md-1'>{item.discount}%</div>
                    
                    <div className="col-md-2"> {item.price}</div>
                    <div className='col-md-2'>{ item.price-(item.price*item.discount/100)}</div>
                    <div className='col-md-1'>
                        <button className='btn btn-danger btn-sm' onClick={()=>dispatch(removeOneItem(item))}>X</button>
                    </div>
                </div>
            </div>
        )
    })



  return (
    <>
    {/* <TopBar PageName={PageName} /> */}
    
    <div className="container" style={{minHeight : "700px", marginTop : "200px"}}>
        <div className="row">
            
            <div className="col-md-12">
            <div className="card p-3">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted">{cartData.length} items</div>
                        </div>
                    </div>   

                    {
                        cartTable
                    } 
                    
                    
                    
                </div>
                <div className="col-md-3 offset-md-1">
                    <div><h5><b>Summary</b></h5></div>
                    <hr />
                    
                        <div className="" style={{paddingLeft:"0"}}>ITEMS {cartData.length}</div>
                        <table style={{width : "100%"}} className='mt-4'>
                            <tbody>
                                <tr>
                                    <td>Total Price</td>
                                    <td align='right'>{totalPrice}</td>
                                </tr>
                                <tr>
                                    <td>Total Discount</td>
                                    <td align='right'>-{totalDiscount}</td>
                                </tr>
                                <tr>
                                    <td>Delivery Charged</td>
                                    <td align='right'>+{cartData.length * 200 }</td>
                                </tr>
                                <tr style={{fontWeight : "bold"}}>
                                    <td>Finale Amount</td>
                                    <td align='right'>{ totalPrice - totalDiscount + (cartData.length * 200) }</td>
                                </tr>
                            </tbody>
                        </table>
                    
                    
                    
                    
                </div>
            </div>
            
        </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MyCart