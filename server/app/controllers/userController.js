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
  static async getUsers(req, res, next) {
    const users = await User.findAll();
  }
}

module.exports = UserController;
