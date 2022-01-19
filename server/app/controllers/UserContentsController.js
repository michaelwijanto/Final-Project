const {
  UserContent,
  User,
  Content,
  UserProfile
} = require('../models')

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
      const { ContentId } = req.body
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
      
      if (lastContentId !== findContent.id) {
        // Update content
        const updateContent = await UserContent.update({
          status : 'finish'
        }, {
          where: {
            id
          }
        })
      }

      // compare content base User content

      // if total User Content === content, update levelId Users Profile
      



    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserContentsController