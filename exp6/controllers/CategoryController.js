let routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.send([]);
})
routes.get("/demo1", (req, res)=>{
    res.send([]);
})
routes.get("/demo2", (req, res)=>{
    res.send([]);
})

module.exports = routes;