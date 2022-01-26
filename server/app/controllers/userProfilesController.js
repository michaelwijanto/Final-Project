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

      console.log({
        height,
        weight,
        activityLevel,
        phoneNumber,
        gender,
        dateBirth,
        goals,
        UserId,
      });

      if (
        !height ||
        !weight ||
        !activityLevel ||
        !phoneNumber ||
        !gender ||
        !dateBirth ||
        !goals
      )
        throw { name: "Bad_Request" };

      let LevelId = 1;

      let date = dateBirth.split("-");
      const day = date[0];
      const month = date[1];
      const year = date[2];

      let today = new Date();
      let birthDate = new Date(year, month, day);
      let age = today.getFullYear() - birthDate.getFullYear();

      console.log({ age });
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
      console.log({ callBMI });
      if (
        callBMI.data.data.health == "Severe Thinness" ||
        callBMI.data.data.health == "Moderate Thinness" ||
        callBMI.data.data.health == "Mild Thinness"
      ) {
        LevelId = 1;
      } else if (
        callBMI.data.data.health == "Normal" ||
        callBMI.data.data.health == "Healthy weight"
      ) {
        LevelId = 2;
      } else {
        LevelId = 3;
      }

      console.log({
        UserId,
        phoneNumber,
        subscription: "false",
        gender,
        dateBirth: birthDate,
        goals,
        LevelId,
        bmi: callBMI.data.data.bmi,
        health: callBMI.data.data.health,
        healthy_bmi_range: callBMI.data.data.healthy_bmi_range,
      });
      const postUserProfile = await UserProfile.create(
        {
          UserId,
          phoneNumber,
          subscription: "false",
          gender,
          dateBirth: birthDate,
          goals,
          LevelId,
          bmi: callBMI.data.data.bmi,
          health: callBMI.data.data.health,
          healthy_bmi_range: callBMI.data.data.healthy_bmi_range,
        },
        { transaction: t }
      );

      // Update Log
      await Log.create(
        {
          height,
          weight,
          bmi: postUserProfile.bmi,
          health: postUserProfile.health,
          UserId,
          LevelId,
        },
        { transaction: t }
      );

      await User.update(
        {
          isRegister: "true",
        },
        {
          where: {
            id: UserId,
          },
        },
        { transaction: t, returning: true }
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

  //PAYMENT
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
