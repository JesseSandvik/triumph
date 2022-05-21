const hasValidProperties = (req, res, next) => {
  const { username, password } = req.body.data;

  if (!username) {
    next({
      status: 400,
      message: "A username is required",
    });
  } else if (!password) {
    next({
      status: 400,
      message: "A password is required",
    });
  }
  next();
};

const handleLogin = (req, res) => {
  res.status(201).json({ data: req.body.data });
};

module.exports = {
  handleLogin: [hasValidProperties, handleLogin],
};
