import React from 'react'
import { Navigate } from 'react-router-dom';

const Logout = () => {
    /*
    let navigate = useNavigate();
    */
    localStorage.removeItem("access-token");
    // navigate("/")
  return (
    <Navigate to={'/'} />
  )
}

export default Logout