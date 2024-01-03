const express = require("express");
const router = express.Router();

const homeController = require("./controllers/homeController");

// Rotas da home
router.get("/", homeController.homePage);
router.post("/", homeController.trataPost);

module.exports = router;
