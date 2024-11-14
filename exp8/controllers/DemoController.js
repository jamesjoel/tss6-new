let routes = require("express").Router();
let request = require("request")

routes.get("/", (req, res)=>{
    request("https://jsonplaceholder.typicode.com/users", (err, res2, body)=>{
        // console.log("-----err", err);
        // console.log("-----reponse", res2);
        res.send(body)
    })
})

module.exports = routes;