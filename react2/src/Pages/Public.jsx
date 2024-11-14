import React, {useState} from 'react'

const Public = () => {

    let [imgArr, setImgArr] = useState(["./public/assets/image/1.jpg"])


    let demo = (a)=>{
        let x = "./public/assets/image/"+a;
        setImgArr(()=>{
            return [...imgArr, x];
        })
    }

    // let demo1 = ()=>{
    //     setPath("./public/assets/image/1.jpg")
    // }
    // let demo2 = ()=>{
    //     setPath("./public/assets/image/2.jpg")
    // }
    // let demo3 = ()=>{
    //     setPath("./public/assets/image/3.jpg")
    // }
    // let demo4 = ()=>{
    //     setPath("./public/assets/image/4.jpg")
    // }

  return (
    <div className="row">
        <div className="col-md-12">
            {
                imgArr.map(item=>{
                    return(
                        <img src={item} style={{height : "200px", width : "200px"}} />
                    )
                })
            }

            <br />
            <br />
            <button onClick={()=>demo("1.jpg")} className='btn btn-dark m-2'>Mango</button>
            <button onClick={()=>demo("2.jpg")} className='btn btn-dark m-2'>Banana</button>
            <button onClick={()=>demo("3.jpg")} className='btn btn-dark m-2'>Brocali</button>
            <button onClick={()=>demo("4.jpg")} className='btn btn-dark m-2'>Finger</button>
        </div>
    </div>
  )
}

export default Public