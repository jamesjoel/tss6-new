// require("mongoose").connect("mongodb://0.0.0.0:27017/tss6");
require("mongoose")
.connect("mongodb+srv://jamessteppingstone:69IIbw6r1n89xJFp@cluster0.8uhag.mongodb.net/")
.then(()=>{
    console.log("CONNECTED")
})
.catch((err)=>{
    console.log("NOT CONNECTED", err)
})

// jamessteppingstone
// 69IIbw6r1n89xJFp