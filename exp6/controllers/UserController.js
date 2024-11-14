let routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.send([])
})
routes.get("/primary", (req, res)=>{
    res.send([])
})
routes.get("/free", (req, res)=>{
    res.send([])
})

module.exports = routes;