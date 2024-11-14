/*
    which file run in the project ---- its called main file

    other then all files called --- modules

            There are 3 types of module
                1. core module (in built module)
                    a. fs
                    b. http
                    c. util
                    d. path
                    e. body-parser
                    f. crypto
                
                2. local module (create by us)
                3. publie module


*/
// let x = require("./mode1")
// console.log("main file", x)

// let a = require("path")
// console.log(a)
let rev = require("string-reverse-js")

let x = "rohit sharma";
let y = rev(x);
console.log(y)
