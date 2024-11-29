import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
            <div className="container">
            <a className='navbar-brand' href=''>Project</a>
            <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#menu">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div id='menu' className='collapse navbar-collapse'>
                <ul className='nav navbar-nav'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to=''>Home</NavLink>
                    </li>
                    {
                        localStorage.getItem("access-token")
                        ?
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/logout'>Logout</NavLink>
                    </li>
                        :

                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/login'>Login</NavLink>
                    </li>

                    }
                </ul>
            </div>
            </div>
        </nav>
    </>
  )
}

export default Header