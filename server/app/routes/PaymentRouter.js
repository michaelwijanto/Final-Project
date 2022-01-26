const payment = require('express').Router()

const PaymentController = require('../controllers/PaymentController')

payment.get('/transaction-token', PaymentController.transactionToken)

module.exports = payment