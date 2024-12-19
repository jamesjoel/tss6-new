import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeName, chnageName4 } from '../redux/DemoSclice'

const Box1 = () => {

  let [a, setA] = useState("");

  let disp = useDispatch();

  let name = useSelector(state=>state);

  let demo = ()=>{
    disp(changeName());
  }

  return (
    <div style={{height : "300px", width : "300px", backgroundColor : "#74853A"}}>
        Box1
        <h2>{name}</h2>
        
        <button onClick={demo}>OK</button>
        <br />
        <br />
        <input value={a} onChange={(e)=>setA(e.target.value)} type='text' />
        <button onClick={()=>disp(chnageName4(a))}>Save</button>
    </div>
  )
}

export default Box1