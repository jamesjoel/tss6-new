const routes = require("express").Router();
const Emp = require("../models/Employee")
// http://localhost:3000/api/v1/employee/key/123456abcxyz
routes.get("/", async(req, res)=>{
    // let result = await Emp.find({}, "name gender");
    let result = await Emp.find();
    res.send(result);
});


routes.get("/key/:value", async(req, res)=>{
    console.log(req.get('host'))
    let a = req.params.value;
    if(a=="123456abcxyz")
    {
        let result = await Emp.find();
        res.send(result);
    }
    else{
        let result = await Emp.find({}, "name gender");
        res.send(result);
    }
})


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