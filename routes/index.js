const express = require("express");
const router = express.Router();
const realpage = require("./realpage/realpage.router");
const md = require("../middleware/index");

// RealPage specific middlewares
router.use(md.loadLogger);

router.use("/realpage/v1", realpage);

module.exports = router;
