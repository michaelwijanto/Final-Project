const { UserProfile, Log } = require("../models");
const axios = require("axios");
const { sequelize } = require("../models");

class userProfilesController {
  static async createUserProfile(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const userId = 1;
      const {
        height,
        weight,
        activityLevel,
        UserId = userId,
        phoneNumber,
        subscription,
        gender,
        dateBirth,
        goals,
      } = req.body;

      console.log({
        height,
        weight,
        activityLevel,
        UserId,
        phoneNumber,
        subscription,
        gender,
        dateBirth,
        goals,
      });

      let LevelId = 1;

      await Log.create(
        {
          UserId,
          height,
          weight,
          activityLevel,
          UserId: userId,
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

      if (callBMI.data.health == "Severe Thinness") {
        LevelId = 1;
      } else if (callBMI.data.health == "Mild Thinness") {
        LevelId = 1;
      } else if (callBMI.data.health == "Normal") {
        LevelId = 2;
      } else {
        LevelId = 3;
      }

      const postUserProfile = await UserProfile.create(
        {
          UserId,
          phoneNumber,
          subscription,
          gender,
          dateBirth: birthDate,
          goals,
          LevelId,
        },
        { transaction: t }
      );

      await t.commit();

      // Update Log
      await Log.update(
        {
          LevelId,
        },
        {
          where: {
            UserId: userId,
          },
        }
      );

      res.status(201).json(postUserProfile);
    } catch (err) {
      await t.rollback();
      next(err);
    }
  }

  static async updateSubscription(req, res, next) {
    try {
      const userId = req.user.id;
      const response = await UserProfile.update(
        {
          subscription: "true",
        },
        {
          where: {
            UserId: userId,
          },
        }
      );

      res.status(201).json({message: `Thank you for your subsciption`});
    } catch (err) {
      next(err);
    }
  }

}

module.exports = userProfilesController;
