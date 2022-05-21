const bcrypt = require("bcrypt");
const hasProperties = require("../middleware/hasProperties");

const properties = ["username", "password"];

const hasValidProperties = hasProperties(properties);

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
  create: [hasValidProperties, create],
};
