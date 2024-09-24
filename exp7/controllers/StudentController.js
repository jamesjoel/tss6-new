let routes = require("express").Router();
let mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss6").then(()=>{ 
    console.log("CONNECTED")
})
.catch(()=>{ 
    
    console.log("NOT CONNECTED")
 })


let StuSchema = mongoose.Schema({
    city : String,
    name : String,
    age : Number,
    gender : String
    
})

let Student = mongoose.model("student", StuSchema);


routes.get("/", async(req, res)=>{
    let data = await Student.find();
    res.send(data);
})

module.exports = routes;