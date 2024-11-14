import React from 'react'
import { useNavigate, Navigate} from 'react-router-dom'


const Logout = () => {
    
    localStorage.removeItem("access-user");

    

  return (
    <Navigate to="/login" />
  )
}

export default Logout