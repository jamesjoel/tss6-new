import React from 'react'

const Home = () => {

  let name = "Rohit";
  let city = "Indore";

  let z1 = "Gaurav";
  let z2 = "Vishal";

  let a = 10;
  let b = 20;

  let x = false;
  // conition ? yes : no

  return (
    <>
      <div>Home</div>
      <h1>{ name }</h1>
      <h2>{city}</h2>
      <h1>{ a+b }</h1>

      { 
        x==true 
        ? 
        <h1>{z1}</h1> 
        : 
        <h1>{z2}</h1> 
      }



    </>
  )
}

export default Home