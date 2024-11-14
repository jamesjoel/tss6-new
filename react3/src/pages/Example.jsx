import React from 'react'

const Example = () => {
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h3>Multi-Level DropDown</h3>
                <div className='my-4'>
                    <label>Select State</label>
                    <select className='form-control'>
                        <option>Select</option>
                    </select>
                </div>
                <div className='my-4'>
                    <label>Select District</label>
                    <select className='form-control'>
                        <option>Select</option>
                    </select>
                </div>
                <div className='my-4'>
                    <label>Select Sub-District</label>
                    <select className='form-control'>
                        <option>Select</option>
                    </select>
                </div>
                <div className='my-4'>
                    <label>Select Village</label>
                    <select className='form-control'>
                        <option>Select</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Example