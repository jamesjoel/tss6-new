import B from "./B";
let A = ()=>{
    // Component --
    // A Component is a return type function which have JSX code. Every Component naming should PascleCase. Every componet is a html Tag.
    return(
        <>
        {/* <h1 style="background-color : red; font-size : 20px"> */}

        <h1 style={{ color : "blue", backgroundColor : "green", fontSize : "30px"  }}>This is A Component</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum earum nulla rem animi nam cupiditate doloribus aliquid sequi dolorum nemo. Modi dolor, provident odio sequi iure animi error voluptas exercitationem?</p>
        <B/>
        </>
    )
}

export default A;