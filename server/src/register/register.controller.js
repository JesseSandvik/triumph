const create = async (req, res) => {
  res.status(201).json({ data: req.body.data });
};

module.exports = {
  create: create,
};
