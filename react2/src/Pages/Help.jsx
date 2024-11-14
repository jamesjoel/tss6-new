import React, {useState} from 'react'

const Help = () => {
    let [showMsg, z] = useState(true);

    let [num, b] = useState(1000);
    
    let [color, x] = useState("red");
    let [font, y] = useState(28);

    let demo = ()=>{
        console.log("******");
        b(5000)
        
    }

    let demo2 = ()=>{
        b("rohit");
    }

    let demo3 = ()=>{
        x("green");
    }
    let demo4 = ()=>{
        y(50)
    }

    let demo5 = ()=>{
        y(28)
    }

    let demo6 = ()=>{
        z(false);
    }
  return (
    <div className="row">
        <div className="col-md-12 my-5">
            <h1>Welcome</h1>
            <h2>{num}</h2>
            <button onClick={demo}>ok</button>
            <button onClick={demo2}>ok</button>
            <br />
            <br />
            <h2 style={{backgroundColor : color, fontSize : font}}>The Stepping Stone</h2>
            <button onClick={demo3}>Change</button>
            <button onClick={demo4}>Big Font</button>
            <button onClick={demo5}>Small</button>
            <br />
            <br />
            <button onClick={demo6} className='btn btn-info'>
                Notification 
                {
                    showMsg == true
                    ?
                    <span className='badge bg-dark'>7</span>
                    :
                    ''
                }
            </button>

        </div>
    </div>
  )
}

export default Help