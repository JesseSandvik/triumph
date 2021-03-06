require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const errorHandler = require("./errors/errorHandler/errorHandler");
const notFound = require("./errors/notFound/notFound");
const authRouter = require("./auth/auth.router");
const registerRouter = require("./register/register.router");
const usersRouter = require("./users/users.router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/register", registerRouter);
app.use("/users", usersRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
