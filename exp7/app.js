let express = require("express");
let app = express();

app.use(require("./routes/AllRoutes"))


let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running ", port)
})