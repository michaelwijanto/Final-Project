const router = require('express').Router()
const { authenticate } = require('../middlewares/authenticate')

const PaymentController = require('../controllers/PaymentController')

// Route
const userRouter = require("./userRouter");
const userProfileRouter = require("./userProfileRouter");
const contentRouter = require("./contentRouter")
const userContent = require('./UserContentRouter')
const logRouter = require('./LogRouter')
const payment = require('./PaymentRouter')

router.use("/api/users", userRouter);
router.use(
  "/api/user-profiles",
  authenticate,
  userProfileRouter
);
router.use(
  "/api/contents",
  authenticate,
  contentRouter
);
router.use(
  "/api/user-contents",
  authenticate,
  userContent
);
router.use(
  "/api/log-history",
  authenticate,
  logRouter
);
router.use(
  '/api/payment',
  authenticate,
  payment
)
router.post('/api/payment/transaction-result', PaymentController.updatePayment);


module.exports = router