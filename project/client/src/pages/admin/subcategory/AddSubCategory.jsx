import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { API_URL } from '../../../constants/API_URL'
import { useFormik } from 'formik'
import SubCateSchema from '../../../schemas/SubCategorySchema'


const AddSubCategory = () => {

  let [cate, setCate] = useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}/category`)
    .then(response=>{
      // console.log(response.data)
      setCate(response.data);
    })
  },[])

  let subCateFrm = useFormik({
    validationSchema : SubCateSchema,
    initialValues : {
      name : "",
      categoryid :  ""
    },
    onSubmit : (formData)=>{
      console.log(formData)
    }
  })


  return (
    <div className="container my-4">
      <form onSubmit={subCateFrm.handleSubmit}>
      <div className="row">
            <div className="col-md-12">
                <h4>Add New Sub-Category</h4>
            </div>
            <div className="col-md-6 offset-md-3">
            <div className="card mt-5 border border-dark">
                    <div className="card-header bg-dark">
                        <h5 className='text-light'>Sub-Category</h5>
                    </div>
                    <div className="card-body">
                      <div className='my-2'>
                        <label>Sub-Category Name</label>
                        <input name='name' onChange={subCateFrm.handleChange} type='text' className='form-control' />
                      </div>
                      <div className='my-2'>
                        <label>Select Category</label>
                        <select name='categoryid' onChange={subCateFrm.handleChange} className='form-control' >
                          <option>Select</option>
                          {
                            cate.map(item=><option value={item._id}>{item.name}</option>)
                          }
                        </select>
                      </div>
                    </div>
                    <div className="card-footer bg-dark">
                    <button type='submit' className='btn btn-light'>Add</button>
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