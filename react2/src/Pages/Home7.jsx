import React, { useState } from 'react'

const Home7 = () => {
    let a = useState;

    console.log(a)

    let [color, setColor] = useState("gray")
    let [border1, setBorder1] = useState("black");

    let demo1 = ()=>{
        setColor("red");
    }
    let demo2 = ()=>{
        setColor("green");
    }
    let demo3 = ()=>{
        setBorder1("yellow")
    }
    let demo5 = (obj)=>{
        obj.preventDefault();
    }
    let demo6 = (obj)=>{
        obj.preventDefault();
    }

  return (
    <div className="row">
        <div className="col-md-6 my-5">
            <input onKeyUp={demo2} onKeyDown={demo1} style={{backgroundColor : color }} type='text' />
            <br />
            <br />
            <input onFocus={demo3} onBlur={()=>setBorder1("blue")} type='text' style={{backgroundColor : border1 }} /> 
            <br />
            <br />
            <input type='text' onCopy={(e)=>demo5(e)}/>
            <br />
            <br />
            <input type='password' onPaste={(e)=>demo6(e)}/>

            <br />
            <br />
        </div>
    </div>
  )
}

export default Home7

// dfg sdfg sdfg
// james james