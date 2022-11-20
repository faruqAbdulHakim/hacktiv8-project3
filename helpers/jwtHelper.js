if (process.env.NODE_ENV !== "production") require("dotenv").config;
const jwt = require("jsonwebtoken");

exports.sign = (payload, options) => {
  return jwt.sign(payload, process.env.SECRET_TOKEN, options);
};

exports.verify = (token, options) => {
  return jwt.verify(token, process.env.SECRET_TOKEN, options);
};
