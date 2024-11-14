import React from 'react'

const Home3 = () => {

    let demo1 = (obj)=>{
        console.log(obj)
        console.log("******")
    }

    let demo2 = ()=>{
        console.log("####")
    }
    let demo3 = (e)=>{
        e.preventDefault();
        console.log("@@@@@@@@@")
    }

    let demo4 = (e)=>{
        e.preventDefault();
    }
  return (
    <div className="row">
        <div className="col-md-12 my-5">
            <button onDoubleClick={demo2} onClick={(x)=>demo1(x)} className='btn btn-info'>Click Me</button>
            <div onContextMenu={(e)=>demo3(e)} style={{height : "200px", width : "200px", backgroundColor : "red"}}>

            </div>
            <br />
            <br />
            <a onClick={(e)=>demo4(e)} href='http://google.com'>Google</a>
        </div>
    </div>
  )
}

export default Home3