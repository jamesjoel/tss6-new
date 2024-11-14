let routes = require("express").Router();
let User = require("../models/User");

routes.get("/", async(req, res)=>{
    let result = await User.find();
    res.send(result)
})

module.exports = routes;