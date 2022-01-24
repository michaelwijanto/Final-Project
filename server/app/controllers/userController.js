const { compare } = require("../helpers/bcrypt");
const { User, Coach, Level } = require("../models/index");
const { sign } = require("../helpers/jwt");
const nodemailer = require("nodemailer");

class UserController {
  static async postRegister(req, res, next) {
    const { email, password, fullName } = req.body;
    console.log(email);
    let temp = "";
    for (let i = 0; i < 6; i++) {
      temp += Math.floor(Math.random() * 10);
    }

    let newUser = {
      email,
      password,
      fullName,
      role: "user",
      isRegister: "false",
      pin: temp,
      isActivated: "false",
    };

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tokomovieh8@gmail.com",
        pass: "ToKoMovieH8!",
      },
    });

    let notif = {
      from: "tokomovieh8@gmail.com", // sender address
      to: email, // list of receivers
      subject: "Activate your email", // Subject line
      text: `Welcome to Active8! We are glad to have you be our member.
    But before you can do that, you need to activate your account to use our service.
    Please enter this pin ${temp} on the prompted screen on your phone
    Hope to see you soon!
    
    Active8`,
    };

    transporter.sendMail(notif, (err, data) => {});

    try {
      let created = await User.create(newUser);
      res.status(201).json({
        id: created.id,
        fullName: created.fullName,
        email: created.email,
        role: created.role,
        isRegister: created.isRegister,
        pin: created.pin,
        isActivated: created.isActivated,
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
      if (user.isActivated === "false") throw { name: "PlsActivate" };

      if (user.isActivated === "false") throw { name: "PlsActivate" };

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
      let { pin: inputtedPin } = req.body;
      // const { id } = req.params;
      const findUser = await User.findOne({
        where: {
          pin: inputtedPin,
        },
      });
      if (!findUser) throw { name: "USER_NOT_FOUND" };

      // if (findUser.pin.split(";")[1] === inputtedPin) {
      await User.update(
        {
          isActivated: "true",
          pin: "used",
        },
        {
          where: {
            pin: inputtedPin,
          },
          returning: true,
        }
      );
      // }
      res.status(200).json({ message: "Your account has been activated" });
    } catch (err) {
      next(err);
    }
  }

  static async getCoaches(req, res, next) {
    try {
      const result = await Coach.findAll();

      res.status(200).json(result);
    } catch (err) {
      next(err)
    }
  }

  static async getLevels(req, res, next) {
    try {
      const result = await Level.findAll();

      res.status(200).json(result);
    } catch (err) {
      next(err)
    }
  }

  static async getCoachDetail(req, res, next) {
    try {
      const { id } = req.params;
      const result = await Coach.findOne({
        where: { id },
      });

      res.status(200).json(result);
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController;
