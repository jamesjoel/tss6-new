import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL, API_PATH,  API_DOWNLOAD_INVOICE} from '../../constants/API_URL'
import OrderItems from '../../components/OrderItems';

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


    

  return (
    <div className="container my-5" style={{minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-12">
                <h4>View Your Order History</h4>
                <hr />
                <div className='row'>
                    {
                        allPro.map(item=><OrderItems key={item._id} item={item} />)
                        
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewOrder