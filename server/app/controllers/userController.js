const { compare } = require("../helpers/bcrypt");
const { User, Coach, Level } = require("../models/index");
const { sign } = require("../helpers/jwt");
const nodemailer = require("nodemailer");

class UserController {
  static async postRegister(req, res, next) {
    const { email, password, fullName } = req.body;
    console.log({ email, password, fullName });
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tokomovieh8@gmail.com",
        pass: "ToKoMovieH8!",
      },
    });
    let pin = ""
    for (let i = 1; i <= 6; i++){
      pin += `${Math.floor(Math.random() * 10)}`
    }
    let notif = {
      from: "tokomovieh8@gmail.com", // sender address
      to: email, // list of receivers
      subject: "Activation Pin", // Subject line
      text: `Dont share your Active8 Activation Pin to anyone ${pin}`,
    };

    transporter.sendMail(notif, (err, data) => {
      if (err) {
        console.log(`Email not send`);
      } else {
        console.log(`Email has been sent`);
      }
    });

    let newUser = {
      email,
      password,
      fullName,
      role: "user",
      isRegister: "false",
      activatePin: pin,
      isActive: "false"
    };
    
    try {
      let created = await User.create(newUser);
      res.status(201).json({
        id: created.id,
        fullName: created.fullName,
        email: created.email,
        role: created.role,
        isRegister: created.isRegister,
      });
    } catch (err) {
      next(err);
    }
  }

  static async postLogin(req, res, next) {
    try {
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
        access_token: token,
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
      const patchedUser = await User.update(
        {
          isRegister,
        },
        {
          where: {
            id,
          },
          returning: true,
        }
      );
      res.status(200).json({message: "Success activated is Register User"})
    } catch (err) {
      next(err);
    }
  }

  static async patchActivatePin(req, res, next) {
    try {
      const { pin } = req.params;
      console.log({pin});
      const activatedUser = await User.update(
        {
          isActive: "true",
          activatePin: "used"
        },
        {
          where: {
            activatePin: `${pin}`
          },
          returning: true,
        }
      );
      res.status(200).json({message: "Success activated is Active User"})
    } catch (err) {
      next(err);
    }
  }

  static async getCoaches(req, res, next) {
    try {
      const result = await Coach.findAll();

      res.status(200).json(result);
    } catch (err) {}
  }

  static async getLevels(req, res, next) {
    try {
      const result = await Level.findAll();

      res.status(200).json(result);
    } catch (err) {}
  }

  static async getCoachDetail(req, res, next) {
    try {
      const { id } = req.params;
      const result = await Coach.findOne({
        where: { id },
      });

      res.status(200).json(result);
    } catch (err) {}
  }
}

module.exports = UserController;
