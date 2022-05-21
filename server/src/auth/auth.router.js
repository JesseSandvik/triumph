const express = require("express");
const router = express.Router();
const controller = require("./auth.controller");

router.route("/").post(controller.handleLogin);

module.exports = router;
