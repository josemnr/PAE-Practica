const express = require("express");
const router = express.Router();
const userController = require("../controllers/user")

//Definición de rutas
router.get("/", userController.getUsers);
// router.post("/", userController.createUser);

module.exports = router