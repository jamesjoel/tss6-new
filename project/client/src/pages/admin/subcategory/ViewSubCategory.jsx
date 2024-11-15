import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API_URL} from '../../../constants/API_URL'

const ViewSubCategory = () => {

  let [subCate, setSubCate] = useState([])

  // useEffect(()=>{
  //   axios.get(`${API_URL}/subcategory`)
  //   .then(response=>{
  //       setSubCate(response.data);
  //   })
  // },[])


  useEffect(()=>{
    getSubCate();
  },[])

  let getSubCate = async ()=>{
    let response = await axios.get(`${API_URL}/subcategory`);
    setSubCate(response.data);
  }
  



  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <h4>List of All Sub-Category</h4>
                <table className="table table-dark table-bordered my-3 table-striped table-hover">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Category Name</th>
                            <th>Sub-Category Name</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        subCate.map((item, index)=><tr>
                          <td>{index+1}</td>
                          <td>{item.categoryid.name}</td>
                          <td>{item.name}</td>
                        </tr>)
                      }
                    </tbody>
                 </table>
            </div>
        </div>
      </div>
  )
}

export default ViewSubCategory