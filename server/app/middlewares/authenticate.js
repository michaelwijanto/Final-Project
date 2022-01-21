const { verify } = require("../helpers/jwt");
const { User } = require("../models");

const authenticate = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    console.log({access_token});
    const payload = verify(access_token);
    if (!User.findOne({ where: { id: payload.id } })) {
      throw { name: "USER_NOT_FOUND" };
    }

    req.user = {
      ...payload,
    };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  authenticate
};
