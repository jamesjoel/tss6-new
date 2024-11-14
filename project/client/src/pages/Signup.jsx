import React, {useEffect, useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import { API_URL } from '../constants/API_URL'
import SingupSchema from '../schemas/SignupSchema'




const Signup = () => {

  let navigate = useNavigate();
  let [allState, setAllState] = useState([]);
  let [allCity, setAllCity] = useState([]);
  let [showSpinner, setShowSpinner] = useState(false);

  useEffect(()=>{
    
    axios.get(`${API_URL}/city/getstate`)
    .then(response=>{
        setAllState(response.data);
    })


  },[])

  let signupFrm = useFormik({
    validationSchema : SingupSchema,
    initialValues : {
      name : "",
      email : "",
      password : "",
      repassword : "",
      contact : "",
      address : "",
      gender : "",
      state : "",
      city : ""
    },
    onSubmit : (formData)=>{
      // console.log("------- submit ", formData)
      setShowSpinner(true);
      axios.post(`${API_URL}/signup`, formData)
      .then(response=>{
        setShowSpinner(false);
        navigate("/login");
        // console.log(response.data);
      })
    }
  });


  let getAllCity = (e)=>{
    // console.log(e.target.value)
    let s = e.target.value;
    axios.get(`${API_URL}/city/getcity/${s}`)
    .then(response=>{
      setAllCity(response.data);
    })

  }


  return (
    <section className="product_section layout_padding" style={{minHeight : "700px"}}>
        <form onSubmit={signupFrm.handleSubmit}>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-header bg-blue">
                <h4 className='text-light'>User Registration</h4>
                <small className='text-light'>Already Registred User <NavLink to="/login">click here</NavLink></small>
              </div>
              <div className="card-body">
                <div className="my-3">
                  <label>Full Name</label>
                  <input name='name' onChange={signupFrm.handleChange} type='text' className={'form-control ' + (signupFrm.errors.name && signupFrm.touched.name ? 'is-invalid' : '') }/>
                  {
                    signupFrm.errors.name && signupFrm.touched.name 
                    ? 
                    <small className='text-danger'>{signupFrm.errors.name}</small> 
                    : 
                    ''
                  }

                </div>
                <div className="my-3">
                  <label>Username/Email</label>
                  <input name='email' onChange={signupFrm.handleChange} type='text' className={'form-control ' + (signupFrm.errors.email && signupFrm.touched.email ? 'is-invalid' : '') }/>
                  {
                    signupFrm.errors.email && signupFrm.touched.email
                    ?
                    <small className='text-danger'>{signupFrm.errors.email}</small> 
                    :
                    ''
                  }
                </div>
                <div className="my-3">
                  <label>Password</label>
                  <input name='password' onChange={signupFrm.handleChange} type='password' className={'form-control ' + (signupFrm.errors.password && signupFrm.touched.password ? 'is-invalid' : '') }/>
                  {
                    signupFrm.errors.password && signupFrm.touched.password
                    ?
                    <small className='text-danger'>{signupFrm.errors.password}</small> 
                    :
                    ''
                  }
                </div>
                <div className="my-3">
                  <label>Re-Password</label>
                  <input name='repassword' onChange={signupFrm.handleChange} type='password' className={'form-control ' + (signupFrm.errors.repassword && signupFrm.touched.repassword ? 'is-invalid' : '') }/>
                  {
                    signupFrm.errors.repassword && signupFrm.touched.repassword
                    ?
                    <small className='text-danger'>{signupFrm.errors.repassword}</small> 
                    :
                    ''
                  }
                </div>
                <div className="my-3">
                  <label>Contact</label>
                  <input name='contact' onChange={signupFrm.handleChange} type='text' className={'form-control ' + (signupFrm.errors.contact && signupFrm.touched.contact ? 'is-invalid' : '') }/>
                  {
                    signupFrm.errors.contact && signupFrm.touched.contact
                    ?
                    <small className='text-danger'>{signupFrm.errors.contact}</small> 
                    :
                    ''
                  }
                </div>
                <div className="my-3">
                  <label>Address</label>
                  <textarea name='address' onChange={signupFrm.handleChange} className={'form-control ' + (signupFrm.errors.address && signupFrm.touched.address ? 'is-invalid' : '') }></textarea>
                  {
                    signupFrm.errors.address && signupFrm.touched.address
                    ?
                    <small className='text-danger'>{signupFrm.errors.address}</small> 
                    :
                    ''
                  }
                </div>
                <div className="my-3">
                  <label>Gender</label><br />
                  Male <input type='radio' onChange={signupFrm.handleChange} name='gender' value="male"/>
                  Female <input type='radio' onChange={signupFrm.handleChange} name='gender' value="female"/>
                  <br />
                  {
                    signupFrm.errors.gender && signupFrm.touched.gender
                    ?
                    <small className='text-danger'>{signupFrm.errors.gender}</small> 
                    :
                    ''
                  }
                </div>
                <div className="my-3">
                  <label>State</label>
                  <select name='state' onChange={(e)=>{getAllCity(e); signupFrm.handleChange(e)}} className={'form-control ' + (signupFrm.errors.state && signupFrm.touched.state ? 'is-invalid' : '') }>
                    <option>Select</option>
                    {
                      allState.map(item=><option>{item}</option>)
                    }
                  </select>
                  {
                    signupFrm.errors.state && signupFrm.touched.state
                    ?
                    <small className='text-danger'>{signupFrm.errors.state}</small> 
                    :
                    ''
                  }
                </div>
                <div className="my-3">
                  <label>City</label>
                  <select name='city' onChange={signupFrm.handleChange} className={'form-control ' + (signupFrm.errors.city && signupFrm.touched.city ? 'is-invalid' : '') }>
                    <option>Select</option>
                    {
                      allCity.map(item=><option>{item.name}</option>)
                    }
                  </select>
                  {
                    signupFrm.errors.city && signupFrm.touched.city
                    ?
                    <small className='text-danger'>{signupFrm.errors.city}</small> 
                    :
                    ''
                  }
                </div>
              </div>
              <div className="card-footer">
                <button type='submit' className='btn btn-orange' >Singup {showSpinner ? <span className='spinner-border spinner-border-sm'></span> : ''} </button>
              </div>
            </div>
          </div>
        </div>
        </form>
          
    </section>
  )
}

export default Signup


/*

  onClick = {demo}
  
  onClick = {()=>demo()}

  onChnage={(e)=>demo(e)}
  
  
  onChnage={()=>form.handleChange()}


*/