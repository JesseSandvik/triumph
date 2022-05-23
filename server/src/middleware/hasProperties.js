const hasProperties = (properties) => {
  if (!properties || !Array.isArray(properties)) return;
  return (req, res, next) => {
    const { data } = req.body;
    properties.map((property) => {
      if (!data[property]) {
        next({ status: 400, message: `A ${property} is required.` });
      }
    });
    next();
  };
};

module.exports = hasProperties;
