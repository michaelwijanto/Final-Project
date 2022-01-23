const log = require('express').Router()

// Controller Log
const LogController = require('../controllers/LogController')

log.get('/', LogController.getLog)
log.post('/', LogController.postLog)

module.exports = log