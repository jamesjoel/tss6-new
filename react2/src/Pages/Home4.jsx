import React, {useState} from 'react'

const Home4 = () => {
    let [color, setColor] = useState("red")
    let [h, setH] = useState(200);
    let [w, setW] = useState(200);

    let demo1 = ()=>{
        setColor("green");
    }
    let demo2 = ()=>{
        setColor("black");
        setH(200)
        setW(200)
    }

    let demo3 = ()=>{
        setH((++h))
        setW((++w))

        
    }
  return (
    <div className="row">
        <div className="col-md-12 my-5">
            <div onMouseMove={demo3} onMouseOut={demo2} onMouseOver={demo1} style={{height : h+"px", width : w+"px", backgroundColor : color}}></div>
        </div>

    </div>
  )
}

export default Home4

/*
    a++

    ++a;


*/