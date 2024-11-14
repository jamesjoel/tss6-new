let mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss6_project");

let DataSchema = mongoose.Schema({
    state : String,
     districts : [
        {
            district  : String,
            subDistricts : [
                {
                    subDistrict : String,
                    villages : []
                }
            ]
        }
     ]
}, {collection : "data"})

module.exports = mongoose.model("data", DataSchema);