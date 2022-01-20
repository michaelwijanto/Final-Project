const { Content, Level} = require('../models/index')


const getContents = async (req, res, next) => {
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
        throw { name: "Content_Not_Found"}
    }
        res.status(200).json(result)
        
    } catch (err) {
        next(err)
    }
}

const addContetnts = async (req,res,next) => {
    try {
        const {youtubeUrl,description,title,LevelId,likes  } = req.body
        const result = await Content.create({
            youtubeUrl,
            description,
            title,
            LevelId,
            likes: 0
        })

        res.status(201).json(result)
    } catch (err) {
        next(err)
    }
}

const editContents = async (req,res,next) => {
    try {
        
        const { id } = req.params
        const {
            youtubeUrl,
            description,
            title,
            LevelId,
            likes
        } = req.body
       
        const findContent = await Content.findByPk(id)
        if (!findContent) {
            throw { name: "Content_Not_Found"}
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
            throw { name: "Content_Not_Found"}
        } 
        const result = await Content.destroy({
            where:{id}
        })
        res.status(200).json({msg:`id${findContent.id} success deleted`})
   } catch (error) {
       next(error)
     
   }
}


const getStatus = async (req,res,next) => {
    try {
        
        const { id } = req.params
        const { statusLike } = req.body
       
        const findContent = await Content.findByPk(id)
        
        if (!findContent) {
            throw { name: "Content_Not_Found"}
        } 
       
        const result = await Content.update({
            statusLike
        },
        {
           where: {id},
           returning: true
            
        })
        if (result[1][0].statusLike == 'not like') {
            result[1][0].likes --
            const result1 = await Content.update({
                likes: result[1][0].likes
            },
            {
               where: {id},
               returning: true
                
            })
        }else{
            result[1][0].likes ++
            const result1 = await Content.update({
                likes: result[1][0].likes
            },
            {
               where: {id},
               returning: true
                
            })
        }
        console.log(result[1][0].statusLike, 'ini woy');
            res.status(201).json(result[1][0])       
    } catch (err) {
        next(err)
 }

}

module.exports = {getContents,addContetnts,editContents,deleteContents,getContentsId,getStatus}

