import React from 'react'
import A from './components/A'
import MyData from './components/MyContext'
import UserContext from './components/UserContext'

const App2 = () => {

    let obj = { name : "rohit", age : 25 }
    let user = {salary : 5000, city : "indore"};




  return (
    <>
    <MyData.Provider value={obj}>
        <UserContext.Provider value={user}>
        <div style={{height : "500px", width : "500px", backgroundColor : "blue"}}>
                App2

            <A />
            </div>
        </UserContext.Provider> 
    </MyData.Provider>
    </>
  )
}

export default App2