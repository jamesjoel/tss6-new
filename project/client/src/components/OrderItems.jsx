import React, {useState} from 'react'
import { API_PATH, API_DOWNLOAD_INVOICE, API_URL } from '../constants/API_URL'
import axios from 'axios'

const OrderItems = ({item}) => {
    let [preloader, setPreloader] = useState(false)
    let getInvoice = async (id)=>{
            setPreloader(true);
              let response = await axios.get(`${API_URL}/invoice/${id}`)
              let aLink = document.createElement("a"); // <a></a>
              let url = `${API_DOWNLOAD_INVOICE}/invoice/${response.data.filename}`
                aLink.href=url; // <a href="url"></a>
                
                aLink.setAttribute("download", url); // <a href="url" download="url"></a>
                document.body.appendChild(aLink); // 
                aLink.click(); //
    
                document.body.removeChild(aLink);
                window.URL.revokeObjectURL(url);
                setPreloader(false);
              
        }


  return (
    <div className='bg-info col-md-12 py-3 my-2 rounded'>
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
                                        <button onClick={()=>getInvoice(item._id)} className='btn btn-sm btn-light'>Inoice {preloader ? <span className='spinner-border spinner-border-sm'></span> : ''}</button>
                                    </div>

                                </div>
                                </>
                                :
                                ''
                            }
                            </div>
                            
  )
}

export default OrderItems