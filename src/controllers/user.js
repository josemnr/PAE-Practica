const user = require("../models/user");

exports.getUsers = (req, res) => {
    // res.end('Users endpoint');
    user.find({}, (err, results) => {
        console.log(results);
        res.send(results);
    });
}

exports.renderUserCreationPage = (req, res) => {
    res.render("createUser");
}

exports.createUser = (req, res) => {
    console.log(req.body);
    user.insert(req.body);
}