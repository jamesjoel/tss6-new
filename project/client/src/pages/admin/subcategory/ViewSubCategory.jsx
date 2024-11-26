import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API_URL} from '../../../constants/API_URL'
import DeleteButton from '../../../components/admin/DeleteButton'
import DeleteComponent from '../../../components/admin/DeleteComponent'

const ViewSubCategory = () => {

  let [allSubCate, setAllSubCate] = useState([])
  let [subCate, setSubCate] = useState({});

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
    setAllSubCate(response.data);
  }
  
  let askDeleteHandler = (obj)=>{
    // console.log(obj)
    setSubCate(obj);
  }


  let confDeleteHander = async()=>{
    let response = await axios.delete(`${API_URL}/subcategory/${subCate._id}`);
    setAllSubCate(()=>{
      return allSubCate.filter(item=> item._id != subCate._id);
    })
  }

  return (
    <>
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        allSubCate.map((item, index)=><tr>
                          <td>{index+1}</td>
                          <td>{item.categoryid.name}</td>
                          <td>{item.name}</td>
                          <td>
                            <DeleteButton onClick={askDeleteHandler} item={item}/>
                          </td>
                        </tr>)
                      }
                    </tbody>
                 </table>
            </div>
        </div>
      </div>

      <DeleteComponent title="Sub-Category" name={subCate.name} confDeleteHander={confDeleteHander} />
    </>

  )
}

export default ViewSubCategory