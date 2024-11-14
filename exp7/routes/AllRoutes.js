let routes = require("express").Router();


routes.use("/api/v1/student", require("../controllers/StudentController"));
routes.use("/api/v1/teacher", require("../controllers/TeacherController"));
routes.use("/api/v1/user", require("../controllers/UserController"));

module.exports = routes;