const express = require("express");
const app = express();

const registerRouter = require("./register/register.router");

app.get("/", (req, res) => {
  res.status(200).json("Hello World!");
});

app.use("/register", registerRouter);

module.exports = app;
