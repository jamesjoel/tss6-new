let express = require("express");
let app = express();
let cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors());


app.use(require("./routes/AllRoutes"))


let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running ", port)
})