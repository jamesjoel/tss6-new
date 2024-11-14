let express = require("express");
let app = express();

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/home.html");
})


app.get("/watch", (req, res)=>{
    res.sendFile(__dirname+"/watch.html")
})

app.get("/login", (req, res)=>{
    res.sendFile(__dirname+"/abc.html")
})

app.listen(3001, ()=>{ 
    
    console.log("Server Running Successful")
});