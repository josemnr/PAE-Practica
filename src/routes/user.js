const express = require("express");
const router = express.Router();
const userController = require("../controllers/user")
const multer = require('multer');

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../../public/images')
    },
    filename: (req, file, cb) => {
        console.log('File: ', file);
        cb(null, file.originalname);
    }
});
const fileFilters = (req, file, cb) => {
    const flag = file.mimetype.startsWith('images');
    cb(null, flag);
};

const uploadFile = multer({
    storage: multerStorage,
    fileFilter: fileFilters
})

//Definición de rutas
router.get("/", userController.getUsers);
router.get("/create", userController.renderUserCreationPage);
// router.post("/create", userController.createUser);
router.post("/create", uploadFile.single('profilePic'), userController.createUser);

module.exports = router