const express = require("express");
const app = express();

const registerRouter = require("./register/register.router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/register", registerRouter);

module.exports = app;
