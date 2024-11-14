let express = require("express");
let routes = express.Router();

routes.use("/api/v1/product", require("../controllers/ProductController"));
routes.use("/api/v1/user", require("../controllers/UserController"));
routes.use("/api/v1/category", require("../controllers/CategoryController"))

module.exports = routes;