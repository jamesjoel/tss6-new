import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Example from './pages/Example'

const App = () => {
  return (

    <> 
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='example' element={<Example />} />
      </Routes>
    </>
  )
}

export default App