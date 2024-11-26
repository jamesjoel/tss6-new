import React, {useState, useEffect} from 'react'
import { API_URL } from '../../../constants/API_URL'
import axios from 'axios'

const ViewProduct = () => {
  let [allProduct, setAllProduct]=useState([]);

  useEffect(()=>{
    getAllPro()
  },
  []);

  let getAllPro = async()=>{
    let response = await axios.get(`${API_URL}/product`);
    console.log(response.data);
    setAllProduct(response.data);
  }
  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
    
                <h4>List of All Products</h4>
                <table className="table table-dark table-bordered my-3 table-striped table-hover">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Category</th>
                      <th>Sub-Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      allProduct.map((item, index)=><tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.category.name}</td>
                        <td>{item.subcategory.name}</td>
                      </tr>)
                    }
                  </tbody>
                </table>
              </div>
        </div>
    </div>

  )
}

export default ViewProduct