import React, { useState } from 'react'
import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom'
import ChangePassSchema from '../../schemas/ChangePassSchema'
import { API_URL } from '../../constants/API_URL'
import axios from 'axios'

const ChangePass = () => {
    let navigate = useNavigate();
    let [errMsg, setErrMsg] = useState("");

    let passFrm = useFormik({
        validationSchema : ChangePassSchema,
        initialValues : {
            currentpass : "",
            newpass : "",
            confirmnewpass : ""
        },
        onSubmit : async(formData)=>{ 
            let response = await axios.post(`${API_URL}/user/changepassword`, formData, {
                headers : { Authorization : localStorage.getItem("access-user") }
            })
            if(response.data.success==true){
                navigate("/myprofile");
            }else{
                setErrMsg("Your Current Password not Matched !");
            }
        }
        // let x = { name : "rohit" }
    })


  return (
    <div className="container my-5" style={{minHeight : "700px"}}>
        <form onSubmit={passFrm.handleSubmit}>
         <div className="row">
            <div className="col-md-12">
                <h2>Change Your Profile Password</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3 mt-4">
                        <div className="card">
                            <div className="card-header">
                                <h4>Change Password</h4>
                            </div>
                            <div className="card-body">
                                <div className="my-2">

                                <label htmlFor="">Current Password</label>
                                <input name='currentpass' onChange={passFrm.handleChange} type='password' className='form-control' />
                                <small className='text-danger'>
                                    {
                                        passFrm.errors.currentpass && passFrm.touched.currentpass
                                        ?
                                        passFrm.errors.currentpass
                                        :
                                        ''
                                    }
                                    
                                </small>
                                </div>
                                <div className="my-2">

                                <label htmlFor="">New Password</label>
                                <input name='newpass' onChange={passFrm.handleChange} type='password' className='form-control' />
                                <small className='text-danger'>
                                    {
                                        passFrm.errors.newpass && passFrm.touched.newpass
                                        ?
                                        passFrm.errors.newpass
                                        :
                                        ''
                                    }
                                </small>
                                </div>
                                <div className="my-2">
                                <label htmlFor="">Confirm New Password</label>
                                <input name='confirmnewpass' onChange={passFrm.handleChange} type='password' className='form-control' />
                                <small className='text-danger'>
                                    {
                                        passFrm.errors.confirmnewpass && passFrm.touched.confirmnewpass
                                        ?
                                        passFrm.errors.confirmnewpass
                                        :
                                        ''
                                    }
                                </small>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type='submit' className='btn btn-success'>Update</button>
                                <p className='text-danger text-center'>
                                    {
                                        errMsg
                                        ?
                                        errMsg
                                        :
                                        ''
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
  )
}

export default ChangePass