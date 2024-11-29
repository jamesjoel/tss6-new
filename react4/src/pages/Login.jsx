import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as YUP from 'yup'
import axios from 'axios'



const Login = () => {
    let navigate = useNavigate();
    let [errMsg, setErrMsg] = useState("");
    let [showSpinner, setShowSpinner] = useState(false)

    let loginFrm = useFormik({
        validationSchema : YUP.object({
            email : YUP.string().email("Incorrect").required("Insert Email"),
            password : YUP.string().required("Insert Password"),
        }),
        initialValues : {
            email : "",
            password : ""
        },
        onSubmit : async(formData) =>{
            setShowSpinner(true)
            try{

                let response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", formData)
                let token = response.data.access_token;
                localStorage.setItem("access-token", token);
                navigate("/profile");

            }catch(err){
                //console.log(err.response)
                setShowSpinner(false)
                setErrMsg("This Email id and Password is Incorrect !");
            }
        }
    })


  return (
    <div className="container my-5">
        <h1>Login Page</h1>
        <form onSubmit={loginFrm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="my-2">
                    <label htmlFor="">Email</label>
                    <input type='text' name='email' onChange={loginFrm.handleChange} className='form-control' />
                    <small className='text-danger'>
                        {
                            loginFrm.errors.email && loginFrm.touched.email 
                            ?
                            loginFrm.errors.email
                            :
                            ''
                        }
                    </small>
                </div>
                <div className="my-2">
                    <label htmlFor="">Password</label>
                    <input type='password' name='password' onChange={loginFrm.handleChange} className='form-control' />
                    <small className='text-danger'>
                        {
                            loginFrm.errors.password && loginFrm.touched.password 
                            ?
                            loginFrm.errors.password
                            :
                            ''
                        }
                    </small>
                </div>
                <button type='submit' className='btn btn-success'>Login { showSpinner ? <span className='spinner-border spinner-border-sm'></span> : ''}</button>
                <p className='text-danger text-center'>{ errMsg }</p>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Login