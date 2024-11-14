require("../config/conn");
let mongoose = require("mongoose");

let ProSchema = mongoose.Schema({
    title : String,
    price : Number,
    category : String,
    image : String
})

module.exports = mongoose.model("product", ProSchema);