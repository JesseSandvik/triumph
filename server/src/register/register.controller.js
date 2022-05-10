const bcrypt = require("bcrypt");

const hasUsernameProperty = (req, res, next) => {
  const { password, username } = req.body.data;

  if (!username || !password) {
    next({
      status: 400,
      message: `A username is required!`,
    });
  }
  next();
};

const create = async (req, res) => {
  console.log(res.body);
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
