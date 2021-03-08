const path = require("path")
const multer = require('multer');
const user = require("../models/user");

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', '..', 'public', 'images'));
    },
    filename: (req, file, cb) => {
        console.log('File: ', file);
        cb(null, file.originalname);
    }
});

const fileFilters = (req, file, cb) => {
    const flag = file.mimetype.startsWith('image');
    cb(null, flag);
};

const uploadFile = multer({
    storage: multerStorage,
    fileFilter: fileFilters
});

exports.getUsers = (req, res) => {
    user.find({}, (err, results) => {
        console.log(results)
        res.send(results);
    });
}

exports.renderUserCreationPage = (req, res) => {
    res.render("createUser");
}

exports.uploadPhoto = uploadFile.single('profilePic');   

exports.createUser = (req, res) => {
    let userToInsert = {}
    if(req.file){
        userToInsert = req.body;
        userToInsert.profilePic = path.join(__dirname, '..', '..', 'public', 'images', req.file.filename);
        console.log(userToInsert);
        user.insert(userToInsert);
        res.end('User created');
    }else{
        res.end('File not supported');
    }
}