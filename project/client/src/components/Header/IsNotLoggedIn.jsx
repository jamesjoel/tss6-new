import React from 'react'
import { NavLink } from 'react-router-dom'

const IsNotLoggedIn = () => {
  return (
    <>
    <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Signup</NavLink>
    </li>
    </>
  )
}

export default IsNotLoggedIn