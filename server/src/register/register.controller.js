const bcrypt = require("bcrypt");

const hasUsernameProperty = async (req, res, next) => {
  const { username } = req.body.data;

  if (!username) {
    next({
      status: 400,
      message: `A username is required!`,
    });
  }
  next();
};

const create = async (req, res) => {
  const { username, password } = req.body.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    username,
    password: hashedPassword,
  };
  res.status(201).json({ data: newUser });
};

module.exports = {
  create: [hasUsernameProperty, create],
};
