import React, {useEffect, useRef, useState} from 'react'
import { useFormik } from 'formik'
import {useNavigate} from 'react-router-dom'
import ProSchema from '../../../schemas/ProductSchema'
import axios from 'axios'
import { API_URL } from '../../../constants/API_URL'

const AddProduct = () => {
    let file = useRef()
    let navigate = useNavigate();
    let [allCate, setAllCate] = useState([]);
    let [allSubCate, setAllSubCate] = useState([]);

    useEffect(()=>{
        getAllCate();
    },[])

    let getAllCate = async()=>{
        let response = await axios.get(`${API_URL}/category`);
        setAllCate(response.data);
    }
    let proFrm = useFormik({
        // validationSchema : ProSchema,
        initialValues : {
            title : "",
            price : "",
            detail : "",
            discount : "",
            quantity : "",
            category : "",
            subcategory : "",
            image : ""
        },
        onSubmit : async(formData)=>{
            console.log(formData)
            return;
            // console.log(file.current.files[0])
            // console.log(formData)
            
            let image = file.current.files[0];
            let myForm = new FormData(); // create our own FORM Object
            myForm.append("photo", image);
            myForm.append("title", formData.title)
            myForm.append("price", formData.price)
            myForm.append("detail", formData.detail)
            myForm.append("discount", formData.discount)
            myForm.append("quantity", formData.quantity)
            myForm.append("category", formData.category)
            myForm.append("subcategory", formData.subcategory)

            
            let response = await axios.post(`${API_URL}/product`, myForm);
            navigate("/admin/product/view")
        }
    })

    let getAllSubCate = async(event)=>{
        let id = event.target.value;
        
        let response = await axios.get(`${API_URL}/subcategory/getsubcatebycateid/${id}`)
        setAllSubCate(response.data);
    }

  return (
    <div className="container my-4">
        <form onSubmit={proFrm.handleSubmit}>
        <div className="row">
            <div className="col-md-12">
                <h4>Add New Product</h4>
            </div>
            <div className="col-md-8 offset-md-2">
                <div className="card mt-5 border border-dark">
                    <div className="card-header bg-dark">
                        <h5 className='text-light'>Product</h5>
                    </div>
                    <div className="card-body">
                        <div className="my-2">
                            <label>Product Title</label>
                            <input name='title' onChange={proFrm.handleChange} type='text' className={'form-control '+(proFrm.errors.title && proFrm.touched.title ? 'is-invalid' : '')} />
                        </div>
                        <div className="my-2">
                            <label>Product Price</label>
                            <input name='price' onChange={proFrm.handleChange} type='text' className={'form-control '+(proFrm.errors.price && proFrm.touched.price ? 'is-invalid' : '')}/>
                        </div>
                        <div className="my-2">
                            <label>Product Image</label>
                            <input name='image' ref={file} onChange={(e)=>proFrm.handleChange(e.target.files[0])} type='file' className={'form-control '+(proFrm.errors.image && proFrm.touched.image ? 'is-invalid' : '')}/>
                            <span className='text-danger'>
                                {
                                    proFrm.errors.image && proFrm.touched.image
                                    ?
                                    proFrm.errors.image
                                    :
                                    ''
                                }
                            </span>
                        </div>
                        <div className="my-2">
                            <label>Product Category</label>
                            <select name='category' onChange={(event)=>{proFrm.handleChange(event); getAllSubCate(event)}} className={'form-control '+(proFrm.errors.category && proFrm.touched.category ? 'is-invalid' : '')} >
                                <option>Category</option>
                                {
                                    allCate.map(item=><option value={item._id} key={item._id}>{item.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="my-2">
                            <label>Product Sub-Category</label>
                            <select name='subcategory' onChange={proFrm.handleChange} className={'form-control '+(proFrm.errors.subcategory && proFrm.touched.subcategory ? 'is-invalid' : '')} >
                                <option>Sub-Category</option>
                                {
                                    allSubCate.map(item=><option key={item._id} value={item._id}>{item.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="my-2">
                            <label>Product Detail</label>
                            <textarea name='detail' onChange={proFrm.handleChange} className={'form-control '+(proFrm.errors.detail && proFrm.touched.detail ? 'is-invalid' : '')} ></textarea>
                        </div>
                        <div className="my-2">
                            <label>Product Discount</label>
                            <input name='discount' onChange={proFrm.handleChange} type='text' className={'form-control '+(proFrm.errors.discount && proFrm.touched.discount ? 'is-invalid' : '')} />
                        </div>
                        <div className="my-2">
                            <label>Product Quantity</label>
                            <input name='quantity' onChange={proFrm.handleChange} type='text' className={'form-control '+(proFrm.errors.quantity && proFrm.touched.quantity ? 'is-invalid' : '')} />
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

export default AddProduct