const userRouter = require("express").Router();
const UserController = require("../controllers/userController");
const authenticate = require("../middlewares/authenticate");

userRouter.post("/register", UserController.postRegister);
userRouter.post("/login", UserController.postLogin);
userRouter.use(authenticate);
module.exports = userRouter;
