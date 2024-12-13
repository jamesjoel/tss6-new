// let fs = require("fs");
// let http = require("http");

// http.get("http://fakestoreapi.com/products", (data)=>{
//     console.log(data)
//     console.log("hello");
// })

let result = axios.get("URL");
console.log(result); // undefined



/*
callback

axios.get("", (result)=>{
    console.log(result);
})

*/


/*
Promise
axios.get("URL").then(result=>{

}).catch(err=>{

})
    */



async function demo(){
    let result = await axios.get("URL");
    console.log(result)
}




