const { Content,Level} = require('../models/index')


const getContents = async (req,res,next) => {
    try {
        const result = await Content.findAll({
            include: [
                {
                    model: Level,
                    atttributes: [`name`]
                }
            ]
        })

        res.status(200).json(result)
        
    } catch (error) {
        next(err)
    }
}

const getContentsId = async (req,res,next) => {
    try {
        const { id } = req.params
        const result = await Content.findByPk(id,{
            include: [
                {
                    model: Level,
                    atttributes: [`name`]
                }
            ]
        }
    )
    if (!result) {
        throw { name: "Content Not Found"}
    }
        res.status(200).json(result)
        
    } catch (err) {
        next(err)
    }
}

const addContetnts = async (req,res,next) => {
    try {
        const {youtubeUrl,description,title,LevelId,likes  } = req.body
        const result = await Content.create({youtubeUrl,description,title,LevelId,likes: 0})

        res.status(201).json(result)

    } catch (err) {
        next(err)
    }
}

const editContents = async (req,res,next) => {
    try {
        
        const { id } = req.params
        const {youtubeUrl,description,title,LevelId,likes } = req.body
       
        const findContent = await Content.findByPk(id)
        if (!findContent) {
            throw { name: "Content Not Found"}
        } 
      
        const result = await Content.update({
            youtubeUrl,description,title,LevelId,likes:0
        },
        {
            where: {id},
            returning: true
        })
    
        res.status(201).json(result[1][0])
    } catch (err) {
        next(err)
    }
}

const deleteContents= async (req,res,next) => {
    try {
        const {id} = req.params
        const findContent= await Content.findByPk(id)
        if (!findContent) {
            throw { name: "Content Not Found"}
        } 
        const result = await Content.destroy({
            where:{id}
        })
        res.status(200).json({msg:`id${findContent.id} success deleted`})
   } catch (error) {
       next(error)
       console.log(error.name)
       res.status(400).json(error.name)
   }
}

module.exports = {getContents,addContetnts,editContents,deleteContents,getContentsId}