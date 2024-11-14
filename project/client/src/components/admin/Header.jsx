import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="nav-side-menu">
    <div className="brand">Administrator</div>
      <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
  
        <div className="menu-list">
  
            <ul id="menu-content" className="menu-content collapse out">
                <li>
                  <NavLink to="/admin/dashboard">
                  <i className="fa fa-dashboard fa-lg"></i> Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/users">
                  <i class="fa fa-users" aria-hidden="true"></i> Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/setting">
                  <i className="fa fa-cog fa-lg"></i> Setting
                  </NavLink>
                </li>

                <li  data-toggle="collapse" data-target="#cate" className="collapsed active">
                  <a href="#"><i class="fa fa-list" aria-hidden="true"></i> Category <span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="cate">
                    
                    <li><NavLink to="/admin/category/add">Add</NavLink></li>
                    <li><NavLink to="/admin/category/view">View</NavLink></li>
                    
                </ul>


                <li  data-toggle="collapse" data-target="#subcate" className="collapsed active">
                  <a href="#"><i class="fa fa-list" aria-hidden="true"></i> Sub-Category <span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="subcate">
                    
                    <li><NavLink to="/admin/subcategory/add">Add</NavLink></li>
                    <li><NavLink to="/admin/subcategory/view">View</NavLink></li>
                    
                </ul>


               

            </ul>
     </div>
    </div>
  )
}

export default Header