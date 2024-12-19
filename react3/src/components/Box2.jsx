import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { chnageName3 } from '../redux/DemoSclice'

const Box2 = () => {
  let dispatch = useDispatch();
  let name = useSelector(state=>state);
  return (
    <div style={{height : "300px", width : "300px", backgroundColor : "#96ACD1"}}>
        Box2
        <h3>{name}</h3>

        <div onMouseOver={()=> dispatch(chnageName3()) } style={{height:"100px", width:"100px", backgroundColor:"red"}}></div>
        
    </div>
  )
}

export default Box2