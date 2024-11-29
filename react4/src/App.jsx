import React, { useEffect } from 'react'
import Header from './components/Header'
import { Route, Routes, Outlet, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Logout from './pages/Logout'
const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='' element={<ProtactRoute />}>

          <Route path='profile' element={<Profile />} />
          <Route path='logout' element={<Logout />} />
      </Route>
    </Routes>
    </>
  )
}

const ProtactRoute = ()=>{
  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem("access-token")){
      navigate("/login");
    }
  },[])

  return(
    <Outlet />
  )
}


export default App