const jwt = require("jsonwebtoken");

function sign(payload) {
  return jwt.sign(payload, process.env.JWT_SIGNATURE);
}

function verify(access_token) {
  return jwt.verify(access_token, process.env.JWT_SIGNATURE);
}

module.exports = { sign, verify };
