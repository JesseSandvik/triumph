const bcrypt = require("bcrypt");

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
  create: create,
};
