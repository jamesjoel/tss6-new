import React, {useContext} from 'react'
import MyData from './MyContext'

const C = () => {

    let a = useContext(MyData);
  return (
    <div  style={{height : "200px", width : "200px", backgroundColor : "yellow"}}>
        C
        <h1>{a.name}</h1>
    </div>
  )
}

export default C