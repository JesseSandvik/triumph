const express = require("express");
const app = express();

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const registerRouter = require("./register/register.router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/register", registerRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
