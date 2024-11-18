import React, { useState } from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import {API_URL} from '../../constants/API_URL'

const Login = () => {
    let [errMsg, setErrMsg] = useState("");

    let loginFrm = useFormik({
        initialValues : {
            username : "",
            password :""
        },
        onSubmit : async (formData)=>{
            try{

                let response = await axios.post(`${API_URL}/adminauth`, formData);
                console.log(response.data);
            }catch(err){
                
                if(err.status==401){
                    console.log(err);
                    if(err.response.data.errType==1)
                       setErrMsg("This Username and Password is Incorrect");
                    if(err.response.data.errType==2)
                       setErrMsg("This Password is Incorrect");
                }
                if(err.status==500){

                }
            }
            
        }
    })

  return (
    <div className="row">

        <div className="col-md-6 offset-md-3 mt-5">
            <form onSubmit={loginFrm.handleSubmit}>
            <div className="card mt-5">
                <div className="card-header bg-dark text-light">
                    <h4>Administrator Login</h4>
                </div>
                <div className="card-body">
                    <div className="my-2">
                        <label htmlFor="">Username</label>
                        <input name='username' onChange={loginFrm.handleChange} type='text' className='form-control' />
                    </div>
                    <div className="my-2">
                        <label htmlFor="">Password</label>
                        <input name='password' onChange={loginFrm.handleChange} type='password' className='form-control' />
                    </div>
                </div>
                <div className="card-footer">
                    <button className='btn btn-dark' type='submit'>Login</button>
                    <p className='text-danger text-center'>
                        {
                            errMsg ? errMsg : ""
                        }
                    </p>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Login