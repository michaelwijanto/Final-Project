const userRouter = require("express").Router();
const UserController = require("../controllers/userController");

userRouter.post("/register", UserController.postRegister);
userRouter.post("/login", UserController.postLogin);

module.exports = userRouter;
