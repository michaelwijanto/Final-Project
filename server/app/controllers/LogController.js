const { Log, UserProfile } = require('../models/index')

class LogController {
  static async postLog (req, res, next) {
    try {
      const {
        height,
        weight,
        activityLevel
      } = req.body
      const {
        id: UserId,
      } = req.user

      const userProfile = await UserProfile.findOne({
        where: {
          UserId
        }
      })
      
      const log = await Log.create({
        height,
        weight,
        activityLevel,
        UserId,
        LevelId: userProfile.LevelId,
      })
      res.status(201).json(log)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = LogController