var userController = require("../controller/userController");

exports.routing = function (app) {
    app.get("/register", userController.generateRegisterForm);
    app.post("/register", userController.processRegister);
    app.get("/login", userController.generateLoginForm);
    app.post("/login", userController.processLogin);
};