import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API_URL} from '../../constants/API_URL'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import UpdateProfileSchema from '../../schemas/UpdateProfileSchema'

const UpdateProfile = () => {
    let navigate = useNavigate();
    let [allState, setAllState] = useState([]);
    let [allCity, setAllCity] = useState([]);
    let [user, setUser] = useState({
        name : "",
        email : "",
        
        contact : "",
        address : "",
        gender : "",
        state : "",
        city : ""
      })

  useEffect(()=>{
    getUser();
    getAllState();
  },[])


  let updateFrm = useFormik({
    validationSchema : UpdateProfileSchema,
    enableReinitialize : true,
    initialValues : user,
    onSubmit : async(formData)=>{
        let response = await axios.put(`${API_URL}/user/update`, formData, {
            headers : { Authorization : localStorage.getItem("access-user") }
        });
        navigate("/myprofile");
    }
  })

  let getAllState = async()=>{
    let response = await axios.get(`${API_URL}/city/getstate`);
    setAllState(response.data);
  }
  let getAllCity = (s)=>{
    // console.log(e.target.value)
    // let s = e.target.value;
    axios.get(`${API_URL}/city/getcity/${s}`)
    .then(response=>{
      setAllCity(response.data);
    })

  }


  let getUser = async()=>{
    let response = await axios.get(`${API_URL}/user/profile`, {
      headers : { Authorization : localStorage.getItem("access-user") }
    });
    console.log(response.data);
    setUser(response.data[0]);
    getAllCity(response.data[0].state);
  }




  return (
    <div className="container my-4" style={{minHeight : "600px"}}>
        <form onSubmit={updateFrm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3 mt-5">
                <h4 className='text-center'>Update Your Personal Data</h4>
                <div className="card">
                    <div className="card-header">
                        <h6>Update</h6>
                    </div>
                    <div className="card-body">
                        <div className="my-2">
                            <label htmlFor="">Full Name</label>
                            <input type='text' value={updateFrm.values.name} name='name' onChange={updateFrm.handleChange} className={'form-control ' + (updateFrm.errors.name && updateFrm.touched.name ? 'is-invalid' : '')} />
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Username/Email</label>
                            <input type='text' value={updateFrm.values.email} name='email' onChange={updateFrm.handleChange} disabled className='form-control' />
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Contact</label>
                            <input type='text' value={updateFrm.values.contact} name='contact' onChange={updateFrm.handleChange} className={'form-control ' + (updateFrm.errors.contact && updateFrm.touched.contact ? 'is-invalid' : '')}  />
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Address</label>
                            <textarea name='address' value={updateFrm.values.address} onChange={updateFrm.handleChange}  className={'form-control ' + (updateFrm.errors.address && updateFrm.touched.address ? 'is-invalid' : '')}  ></textarea>
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Gender</label>
                            <br />
                            Male<input type='radio' name='gender' checked={updateFrm.values.gender == "male"} onChange={updateFrm.handleChange} value="male" />
                            Female<input type='radio' name='gender' checked={updateFrm.values.gender == "female"} onChange={updateFrm.handleChange} value="female" />
                        </div>
                        <div className="my-2">
                            <label htmlFor="">State</label>
                            <select  className={'form-control ' + (updateFrm.errors.state && updateFrm.touched.state ? 'is-invalid' : '')}  value={updateFrm.values.state} name='state' onChange={(event)=>{updateFrm.handleChange(event); getAllCity(event.target.value)}}>
                                <option>Select</option>
                                {
                                    allState.map(item=><option>{item}</option>)
                                }
                            </select>
                        </div>
                        <div className="my-2">
                            <label htmlFor="">City</label>
                            <select  className={'form-control ' + (updateFrm.errors.city && updateFrm.touched.city ? 'is-invalid' : '')}  value={updateFrm.values.city} name='city' onChange={updateFrm.handleChange}>
                                <option>Select</option>
                                {
                                     allCity.map(item=><option>{item.name}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type='submit' className='btn btn-primary'>Update</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
  )
}

export default UpdateProfile