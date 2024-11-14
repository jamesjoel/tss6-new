import React from 'react'

const About = () => {

  let arr1 = ["indore", "mumbai", "pune", "delhi", "ujjain", "bhopal", "dewas", "ratlam"]
  // let arr1 = Array.from({length : 10});

  let arr2 = [5, 8, 12, 16, 20];
  let total = 0;

  let dataList = arr2.map(item=>{
    total += item;
    return (
      <h2>{item}</h2>
    )
  })



  return (
    <>
      {
        arr1.map((a, b)=>{
          return(<h1>{b+1} {a}</h1>)
        })
      }

      {
        dataList
      }
      {
        total
      }
    </>
  )
}

export default About