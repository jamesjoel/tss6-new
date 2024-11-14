let express = require("express");
let app = express();

let routes = require("./routes/AllRoutes");

app.use(routes);

let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(process.env)
    console.log("server running with port ", port)
})