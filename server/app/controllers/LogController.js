const { Log, UserProfile } = require("../models/index");

class LogController {
  static async postLog(req, res, next) {
    try {
      const { height, weight } = req.body;
      const { id: UserId } = req.user;
      console.log({height, weight, UserId});
      const beforeLog = await Log.findOne({
        where: {
          UserId,
        },
        order: [["id", "DESC"]],
        limit: 1
      });

      console.log(beforeLog);
      const log = await Log.create({
        height,
        weight,
        activityLevel: beforeLog.activityLevel,
        UserId,
        LevelId: beforeLog.LevelId,
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
