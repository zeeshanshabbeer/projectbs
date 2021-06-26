const jwt = require("jsonwebtoken");

const Generatetoken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: "30d",
  });
};

module.exports = Generatetoken;
