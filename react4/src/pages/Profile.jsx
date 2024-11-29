import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Profile = () => {
    let [user, setUser] = useState({});
    
    useEffect(()=>{
        getUser();
    },[])


    let getUser = async()=>{
        try{

            let response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
                headers : { Authorization : `Bearer ${localStorage.getItem("access-token")}` }
            })

            setUser(response.data);
        }catch(err){
            console.log("XXXXXXXXXXXXXXX", err.response)
        }
     
    }


  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <h2>User Profile</h2>
                <br />
                {
                    user
                    ?
                    <>
                    <p><b>Name </b> {user.name}</p>
                    <p><b>Role </b> {user.role}</p>
                    <p><b>Email </b> {user.email}</p>
                    <p><b>Image </b> <img src={user.avatar} height="100" width="100" /></p>
                    </>
                    :
                    ''
                }
            </div>
        </div>
    </div>
  )
}

export default Profile