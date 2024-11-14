require("../config/conn");

let mongoose = require("mongoose");

let TeacherSchema = mongoose.Schema({
    name : String,
    class : Number
}, {collection : "teacher"});

let Teacher = mongoose.model("teacher", TeacherSchema);

module.exports = Teacher;