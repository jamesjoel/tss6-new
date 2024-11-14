import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Product from '../Pages/Product'
import Help from '../Pages/Help'
import Public from '../Pages/Public'
import Home2 from '../Pages/Home2'
import Home3 from '../Pages/Home3'
import Home4 from '../Pages/Home4'
import Home5 from '../Pages/Home5'
import Home6 from '../Pages/Home6'
import Home7 from '../Pages/Home7'
import Home8 from '../Pages/Home8'
import Home9 from '../Pages/Home9'
import Home10 from '../Pages/Home10'

const AllRoutes = () => {
  return (
    <Routes>
              <Route path="" element={<Home />} />
              <Route path="home2" element={<Home2 />} />
              <Route path="home3" element={<Home3 />} />
              <Route path="home4" element={<Home4 />} />
              <Route path="home5" element={<Home5 />} />
              <Route path="home6" element={<Home6 />} />
              <Route path="home7" element={<Home7 />} />
              <Route path="home8" element={<Home8 />} />
              <Route path="home9" element={<Home9 />} />
              <Route path="home10" element={<Home10 />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="product" element={<Product />} />
              <Route path="help" element={<Help />} />
              <Route path="public" element={<Public />} />

            </Routes>
  )
}

export default AllRoutes