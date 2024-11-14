import React from 'react'
import {useFormik} from 'formik'
import CateSchema from '../../../schemas/CategorySchema'
import axios from 'axios'
import {API_URL} from '../../../constants/API_URL'
import { useNavigate } from 'react-router-dom'
const AddCategory = () => {
    let navigate = useNavigate();
    let cateFrm = useFormik({
        validationSchema : CateSchema,
        initialValues : {
            name : ""
        },
        onSubmit : (formData)=>{
            axios.post(`${API_URL}/category`, formData)
            .then(response=>{
                // console.log(response.data);
                navigate("/admin/category/view")
            })
        }
    })


  return (
    <div className="container my-4">
            <form onSubmit={cateFrm.handleSubmit}>
        <div className="row">
            <div className="col-md-12">
                <h4>Add New Category</h4>
            </div>
            <div className="col-md-6 offset-md-3">
                <div className="card mt-5 border border-dark">
                    <div className="card-header bg-dark">
                        <h5 className='text-light'>Category</h5>
                    </div>
                    <div className="card-body">
                        <div className="my-2">
                            <label>Category Name</label>
                            <input name='name' onChange={cateFrm.handleChange} type='text' className={'form-control ' + (cateFrm.errors.name && cateFrm.touched.name ? 'is-invalid' : '')} />
                            <small className='text-danger'>
                                {
                                    cateFrm.errors.name && cateFrm.touched.name
                                    ?
                                    cateFrm.errors.name
                                    :
                                    ''
                                }
                            </small>
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

export default AddCategory