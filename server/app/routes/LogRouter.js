const log = require('express').Router()

// Controller Log
const LogController = require('../controllers/LogController')

log.post('/', LogController.postLog)

module.exports = log