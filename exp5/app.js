let express = require("express");
let app = express();

let routes = require("./routes/allRoutes")

app.use(routes);


let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})