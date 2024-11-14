import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import IsLoggedIn from './IsLoggedIn'
import IsNotLoggedIn from './IsNotLoggedIn'
import axios from 'axios'
import {API_URL} from '../../constants/API_URL'

const Header = () => {
   let [cate, setCate] = useState([]);

   useEffect(()=>{
      axios.get(`${API_URL}/category`)
      .then(response=>{
         setCate(response.data);
      })
   },[])


  return (
    <header className="header_section">
            <div className="container">
               <nav className="navbar navbar-expand-lg custom_nav-container ">
                  <NavLink className="navbar-brand" to="/"><img width="250" src="/public/assets/images/logo.png" alt="#" /></NavLink>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                       <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">Categories <span className="caret"></span></span></a>
                           <ul className="dropdown-menu">
                              {
                                 cate.map(item=><li><a href="about.html">{item.name}</a></li>)
                              }
                              
                              
                           </ul>
                        </li>
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        
                        
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/mycart">
                              My Cart (0)
                           </NavLink>
                        </li>
                        {
                           localStorage.getItem("access-user")
                           ?
                           <IsLoggedIn />
                           :
                           <IsNotLoggedIn />
                        }
                        
                     </ul>
                  </div>
               </nav>
            </div>
         </header>
  )
}

export default Header