import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { API_URL } from '../../../constants/API_URL'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import SubCateSchema from '../../../schemas/SubCategorySchema'


const AddSubCategory = () => {
  let param = useParams();
  let navigate = useNavigate();
  let [cate, setCate] = useState([]);
  let [subCate, setSubCate] = useState({
    name : "",
    categoryid :  ""
  })

  useEffect(()=>{
    axios.get(`${API_URL}/subcategory/${param.id}`)
    .then(response=>{
      setSubCate(response.data[0])
    })
  },[])

  useEffect(()=>{
    axios.get(`${API_URL}/category`)
    .then(response=>{
      // console.log(response.data)
      setCate(response.data);
    })
  },[])

  let subCateFrm = useFormik({
    enableReinitialize : true,
    validationSchema : SubCateSchema,
    initialValues : subCate,
    onSubmit : async(formData)=>{
      // axios.post(`${API_URL}/subcategory`, formData)
      // .then(response=>{
        
      //   navigate("/admin/subcategory/view")
      // })
      if(param.id){
        await axios.put(`${API_URL}/subcategory/${param.id}`, formData)
        navigate("/admin/subcategory/view");
      }else{

        await axios.post(`${API_URL}/subcategory`, formData)
        navigate("/admin/subcategory/view");
      }
    }
  })


  return (
    <div className="container my-4">
      <form onSubmit={subCateFrm.handleSubmit}>
      <div className="row">
            <div className="col-md-12">
                <h4>{param.id ? 'Update' : 'Add New'} Sub-Category</h4>
            </div>
            <div className="col-md-6 offset-md-3">
            <div className="card mt-5 border border-dark">
                    <div className="card-header bg-dark">
                        <h5 className='text-light'>Sub-Category</h5>
                    </div>
                    <div className="card-body">
                      <div className='my-2'>
                        <label>Sub-Category Name</label>
                        <input name='name' value={subCateFrm.values.name} onChange={subCateFrm.handleChange} type='text' className='form-control' />
                      </div>
                      <div className='my-2'>
                        <label>Select Category</label>
                        <select name='categoryid' value={subCateFrm.values.categoryid} onChange={subCateFrm.handleChange} className='form-control' >
                          <option>Select</option>
                          {
                            cate.map(item=><option value={item._id}>{item.name}</option>)
                          }
                        </select>
                      </div>
                    </div>
                    <div className="card-footer bg-dark">
                    <button type='submit' className='btn btn-light'>{param.id ? 'Update' : 'Add'}</button>
                    </div>
            </div>
            </div>
        </div>
      </form>
    </div>
  )
}

export default AddSubCategory


/*

form ==== submit ==== req.body =====   { name : "Mobile", categoryid : 2154521 }





{ title : string, category : id, subcategidy : id, price : number, discount : number }

*/