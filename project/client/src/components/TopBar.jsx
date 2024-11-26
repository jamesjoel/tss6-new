import React from 'react'

const TopBar = (props) => {
  return (
    <div className="container-fluid bg-dark p-3">
        <div className="container">
            <h4 className='text-light'>{props.PageName}</h4>
        </div>
    </div>
  )
}

export default TopBar