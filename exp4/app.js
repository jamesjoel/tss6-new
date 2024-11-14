let express = require("express");
let app = express();

app.get("/api/city", (req, res)=>{
    let data = [];
    res.send(data);
})
app.get("/api/state", (req, res)=>{
    let data = [];
    res.send(data);
})
app.get("/api/user", (req, res)=>{
    let data = [];
    res.send(data);
})

let port = process.env.PORT || 3000;
app.listen(port, ()=>{ 
    console.log("server running");
})

/*  
    API vs URL
    
    API
    https://fakestoreapi.com/products

    URL
    https://www.flipkart.com/mens-tshirts/pr?sid=clo,ash,ank,edy&fm=neo%2Fmerchandising&iid=M_9e36897f-5fb3-4e7c-9bbb-ff201a9c0e62_1_372UD5BXDFYS_MC.IF56C41VGEYS&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Fashion~Men%27s%2BTop%2BWear~Men%27s%2BT-Shirts_IF56C41VGEYS&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=IF56C41VGEYS
*/