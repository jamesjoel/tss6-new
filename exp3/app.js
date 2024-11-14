let express = require("express");
let app = express();

app.get("/", (req, res)=>{
    let info = [
        {
            name : "rohit",
            age : 25,
            city : "indore"
        },
        {
            name : "gaurav",
            age : 21,
            city : "mumbai"
        },
        {
            name : "amit",
            age : 26,
            city : "pune"
        }
    ];

    res.send(info);
})



app.listen(3000, ()=>{
    console.log("Server Running")
})