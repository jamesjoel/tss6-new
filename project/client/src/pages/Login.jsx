import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {useFormik} from 'formik'
import LoginSchema from '../schemas/LoginSchema'
import axios from 'axios'
import {API_URL} from '../constants/API_URL'
const Login = () => {

  let navigate = useNavigate();

  let [errMsg, setErrMsg] = useState("");

  let loginFrm = useFormik({
    validationSchema : LoginSchema,
    initialValues : {
      email : "",
      password : ""
    },
    onSubmit : (formData)=>{
      axios.post(`${API_URL}/auth`, formData)
      .then(response=>{
        if(response.data.success==true)
        {
          let token = response.data.token;
          let name = response.data.name;
          localStorage.setItem("access-user", token);
          localStorage.setItem("name", name);

          navigate("/myprofile");
        }
        else{
          if(response.data.errType == 1){
            setErrMsg("This Eamil Id and Password is Incorrect !")
          }
          if(response.data.errType == 2){
            setErrMsg("This Password is Incorrect !")
          }
          if(response.data.errType == 3){
            setErrMsg("You are Deactive now.... Please Contact our Support Team !")
          }
        }
      })
    }
  })


  return (
    <section className="product_section layout_padding" style={{minHeight : "700px"}}>
         <form onSubmit={loginFrm.handleSubmit}>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-header bg-blue">
                <h4 className='text-light'>User Login</h4>
                <small className='text-light'>For New User <NavLink to="/signup">click here</NavLink></small>
              </div>
              <div className="card-body">
                
                <div className="my-3">
                  <label>Username/Email</label>
                  <input name='email' onChange={loginFrm.handleChange} type='text' className={'form-control ' + (loginFrm.errors.email && loginFrm.touched.email ? 'is-invalid' : '')}/>
                </div>
                <div className="my-3">
                  <label>Password</label>
                  <input name='password' onChange={loginFrm.handleChange} type='password' className={'form-control ' + (loginFrm.errors.password && loginFrm.touched.password ? 'is-invalid' : '')}/>
                </div>
                
                </div>
              
              <div className="card-footer">
                <button type='submit' className='btn btn-orange' >Login</button>
                <p className='text-danger text-center'>
                  {
                    errMsg ? errMsg : ''
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
        </form>
        
          
    </section>
  )
}

export default Login