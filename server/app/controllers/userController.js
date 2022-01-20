const { compare } = require("../helpers/bcrypt");
const { User } = require("../models/index");
const { sign } = require('../helpers/jwt')

class UserController {
  static async postRegister(req, res, next) {
    const { email, password, fullname } = req.body;
    let newUser = { email, password, fullname, role: "user", isRegister: "false" };
    try {
      let created = await User.create(newUser);
      res
        .status(201)
        .json({ fullName: created.fullName, email: created.email, role: created.user, isRegister: created.isRegister });
    } catch (err) {
      next(err);
    }
  }

  static async postLogin(req, res, next) {
    try {
      console.log(req.body);
      const { email, password } = req.body;
      if (!email || !password) throw { name: "Required" };
      const user = await User.findOne({ where: { email } });
      if (!user || !compare(password, user.password)) {
        throw { name: "Invalid" };
      }

      const payload = {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        isRegister: user.isRegister,
      };
      const token = sign(payload);
      res.status(200).json({
        access_token: token
      });
    } catch (err) {
      next(err);
    }
  }

  static async getUsers(req, res, next) {
    try {
      const users = await User.findAll({
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      });
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }
  
  static async patchUser(req, res, next) {
    try {
      let { isRegister } = req.body;
      const { id } = req.params;
      const patchedUser = await User.update({ 
        isRegister 
      }, 
      { 
        where: { 
          id 
        },
        returning: true 
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
