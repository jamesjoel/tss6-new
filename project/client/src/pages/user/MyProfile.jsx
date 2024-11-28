import React, {useEffect, useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {API_URL} from '../../constants/API_URL'

// localhost:3000/api/v1/user/profile
const MyProfile = () => {
  let [user, setUser] = useState({})

  useEffect(()=>{
    getUser();
  },[])

  let getUser = async()=>{
    let response = await axios.get(`${API_URL}/user/profile`, {
      headers : { Authorization : localStorage.getItem("access-user") }
    });
    console.log(response.data);
    setUser(response.data[0]);
  }
    

  return (
    <>
    <div className="container my-5" style={{minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-12">
                <h2>Your Profile</h2>
                <NavLink to="/update" className="text-info">Update Profile</NavLink>
                {
                  user
                  ?
                  <table className="table table-dark table-bordered table-hover table-striped">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <td>Contact</td>
                      <td>{user.contact}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>{user.address}</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>{user.gender}</td>
                    </tr>
                    <tr>
                      <td>State</td>
                      <td>{user.state}</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>{user.city}</td>
                    </tr>
                  </tbody>
                </table>
                :
                ''
                }
            </div>
        </div>


    </div>
    </>
  )
}

export default MyProfile