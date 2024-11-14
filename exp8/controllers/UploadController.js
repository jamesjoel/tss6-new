let routes = require("express").Router();
let path = require("path");

routes.post("/", (req, res)=>{
    // console.log(req.body);
    let file = req.files.image;
    let imagepath = path.resolve()+"/assets/images/";

    file.mv(imagepath+file.name, (err)=>{
        console.log(err);
        
    });
})

module.exports = routes;