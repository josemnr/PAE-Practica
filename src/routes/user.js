const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

//Definición de rutas
router.get("/", userController.getUsers);
router.get("/create", userController.renderUserCreationPage);
router.post("/create", userController.uploadPhoto, userController.createUser);

module.exports = router