import React from 'react'

const Contact = () => {

  let data = [
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "amar",
      age : 21,
      city : "pune"
    },
    {
      name : "vijay",
      age : 20,
      city : "indore"
    },
    {
      name : "jaya",
      age : 22,
      city : "bhopal"
    },
    {
      name : "jaya",
      age : 22,
      city : "bhopal"
    },
    {
      name : "jaya",
      age : 22,
      city : "bhopal"
    },
    {
      name : "jaya",
      age : 22,
      city : "bhopal"
    },
    {
      name : "jaya",
      age : 22,
      city : "bhopal"
    },
    {
      name : "jaya",
      age : 22,
      city : "bhopal"
    }
  ]

  return (
  <>
    <table className='table my-3 table-dark table-bordered table-hover table-striped'>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>


        {
          data.map((item, index)=>{
            return(
              <tr>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
              </tr>
            )
          })
        }



      </tbody>
    </table>
  </>
  )
}

export default Contact