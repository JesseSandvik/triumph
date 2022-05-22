const bcrypt = require("bcrypt");
const hasProperties = require("../middleware/hasProperties");

const fsPromises = require("fs").promises;
const path = require("path");

const usersDB = {
  users: require("../db/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const properties = ["username", "password"];

const hasValidProperties = hasProperties(properties);

const userExists = (req, res, next) => {
  const { username } = req.body.data;

  const userExists = usersDB.users.find((user) => user.username === username);

  if (userExists) {
    next({
      status: 409,
      message: "This username already exists!",
    });
  }
  next();
};

const create = async (req, res) => {
  const { username, password } = req.body.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    userId: new Date(),
    username,
    password: hashedPassword,
  };

  res.status(201).json({ data: newUser });
};

module.exports = {
  create: [hasValidProperties, create],
};
