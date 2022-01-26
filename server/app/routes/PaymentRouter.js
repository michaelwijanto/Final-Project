const payment = require('express').Router()

const PaymentController = require('../controllers/PaymentController')

payment.get('/transaction-token', PaymentController.transactionToken)
payment.put('/success', PaymentController.updatePayment);

module.exports = payment