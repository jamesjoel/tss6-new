import React, { useState } from 'react'

const Home5 = () => {
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);

  let demo = (event)=>{
    setX(event.clientX)
    setY(event.clientY)
  }
  return (
    <>
    <h2>Position X : {x}, Position Y : {y}</h2>
    <div onMouseMove={(e)=>demo(e)} style={{height : "600px", width : "100%", backgroundColor : "red"}}>

    </div>
    </>
  )
}

export default Home5