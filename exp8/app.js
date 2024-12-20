const express = require("express");
const app = express(); // constructor
const cors = require("cors")
const upload = require("express-fileupload")

app.use(express.static(__dirname+"/assets"));

app.use(upload());


app.use(express.json());
app.use(express.urlencoded({ extended : true}));
// app.use(cors({
//     origin : ["www.makemytrip.com", "www.hotel.com"]
// }));
app.use(cors())

app.use(require("./routes/AllRoutes"));

let port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("api server running with port ", port);
})