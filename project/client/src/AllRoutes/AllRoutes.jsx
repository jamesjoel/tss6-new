import React, {useEffect} from 'react'
import { Route, Routes, useNavigate, Outlet, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import AdminLogin from '../pages/admin/Login'

import Signup from '../pages/Signup'
import About from '../pages/About'
import MyCart from '../pages/MyCart'
import MyProfile from '../pages/user/MyProfile'
import Logout from '../pages/user/Logout'
import MyOrder from '../pages/user/MyOrder'
import Settings from '../pages/user/Settings'
import NotFound from '../pages/NotFound'
import UserModule from '../modules/UserModule'
import AdminModule from '../modules/AdminModule'
import Dashboard from '../pages/admin/Dashboard'
import Setting from '../pages/admin/Setting'
import Users from '../pages/admin/Users'
import AddCategory from '../pages/admin/category/AddCategory'
import ViewCategory from '../pages/admin/category/ViewCategory'
import ViewSubCategory from '../pages/admin/subcategory/ViewSubCategory'
import AddSubCategory from '../pages/admin/subcategory/AddSubCategory'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<UserModule />}>

            <Route path='' element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='about' element={<About />} />
            <Route path='mycart' element={<MyCart />} />        
            <Route path='' element={<UserProtectedRoute />}>
                <Route path='myprofile' element={<MyProfile />} />
                <Route path='settings' element={<Settings />} />
                <Route path='myorder' element={<MyOrder />} />
                <Route path='logout' element={<Logout />} />
            </Route>
        </Route>


        <Route path='admin' element={<AdminModule />}>
            <Route path='' element={<AdminLogin />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='users' element={<Users />} />
            <Route path='category/add' element={<AddCategory />} />
            <Route path='category/view' element={<ViewCategory />} />
            <Route path='subcategory/view' element={<ViewSubCategory />} />
            <Route path='subcategory/add' element={<AddSubCategory />} />
            
            <Route path='setting' element={<Setting />} />
        </Route>

    </Routes>
  )
}

export default AllRoutes



let UserProtectedRoute = ()=>{

  let navigate = useNavigate();

  useEffect(()=>{

    if(! localStorage.getItem("access-user")){
      navigate("/login");
    }

  },[])


  return(
    <>
      {/* <h1>Welcome</h1> */}
      <Outlet />
    </>
  )
}

// http://localhost:5173/admin/category/add