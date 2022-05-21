const users = require("../db/users.json");

const list = (req, res) => {
  res.status(200).json({ data: users });
};

module.exports = {
  list: list,
};
