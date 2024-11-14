require("../config/conn");
let mongoose = require("mongoose");
let UserSchema = mongoose.Schema({
    fullname : String,
    email : String,
    contact : Number,
    gender : String
})

let User = mongoose.model("user", UserSchema);

module.exports = User;