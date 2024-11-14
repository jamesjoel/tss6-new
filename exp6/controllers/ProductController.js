let express = require("express");
let routes = express.Router();

routes.get("/", (req, res)=>{
    res.send([]);
})
routes.get("/order", (req, res)=>{
    res.send([]);
})
routes.get("/return", (req, res)=>{
    res.send([]);
})
routes.get("/track", (req, res)=>{
    res.send([]);
})

module.exports = routes;