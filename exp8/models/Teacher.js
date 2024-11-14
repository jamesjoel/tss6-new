require("../config/conn");

const mongoose = require("mongoose");

const TeacherSchema = mongoose.Schema({
    name : String,
    salary : Number
})

module.exports =  mongoose.model("teacher", TeacherSchema);

