let express = require("express");
let routes = express.Router();


routes.get("/api/v1/users", (req, res)=>{
    let data = [
        {
            id : 1,
            name : "Rohit"
        }
    ]
    res.send(data)
})
routes.get("/api/v1/mobile", (req, res)=>{
    let data = []
    res.send(data)
})
routes.get("/api/v1/mobile/mi", (req, res)=>{
    let data = []
    res.send(data)
})
routes.get("/api/v1/mobile/apple", (req, res)=>{
    let data = []
    res.send(data)
})
routes.get("/api/v1/mobile/poco", (req, res)=>{
    let data = []
    res.send(data)
})
routes.get("/api/v1/electronics/fridge", (req, res)=>{
    let data = []
    res.send(data)
})
routes.get("/api/v1/electronics/ac", (req, res)=>{
    let data = []
    res.send(data)
})

module.exports = routes;