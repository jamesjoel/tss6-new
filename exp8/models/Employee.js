require("../config/conn");

const mongoose = require("mongoose");

const EmpSchema = mongoose.Schema({
    name : String,
    department : String,
    salary : Number,
    gender : String,
    createAt : { type : Date, default : new Date() }
})

let Emp = mongoose.model("employee", EmpSchema);

module.exports = Emp;