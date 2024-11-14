import React, {useState} from 'react'

const Home2 = () => {
    let [type, setType] = useState("password")

    let demo = ()=>{
        if(type=="password")
            setType("text");
        else
            setType("password");
    }

  return (
    <div className="row">
        <div className="col-md-6 my-3">
            <h1>Welcome</h1>
            <div className='my-2'>
                <div className='input-group'>
                        <input type={type} className='form-control'/>
                        <button onClick={demo} className='btn btn-dark'>
                            {
                                type=="password"
                                ?
                                <i class="fa fa-eye-slash" aria-hidden="true"></i>
                                :
                                <i class="fa fa-eye" aria-hidden="true"></i>

                            }
                        </button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Home2