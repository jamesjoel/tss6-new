import React, {useContext} from 'react'
import B from './B'
import UserContext from './UserContext'

const A = () => {
    let a = useContext(UserContext);
  return (
    <>
    <div  style={{height : "400px", width : "400px", backgroundColor : "green"}}>
        A
        <h2>{a.salary}</h2>
    <B />
    </div>
    </>
  )
}

export default A