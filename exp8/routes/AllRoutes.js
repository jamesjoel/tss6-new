const routes = require("express").Router();

routes.use("/api/v1/employee", require("../controllers/EmployeeController"));
routes.use("/api/v1/info", require("../controllers/InfoController"));
routes.use("/api/v1/demo", require("../controllers/DemoController"));
routes.use("/api/v1/upload", require("../controllers/UploadController"));
routes.use("/api/v1/product", require("../controllers/ProductController"));


module.exports = routes;