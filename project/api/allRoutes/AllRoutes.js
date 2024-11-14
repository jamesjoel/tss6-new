const routes = require("express").Router();

routes.use("/api/v1/signup", require("../controllers/SignupController"));
routes.use("/api/v1/city", require("../controllers/CityController"));
routes.use("/api/v1/auth", require("../controllers/AuthController"));
routes.use("/api/v1/users", require("../controllers/UsersController"));
routes.use("/api/v1/category", require("../controllers/CategoryController"));
routes.use("/api/v1/subcategory", require("../controllers/SubCategoryController"));

module.exports = routes;