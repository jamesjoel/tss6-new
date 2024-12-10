import React, {useState, useEffect} from 'react'
import { getUserProfile } from '../../services/UserService'
import {useFormik} from 'formik'
import { API_URL } from '../../constants/API_URL'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'



const BuyNow = () => {
    let navigate = useNavigate();
    let param = useParams();
    let [user, setUser] = useState({})

    useEffect(()=>{
        getUser();
    },[])

    let getUser = async()=>{
        let userinfo = await getUserProfile()
        setUser({ 
                name : userinfo.name, 
                email : userinfo.email, 
                contact : userinfo.contact, 
                address : userinfo.address,
                mode : "",
                product_id : param.id
            })
    }


    let buyFrm = useFormik({
        enableReinitialize : true,
        initialValues : user,
        onSubmit : async(formData)=>{
            let response = await axios.post(`${API_URL}/order`, formData, {
                headers : { Authorization : localStorage.getItem("access-user") }
            })
            // console.log(response.data)
            navigate("/ordersuccess")

        }
    })


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

  return (
    <div className="container mt-5" style={{minHeight : "700px"}}>
        <form onSubmit={buyFrm.handleSubmit}>
        <div className="row">
            <div className="col-md-6">
                
                <div className="card m-4">
                    <div className="card-header">
                        <h3>Address and Other Detail</h3>
                    </div>
                    <input type='hidden' name='product_id' onChange={buyFrm.handleChange} value={buyFrm.values.product_id} />
                    <div className="card-body">
                        <div className='my-2'>
                        <label>Full Name</label>
                        <input name='name' disabled onChange={buyFrm.handleChange} value={buyFrm.values.name} type='text' className='from-control' />
                        </div>
                        <div className='my-2'>
                        <label>Email</label>
                        <input type='text' disabled name='email' onChange={buyFrm.handleChange} value={buyFrm.values.email} className='from-control' />
                        </div>
                        <div className='my-2'>
                        <label>Contact Number</label>
                        <input type='text' name='contact' onChange={buyFrm.handleChange} value={buyFrm.values.contact} className='from-control' />
                        </div>
                        <div className='my-2'>
                        <label>Address</label>
                        <textarea name='address' onChange={buyFrm.handleChange} value={buyFrm.values.address} className='from-control' ></textarea>
                        </div>
                        <div className='my-2'>
                        <label>Payment Option</label>
                            <input type='radio' name='mode' onChange={buyFrm.handleChange} value="online" />Online <br />
                            <input type='radio' name='mode' onChange={buyFrm.handleChange} value="upi"/>UPI's <br />
                            <input type='radio' name='mode' onChange={buyFrm.handleChange} value="debit_card"/>Dabit Card <br />
                            <input type='radio' name='mode' onChange={buyFrm.handleChange} value="credit_card"/>Credit Card <br />
                            <input type='radio' name='mode' onChange={buyFrm.handleChange} value="cod"/>COD <br />
                        </div>
                        
                    </div>
                </div>
                

            </div>
            <div className="col-md-6">
                <div className="card m-4">
                    <div className="card-header">
                    <h3>Product Detail</h3>
                    </div>
                    <div className="card-body">
                        <table className="table table-light">
                            <tbody>
                                <tr>
                                    <td>Product Title</td>
                                    <td style={{textAlign : "right"}}>{pro.title}</td>
                                </tr>
                                <tr>
                                    <td>Product Price</td>
                                    <td style={{textAlign : "right"}}>{pro.price}</td>
                                </tr>
                                <tr>
                                    <td>Discount ({pro.discount}%)</td>
                                    <td style={{textAlign : "right"}}>-{pro.price*pro.discount/100}</td>
                                </tr>
                                <tr>
                                    <td>Delivery Charges</td>
                                    <td style={{textAlign : "right"}}>+200</td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight : "bold"}}>Total Amount</td>
                                    <td style={{textAlign : "right", fontWeight : "bold"}}>{pro.price - (pro.price*pro.discount/100)+200}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer">
                        <button type='submit' className='btn btn-dark'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
  )
}

export default BuyNow