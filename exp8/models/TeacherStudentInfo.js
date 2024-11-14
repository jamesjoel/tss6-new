require("../config/conn");
let mongoose = require("mongoose");

let TeacherStuSchema = mongoose.Schema({
    class : Number,
    subject : String,
    student_id : { type : mongoose.Schema.Types.ObjectId, ref : "student" },
    teacher_id : {type : mongoose.Schema.Types.ObjectId, ref : "teacher"}
})

module.exports = mongoose.model("teacherstudentinfo", TeacherStuSchema);