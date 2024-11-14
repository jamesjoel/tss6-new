let routes = require("express").Router();
let Student = require("../models/Student");
let Teacher = require("../models/Teacher")



routes.get("/", async(req, res)=>{
    let result = await Student.find();
    res.send(result);
})

routes.post("/", async(req, res)=>{
    await Student.create(req.body);
    res.send({ success : true });
})


routes.delete("/:a", async(req, res)=>{
    let x = req.params.a;
    await Student.deleteMany({_id : x});
    res.send({ success : true });
})

// routes.get("/:a/:b/:c", (req, res)=>{
//     console.log(req.params);
// })

module.exports = routes;




/*
    [
        {
            student : [],
            teacher : []
        }
    ]




*/