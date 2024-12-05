import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import CateSchema from '../../../schemas/CategorySchema'
import axios from 'axios'
import {API_URL} from '../../../constants/API_URL'
import { useNavigate, useParams } from 'react-router-dom'
const AddCategory = () => {
    let param = useParams();
    console.log(param)

    let [cate, setCate] = useState( {
        name : ""
    })

    useEffect(()=>{
        if(param.a){
            axios.get(`${API_URL}/category/${param.a}`)
            .then(response=>{
                setCate(response.data[0]);
            })
        }else{
            console.log("****")
            setCate({...cate, name : ""})
        }
    },[param]);



    let navigate = useNavigate();
    let cateFrm = useFormik({
        enableReinitialize : true,
        validationSchema : CateSchema,
        initialValues :cate,
        onSubmit : (formData)=>{
            if(param.a){
                // update code here
                axios.put(`${API_URL}/category/${param.a}`, formData)
                .then(response=>{
                    // console.log(response.data);
                    navigate("/admin/category/view")
                })
            }else{

                axios.post(`${API_URL}/category`, formData)
                .then(response=>{
                    // console.log(response.data);
                    navigate("/admin/category/view")
                })
            }
        }
    })


  return (
    <div className="container my-4">
            <form onSubmit={cateFrm.handleSubmit}>
        <div className="row">
            <div className="col-md-12">
                <h4>{param.a ? 'Update' : 'Add New'} Category</h4>
            </div>
            <div className="col-md-6 offset-md-3">
                <div className="card mt-5 border border-dark">
                    <div className="card-header bg-dark">
                        <h5 className='text-light'>Category</h5>
                    </div>
                    <div className="card-body">
                        <div className="my-2">
                            <label>Category Name</label>
                            <input value={cateFrm.values.name} name='name' onChange={cateFrm.handleChange} type='text' className={'form-control ' + (cateFrm.errors.name && cateFrm.touched.name ? 'is-invalid' : '')} />
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
                        <button type='submit' className='btn btn-light'>{param.a ? 'Update' : 'Add'}</button>
                    </div>
                </div>
            </div>
        </div>
            </form>
    </div>
  )
}

export default AddCategory