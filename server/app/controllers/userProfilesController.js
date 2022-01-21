const { User, UserProfile, Log, Level } = require("../models");
const axios = require("axios");
const { sequelize } = require("../models");

class userProfilesController {
  static async createUserProfile(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { id: UserId } = req.user;
      const {
        height,
        weight,
        activityLevel,
        phoneNumber,
        gender,
        dateBirth,
        goals,
      } = req.body;

      let LevelId = 1;

      await Log.create(
        {
          height,
          weight,
          activityLevel,
          UserId,
          LevelId,
        },
        { transaction: t }
      );

      let date = dateBirth.split("-");
      const day = date[0];
      const month = date[1];
      const year = date[2];

      let today = new Date();
      let birthDate = new Date(year, month, day);
      let age = today.getFullYear() - birthDate.getFullYear();

      let callBMI = await axios({
        method: "GET",
        url: "https://fitness-calculator.p.rapidapi.com/bmi",
        params: { age, weight, height },
        headers: {
          "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "8a2cc8bca1mshf123ad465cdd47bp1cc9a5jsn305fd03044ca",
        },
      });

      if (callBMI.data.data.health == "Severe Thinness") {
        LevelId = 1;
      } else if (callBMI.data.data.health == "Mild Thinness") {
        LevelId = 1;
      } else if (callBMI.data.data.health == "Normal") {
        LevelId = 2;
      } else {
        LevelId = 3;
      }

      await t.commit();

      // Update Log
      await Log.update(
        {
          LevelId,
        },
        {
          where: {
            UserId,
          },
        }
      );

      const postUserProfile = await UserProfile.create(
        {
          UserId,
          phoneNumber,
          subscription: "false",
          gender,
          dateBirth: birthDate,
          goals,
          LevelId,
        },
        { transaction: t }
      );

      await t.commit();

      const levelUser = await Level.findOne({
        where: {
          id: LevelId,
        },
      });

      res.status(201).json({
        message: `Your health status is ${callBMI.data.data.health}, so you will be in the ${levelUser.name} Level!`,
      });
    } catch (err) {
      await t.rollback();
      next(err);
    }
  }

  static async updateSubscription(req, res, next) {
    try {
      const { id: UserId } = req.user;
      await UserProfile.update(
        {
          subscription: "true",
        },
        {
          where: {
            UserId,
          },
        }
      );

      res.status(200).json({
        message: `Thank you for your subsciption`,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getUserProfile(req, res, next) {
    try {
      const UserId = req.user.id;

      const response = await UserProfile.findOne({
        where: {
          UserId,
        },
        include: [
          {
            model: Level,
          },
          {
            model: User,
          },
        ],
      });

      const newestLog = await Log.findAll({
        where: {
          UserId,
        },
        order: [["updatedAt", "DESC"]],
      });

      res.status(200).json({
        UserProfile: response,
        Log: newestLog[0],
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = userProfilesController;
