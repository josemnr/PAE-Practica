const express = require("express")
const router = express.Router()
const newsController = require("../controllers/news")

router.get("/", newsController.renderHomePage)
router.post("/", newsController.getNews)

module.exports = router


