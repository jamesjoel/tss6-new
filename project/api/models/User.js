require("../config/conn");

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    address : String,
    contact : String,
    gender : String,
    city : String,
    state : String
})

module.exports = mongoose.model("user", UserSchema);