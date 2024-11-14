import React, {useState} from 'react'

const Home6 = () => {
    let [path, setPath] = useState("./public/assets/image/1.jpg")
    let [disp, setDisp ]= useState("none")

    let demo = (a)=>{
        setPath(a);
    }
    let demo2 = ()=>{
        setDisp("block");
    }
    let demo3 = ()=>{
        setDisp("none");
    }
  return (
    <div className="row">
        <div className="col-md-12">
            <img onMouseOver={demo2} onMouseOut={demo3} src={path} style={{height : "400px", width : "400px"}}/>
            <br />
            <img onMouseOver={()=>demo('./public/assets/image/1.jpg')} src='./public/assets/image/1.jpg' style={{height : "50px", width : "50px"}}/>
            <img onMouseOver={()=>demo('./public/assets/image/2.jpg')} src='./public/assets/image/2.jpg' style={{height : "50px", width : "50px"}}/>
            <img onMouseOver={()=>demo('./public/assets/image/3.jpg')} src='./public/assets/image/3.jpg' style={{height : "50px", width : "50px"}}/>
            <img onMouseOver={()=>demo('./public/assets/image/4.jpg')} src='./public/assets/image/4.jpg' style={{height : "50px", width : "50px"}}/>
            
            <div style={{height : "500px", width : "700px", backgroundImage : `url('${path}')`, backgroundSize : "cover", display : disp, position : "absolute", left : "400px", top : "70px"}}></div>
        </div>
    </div>
  )
}

export default Home6