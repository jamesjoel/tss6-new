import React from 'react'
import  { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'

const UserModule = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />    
    </>
  )
}

export default UserModule