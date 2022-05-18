const users = require("../db/users.json");

const list = (req, res) => {
  res.sendStatus(200);
};

module.exports = {
  list: list,
};
