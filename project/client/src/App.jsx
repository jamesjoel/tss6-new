import React from 'react'

import AllRoutes from './AllRoutes/AllRoutes'
import Header from './components/Header/Header'
import Footer from './components/Footer'
const App = () => {
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