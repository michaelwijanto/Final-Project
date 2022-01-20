const router = require('express').Router()
const { authenticate } = require('../middlewares/authenticate')

// Route
const userRouter = require("./userRouter");
const userProfileRouter = require("./userProfileRouter");
const contentRouter = require("./contentRouter")
const userContent = require('./UserContentRouter')

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
)

module.exports = router