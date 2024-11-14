require("../config/conn");

const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
    name : String,
    fee : Number,
    class : Number
})

module.exports =  mongoose.model("student", StudentSchema);

