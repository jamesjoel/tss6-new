import React from 'react'
import { NavLink } from 'react-router-dom'

const IsLoggedIn = () => {
  return (
    <>
    <li className="nav-item dropdown" style={{backgroundColor : "#ff424d"}}>
    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">{localStorage.getItem("name")} <span className="caret"></span></span></a>
        <ul className="dropdown-menu">
            <li><NavLink to="/myorder">My Order</NavLink></li>
            <li><NavLink to="/myprofile">My Profile</NavLink></li>
            <li><NavLink to="/settings">Settings</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
            
        </ul>
    </li>
    </>
  )
}

export default IsLoggedIn