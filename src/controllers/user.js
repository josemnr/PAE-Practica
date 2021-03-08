const user = require("../models/user");

exports.getUsers = (req, res) => {
    // res.end('Users endpoint');
    user.find({}, (err, results) => {
        console.log(results);
        res.end('todo bien');
    });
}

// exports.createUser = (req, res) => {
//     res.end('Create User endpoint');
// }