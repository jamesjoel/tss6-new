import React from 'react'

const Login = () => {
  return (
    <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
            <div className="card mt-5">
                <div className="card-header bg-dark text-light">
                    <h4>Administrator Login</h4>
                </div>
                <div className="card-body">
                    <div className="my-2">
                        <label htmlFor="">Username</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className="my-2">
                        <label htmlFor="">Password</label>
                        <input type='password' className='form-control' />
                    </div>
                </div>
                <div className="card-footer">
                    <button className='btn btn-dark'>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login