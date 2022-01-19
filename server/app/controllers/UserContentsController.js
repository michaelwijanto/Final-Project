const {
  UserContent,
  User,
  Content,
  UserProfile
} = require('../models')

const userProfilesController = require("./userProfilesController")

class UserContentsController{
  static async postUserContent(req, res, next) {
    try {
      const id = 1
      const {
        ContentId,
        UserId = id,
        isLike = false,
        status = 'started'
      } = req.body

      const userContent = await UserContent.create({
        UserId,
        ContentId,
        isLike,
        status
      })

      res.status(201).json(userContent)
    } catch (error) {
      next(error)
    }
  }

  static async getUserContent(req, res, next) {
    try {
      const userContent = await UserContent.findAll({
        include: [{
          model: User,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        }, 
        {
          model: Content,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        }],
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      })

      res.status(200).json(userContent)
    } catch (error) {
      next(error)
    }
  }

  static async getUserContentDetail(req, res, next) {
    try {
      const { id } = req.params
      const userContentDetail = await UserContent.findOne({
        include: [{
          model: User,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        }, 
        {
          model: Content,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        }],
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      }, 
      {
        where: {
          id
        }
      })

      res.status(200).json(userContentDetail)
    } catch (error) {
      next(error)
    }
  }

  static async putUserContent(req, res, next) {
    try {
      const { id: ContentId } = req.params
      // const { id: UserID } = req.user
      const UserId = 1

      const findContent = await UserContent.findOne({
        where: {
          ContentId
        }
      })
      if (!findContent) throw {name: `Content_Not_Found` }

      // Ambil Level
      const levelUser = await UserProfile.findOne({
        where: {
          UserId
        }
      })
     
      // Ambil Total Content Base current user level
      const LevelId = levelUser.LevelId
      const content = await Content.findAll({
        where: {
          LevelId
        }
      })
      const lastContentId = content[content.length-1].id

      let message;
      let code;

      // compare content base User content
      if (lastContentId !== findContent.id) {
        // Update content
        await UserContent.update({
          status : 'finish'
        }, {
          where: {
            ContentId
          }
        })
        code = 200;
        message = `Congrats! You finished! Go to the next exercise..`;
      } else {
        // Update Status User Content
        await UserContent.update({
          status : 'finish'
        }, {
          where: {
            ContentId
          }
        })

        // Find Level
        const findLevel = await UserProfile.findOne({
          where: {
            UserId
          },
        });

        // Condition
        if (findLevel.LevelId === 3) {
          code = 200;
          message = `Congrats! You reach maximum Level!`;
        } else {
          if (findLevel.LevelId === 2) {
            await UserProfile.update(
              {
                LevelId: 3,
              },
              {
                where: {
                  UserId,
                },
              }
            );
            code = 200;
            message = `Congrats, You did It! You level up to Hard Level!`;
          } else {
            await UserProfile.update(
              {
                LevelId: 2,
              },
              {
                where: {
                  UserId,
                },
              }
            );
            code = 200;
            message = `Congrats, You did It! You level up to Medium Level!`;
          }
        }
      }
         
      res.status(code).json({ message });
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserContentsController