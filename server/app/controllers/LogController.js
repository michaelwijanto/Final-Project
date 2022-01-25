const { Log, UserProfile } = require("../models/index");
const axios = require("axios")

class LogController {
  static async postLog(req, res, next) {
    try {
      const { height, weight } = req.body;
      const { id: UserId } = req.user;
      const profile = await UserProfile.findOne({where: {UserId}})
      let today = new Date();
      let age = today.getFullYear() - profile.dateBirth.getFullYear();
      console.log({POSTLOG: {height, weight, UserId, age}});

      const {data: callBMI} = await axios({
        method: "GET",
        url: "https://fitness-calculator.p.rapidapi.com/bmi",
        params: { age, weight, height },
        headers: {
          "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "8a2cc8bca1mshf123ad465cdd47bp1cc9a5jsn305fd03044ca",
        },
      });
      console.log(callBMI.data.bmi, "<<<<<<<<<<");
      const updateProfile = await UserProfile.update({
        bmi: callBMI.data.bmi,
        health: callBMI.data.health,
        healthy_bmi_range: callBMI.data.healthy_bmi_range
      }, {
        where: {UserId}
      })
      console.log(updateProfile, "<<<<<<<<<<<<");
      const log = await Log.create({
        height,
        weight,
        UserId,
        LevelId: profile.LevelId,
        bmi: callBMI.data.bmi,
        health: callBMI.data.health,
      });
      res.status(201).json(log);
    } catch (error) {
      next(error);
    }
  }

  static async getLog(req, res, next) {
    try {
      const { id: UserId } = req.user;

      const logData = await Log.findAll({
        where: {
          UserId,
        },
      });
      console.log(UserId, logData);
      res.status(200).json(logData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = LogController;
