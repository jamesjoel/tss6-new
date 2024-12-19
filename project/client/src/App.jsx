import React, {useEffect} from 'react'

import AllRoutes from './AllRoutes/AllRoutes'
// import Header from './components/Header/Header'
// import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import UserModule from './modules/UserModule'
import { useDispatch } from 'react-redux'
import { loggedIn, loggedOut } from './redux/UserAuthSlice'

const App = () => {
  let disp = useDispatch();

  useEffect(()=>{
    if(localStorage.getItem("access-user")){
      disp(loggedIn())
    }else{
      disp(loggedOut())

    }
  },[])

  
  return (
    <>
   
    <AllRoutes />  
    
    </>
  )
}

export default App
/*
1. frnd_request
          sender reciver
          1        2
          1        5
          1        12
          5        2


2. frnd

          frnd1    frnd2
          1           2
          2           1
          2           5
          5           2




*/