import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {

  let isLoggedIn = false;



  return (
    
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/home2">Home2</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/home3">Home3</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/home4">Home4</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/home5">Home5</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/home6">Home6</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/home7">Home7</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/home8">Home8</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/home9">Home9</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/product">Product</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/public">Public</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/help">Help</NavLink>
      </li>
      
        {
          isLoggedIn==true
          ?
          <>

          <li className="nav-item">
            <NavLink className="nav-link" to="/">Logout</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Profile</NavLink>
          </li>
          </>
          :
          <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Signup</NavLink>
          </li>
          </>


        }
      
      
    </ul>
  </div>

</nav>
  )
}

export default Header
/*
  SPA --- Single Page App

*/