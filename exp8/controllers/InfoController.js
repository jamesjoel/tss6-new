let routes = require("express").Router();
let TeacherStu = require("../models/TeacherStudentInfo")
require("../models/Student");
require("../models/Teacher");

routes.post("/", async (req, res)=>{
    // console.log(req.body);
    await TeacherStu.create(req.body);
})  

routes.get("/", async(req, res)=>{
    let result = await TeacherStu.find({ teacher_id : "66fcea23ae3f0b84f7f6cf43" }).populate("student_id").populate("teacher_id").exec();
    res.send(result);
})

module.exports = routes;

