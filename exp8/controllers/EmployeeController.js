const routes = require("express").Router();
const Emp = require("../models/Employee")

routes.get("/", async(req, res)=>{
    let result = await Emp.find();
    res.send(result);
});

routes.get("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Emp.find({ _id : id })
    res.send(result)
})

routes.post("/", async(req, res)=>{
    await Emp.create(req.body); // form data always comming in req.body
    res.send({success : true});
})

routes.delete("/:id", async(req, res)=>{
    let x = req.params.id;
    await Emp.deleteMany({_id : x});
    res.send({success : true});
})

routes.put("/:id", async(req, res)=>{
    let x = req.params.id;
    await Emp.updateMany({_id : x}, req.body);
    res.send({success : true});
})

module.exports = routes;