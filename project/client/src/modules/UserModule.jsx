import React from 'react'
import  { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header2 from '../components/Header/Header2'

const UserModule = () => {
  return (
    <>
     <Header2 />


   
    <Outlet />
    <Footer />    
    </>
  )
}

export default UserModule