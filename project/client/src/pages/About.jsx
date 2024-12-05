import React, { useState, useRef } from 'react'
import axios from 'axios'

const About = () => {

    let x = useRef();
    let y = useRef();

    let file = useRef();

    let [showLoader, setShowLoader] = useState(false);
    let [pro, setPro] = useState([]);
    let [user, setUser] = useState({
        name : "",
        age : "",
        city : "",
        gender : ""
    })

    
    let demo = ()=>{
        console.log(user);
    }

    let getdata = ()=>{
        setShowLoader(true);
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            setShowLoader(false);
            setPro(response.data);
        })
    }

    let demo2 = ()=>{
        x.current.focus();
        console.log(y.current)

    }


    let upload = ()=>{
        // console.log(file.current.files[0])
        let myfile = file.current.files[0];
        
        let form = new FormData();
        form.append("hello", myfile);

        axios.post("http://localhost:3000/api/v1/demo2", form)
        .then(response=>{
            console.log(response.data);
        })
    }



  return (
    <div className="container my-5" style={{minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-4">
                <input type='text' className='form-control'/>
                <br />
                <br />
                <input ref={x} type='text' className='form-control' />
                <br />
                <br />
                <h1 ref={y}>Hello Indore</h1>
                <button onClick={demo2}>OK</button>

                <br />
                <br />
                <input ref={file} type='file' />
                <br />
                <br />
                <button type='button' onClick={upload} className='btn btn-info'>Upload</button>
            </div>
            {/* <div className="col-md-12">
                <button onClick={getdata} className='btn btn-info'>
                    Get Data 
                    {
                        showLoader == true
                        ?
                        <span className='spinner-border spinner-border-sm'></span>
                        :
                        ''
                    }
                    
                     </button>

                    <table className='table table-dark my-3'>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pro.map((item, index)=>{
                                    return(
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td><img src={item.image} style={{height : "50px", width : "50px"}} /></td>
                                            <td>{item.rating.rate}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                {/* <h1>About Page</h1>
                <br />
                Name <input  type='text' onChange={(event)=>setUser({ ...user, name : event.target.value })} />
                <br />
                <br />
                Age <input  type='text' onChange={(event)=>setUser({...user, age : event.target.value })}/>
                <br />
                <br />
                City <input  type='text' onChange={(event)=>setUser({...user, city : event.target.value })}/>
                <br />
                <br />
                Gender : Male <input type='radio' name='gender' value="male" onChange={(event)=>setUser({...user, gender : event.target.value })}/>
                Female <input type='radio' name='gender' value="female" onChange={(event)=>setUser({...user, gender : event.target.value })}/>
                <br />
                <button onClick={demo}>OK</button> 
            </div> */}
        </div>
    </div>
  )
}

export default About