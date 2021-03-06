const jwt = require("jsonwebtoken");

const hasProperties = require("../middleware/hasProperties/hasProperties");

const properties = ["username", "password"];
const hasValidProperties = hasProperties(properties);

const handleLogin = (req, res) => {
  const { username } = req.body.data;
  const accessToken = jwt.sign(
    {
      userInfo: {
        username: username,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "50s" }
  );
  res.json({ accessToken });
};

module.exports = {
  handleLogin: [hasValidProperties, handleLogin],
};
