const { compare } = require("../helpers/bcrypt");
const { User } = requrie("../models");

class UserController {
  static async postRegister(req, res, next) {
    const { email, password, fullname } = req.body;
    let newUser = { email, password, fullname, role: "user", isRegister: "false" };
    try {
      let created = await User.create(newUser);
      res.status(201).json({ fullName: created.fullName, email: created, role: created.user, isRegister: created.isRegister });
    } catch (err) {
      if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstaintError")
        res.status(400).json({ message: err.errors[0].message });
      else {
        res.status(500).json(err);
      }
    }
  }

  static async postLogin(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: "required" };
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
      res.status(200).json(token);
    } catch (err) {
      if (err.name === "required") {
        res.status(400).json({ message: "Email or Password is required" });
      } else if (err.name === "Invalid") {
        res.status(401).json({ message: "Invalid email/password" });
      } else {
        res.status(500).json(err);
      }
    }
  }

  static async getUsers(req, res, next) {
    const users = await User.findAll();
  }
}

module.exports = UserController;
