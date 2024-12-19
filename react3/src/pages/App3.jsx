import React from 'react'
import Box1 from '../components/Box1'
import Box2 from '../components/Box2'
import { useSelector } from 'react-redux'

const App3 = () => {

  let a = useSelector(x=>x);
    
  return (
    <>
    <h1>This is App Comp : {a}</h1>
    <div style={{display : "flex"}}>
        <Box1  />
        <Box2 />
    </div>
    </>
  )
}

export default App3