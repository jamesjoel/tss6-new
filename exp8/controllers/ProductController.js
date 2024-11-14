let routes = require("express").Router();
let Product = require("../models/Product");
let path = require("path");

routes.post("/", async(req, res)=>{
    let file = req.files.image;
    req.body.image = file.name;
    await Product.create(req.body);

    let imagepath = path.resolve()+"/assets/products/"+file.name;
    file.mv(imagepath, (err)=>{
        if(err)
            console.log(err);
    })
})


routes.get("/", async(req, res)=>{
    let result = await Product.find();
    res.send(result);
})
module.exports = routes;