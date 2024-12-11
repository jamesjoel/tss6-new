import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL, API_PATH } from '../../constants/API_URL'

const ViewOrder = () => {

    let [allPro, setAllPro] = useState([]);
    useEffect(()=>{
        getAllPro();
    },[])
    let getAllPro = async()=>{
        let response = await axios.get(`${API_URL}/order/user`, {
            headers : {Authorization : localStorage.getItem("access-user")}
        })
        console.log(response.data)
        setAllPro(response.data);
    }


    let getInvoice = async (id)=>{
            await axios.get(`${API_URL}/invoice/${id}`);
    }

  return (
    <div className="container my-5" style={{minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-12">
                <h4>View Your Order History</h4>
                <hr />
                <div className='row'>
                    {
                        allPro.map(item=><div key={item._id} className='bg-info col-md-12 py-3 my-2 rounded'>
                            {
                                
                                item.product_id 
                                ?
                                <>
                                <div className="row">
                                <div className='col-md-2'>

                                <img src={`${API_PATH}/${item.product_id.image}`} style={{height : "100px", width : "150px"}} className='img-thumbnail'/>
                                </div>
                                <div className='col-md-3'>

                                    <h4 className='text-light m-0'>{item.product_id.title}</h4>
                                    <h5 className='text-light m-0 '>{item.product_id.price}</h5>
                                </div>
                                    <div className='col-md-3 m-0'>
                                        <h5 className='m-0 text-light'>{item.orderdate ? new Date(item.orderdate).getDate()+"/"+(new Date(item.orderdate).getMonth()+1)+"/"+new Date(item.orderdate).getFullYear() : ''}</h5>

                                    </div>
                                    <div className='col-md-2'>
                                        <h5>{item.cancle_status==0 ? 'On the Way' : item.cancle_status==1 ? 'Develivered' : 'Cancled' }</h5>
                                        <button className='btn btn-dark btn-sm'>Cancle</button>
                                    </div>
                                    <div className='col-md-1'>
                                        <button onClick={()=>getInvoice(item._id)} className='btn btn-sm btn-light'>Inoice</button>
                                    </div>

                                </div>
                                </>
                                :
                                ''
                            }
                            </div>
                            )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewOrder