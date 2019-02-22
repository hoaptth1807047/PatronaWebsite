var listUser = [];

exports.processRegister = function (req, res) {
    var user = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "password": req.body.password,
        "confirm-password": req.body.confirm-password,
        "address": req.body.address,
        "phone": req.body.phone,
        "avatar": req.body.avatar,
        "birthday": req.body.birthday,
    };
    // Kiểm tra dữ liệu và lưu vào cơ sở dữ liệu.
    listUser.push(user);
    res.render("client/register-success.ejs", {
        "user": user
    });
};

exports.generateRegisterForm = function (req, res) {
    res.render("client/register.ejs");
};

exports.generateLoginForm = function (req, res) {
    res.render("client/login.ejs");
};

exports.processLogin = function (req, res) {
    var user = {
        "email": req.body.email,
        "password": req.body.password
    };
    var loginSuccess = false;
    for (var i = 0; i < listUser.length; i++) {
        var tempUser = listUser[i];
        if (tempUser.email == user.email && tempUser.password == user.password) {
            loginSuccess = true;
            break;
        }
    }
    if (loginSuccess) {
        res.send("Login thành công với tài khoản " + user.email);
    } else {
        res.send("Sai thông tin tài khoản!");
    }
};