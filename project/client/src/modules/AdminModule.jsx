import React from 'react'
import { Outlet } from 'react-router-dom'
// import Header from '../components/admin/Header'
import Footer from '../components/admin/Footer'
const AdminModule = () => {
  return (
    <>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  
  <a class="navbar-brand" href="#">Logo</a>

  
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 2</a>
    </li>

    
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Dropdown link
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Link 1</a>
        <a class="dropdown-item" href="#">Link 2</a>
        <a class="dropdown-item" href="#">Link 3</a>
      </div>
    </li>
  </ul>
</nav>
        <div style={{marginLeft : "300px"}}>
            <div className="container">
            <Outlet />
            </div>        
        </div>
        <Footer />
    </>
  )
}

export default AdminModule