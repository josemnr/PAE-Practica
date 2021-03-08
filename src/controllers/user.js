const user = require("../models/user");

exports.getUsers = (req, res) => {
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
    console.log(req.file);
    if(req.file){
        res.end('User created');
    }else{
        res.end('File not supported');
    }
    user.insert(req.body);
}