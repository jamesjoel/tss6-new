import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import {API_URL} from '../../constants/API_URL'

import { useSelector } from 'react-redux'


const Header2 = () => {


    let cart = useSelector(state=>state.CartSlice);
    let auth = useSelector(state=>state.UserAuthSlice);






    let [cate, setCate] = useState([]);

   useEffect(()=>{
      axios.get(`${API_URL}/category/allcategory`)
      .then(response=>{
         setCate(response.data);
      })
   },[])



  return (
    <>
    
        
        
    


   
    <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
    <NavLink className="navbar-brand" to="/"><img width="250" src="/public/assets/images/logo.png" alt="#" /></NavLink>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbar1">
        <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
            <li className="nav-item dropdown">
                <a href="#" id="menu" 
                    data-toggle="dropdown" className="nav-link dropdown-toggle"
                    data-display="static">Category</a>
                <ul className="dropdown-menu">
                    <li className="dropdown-item dropdown-submenu">
                        <a href="#" data-toggle="dropdown" className="dropdown-toggle">Submenu-1</a>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item">
                                <a href="#">Item-1</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="#">Item-2</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="#">Item-3</a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown-item dropdown-submenu">
                        <a href="#" data-toggle="dropdown" className="dropdown-toggle">Submenu-2</a>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item">
                                <a href="#">Rohit</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="#">Item-2</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="#">Item-3</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            {
                            auth
                            ?
                            <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">{localStorage.getItem("name")} <span className="caret"></span></span></NavLink>
                            <ul className="dropdown-menu">
                               <li><NavLink to="view-order">My Order</NavLink></li>
                               <li><NavLink to="myprofile">My Profile</NavLink></li>
                               <li><NavLink to="logout">Logout</NavLink></li>
                               
                            </ul>
                         </li>
                            :
                            <>
                                    <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">Signup</NavLink>
                                </li>
                            </>
                        }
            <li className="nav-item">
                <NavLink className="nav-link" to="/mycart">My Cart ({cart.length})</NavLink>
            </li>
        </ul>
        
    </div>
</nav>

    </>
  )
}

export default Header2