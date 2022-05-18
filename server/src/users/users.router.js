const express = require("express");
const router = express.Router();
const controller = require("./users.controller");

router.route("/list").get(controller.list);

module.exports = router;
