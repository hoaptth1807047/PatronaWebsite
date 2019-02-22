const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("views", "views");
app.set("views engine", "ejs");
app.set(bodyParser.urlencoded());
app.set(express.static('public'));

var router = require("./router/applicationRouter.js");
router.routing(app);

app.listen(process.env.PORT || 9999, function () {
    console.log("Chay thanh cong");
});