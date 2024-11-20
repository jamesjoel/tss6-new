import React from 'react'
import { Navigate } from 'react-router-dom'

const Logout = () => {
    localStorage.removeItem("access-admin");

  return (
    <Navigate to="/" />
  )
}

export default Logout