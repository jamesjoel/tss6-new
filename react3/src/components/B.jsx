import React, {useContext} from 'react'
import UserContext from './UserContext'
import C from './C'

const B = () => {

    let x = useContext(UserContext);

  return (
    <>
    <div  style={{height : "300px", width : "300px", backgroundColor : "red"}}>
        B
        <h2>{x.salary}</h2>
    <C />

    </div>
    </>
  )
}

export default B