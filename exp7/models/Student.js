require("../config/conn");
let mongoose = require("mongoose");

let StuSchema = mongoose.Schema({
    city : String,
    name : String,
    age : Number,
    gender : String
    
})

let Student = mongoose.model("student", StuSchema);

module.exports = Student;