const hasProperties = require("../middleware/hasProperties");

const properties = ["username", "password"];

const hasValidProperties = hasProperties(properties);

const handleLogin = (req, res) => {
  res.status(201).json({ data: req.body.data });
};

module.exports = {
  handleLogin: [hasValidProperties, handleLogin],
};
