import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/admin/Header'
import Footer from '../components/admin/Footer'
const AdminModule = () => {
  return (
    <>
        <Header />
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