const express = require("express");
const realpageRouter = express.Router();
const realpageController = require("../../controllers/realpage");

realpageRouter.get("/", realpageController.init);

module.exports = realpageRouter;
