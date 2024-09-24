let routes = require("express").Router();


routes.use("/api/v1/student", require("../controllers/StudentController"));

module.exports = routes;