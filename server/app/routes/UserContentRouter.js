const userContent = require('express').Router()
const UserContentsController = require('../controllers/UserContentsController')

userContent.post('/', UserContentsController.postUserContent)
userContent.get('/', UserContentsController.getUserContent)
userContent.get('/:id', UserContentsController.getUserContentDetail)
userContent.put('/:id', UserContentsController.putUserContent)
userContent.delete('/:id', UserContentsController.delUserContent)

module.exports = userContent