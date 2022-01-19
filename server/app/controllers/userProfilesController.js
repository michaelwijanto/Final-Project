const { UserProfile, Log } = require('../models')
const axios = require('axios')
const { sequelize } = require("../models");

class userProfileController {
  static async createUserProfile(req, res, next) {
    const t = await sequelize.transaction();
    try {
        const userId = req.user.id;
        const {
          height,
          weight,
          activityLevel,
          UserId = userId,
          phoneNumber,
          subscription,
          gender,
          dateBirth,
          goals
        } = req.body

        
        const postLog = await Log.create({
          UserId,
          height,
          weight,
          activityLevel,
          UserId = userId,
          LevelId = 1,
        },
        { transaction: t })

        let today = new Date();
        let birthDate = new Date(dateBirth);
        let age = today.getFullYear() - birthDate.getFullYear();

        let callBMI = await axios({
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/bmi',
            params: {age, weight, height},
            headers: {
              'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
              'x-rapidapi-key': '8a2cc8bca1mshf123ad465cdd47bp1cc9a5jsn305fd03044ca'
            }
          })

          if(callBMI.health == "Severe Thinness") {
              LevelId = 1
          } else if (callBMI.health == "Mild Thinness") {
              LevelId = 1
          } else if (callBMI.health == "Normal") {
            LevelId = 2
          } else {
              LevelId = 3
          }

        const postUserProfile = await UserProfile.create({
        UserId,
        phoneNumber,
        subscription,
        gender,
        dateBirth,
        goals,
        LevelId,
        },
        {transaction: t})
        
        await t.commit()

        // Update Log
        await Log.update({
            LevelId
        }, {
            where : {
                UserId : userId
            }
        })

        res.status(201).json(postUserProfile)
    } catch (err) {
        await t.rollback();
        next(err)
    }
  }

  static async updateSubscription(req, res, next) {
      try {
          
      } catch (err) {
          next(err)
      }
  }

  static async updateLevel(req, res, next) {
      try {
          
      } catch (err) {
          next(err)
      }
  }
}

module.exports = userProfileController