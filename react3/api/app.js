let express = require("express");
let app = express();
let cors = require("cors");

let Data = require("./models/Data")

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended : true }))

let port = process.env.PORT || 3000;


app.get("/api/v1/data/state", async(req, res)=>{
    let result = await Data.find().select("state");
    res.send(result);
})
app.get("/api/v1/data/district", async(req, res)=>{
    let result = await Data.find({state : "Madhya Pradesh"}).select("districts.district");
    res.send(result);
})
app.get("/api/v1/data/subdistrict", async(req, res)=>{
    let result = await Data.find({"districts.district" : "Alirajpur"}).select("districts.subDistricts.subDistrict");
    res.send(result);
})
app.get("/api/v1/data/village", async(req, res)=>{
    // let result = await Data.find({ $and : [{state : "Andhra Pradesh"}, {"districts.district" : "Anantapur"}, {"districts.subDistricts.subDistrict" : "Agali"}]});
    let result = await Data.find({"districts.subDistricts.subDistrict" : "Bhavra"});
    res.send(result);
})

app.listen(port, ()=>{
    console.log("Server Running")
})