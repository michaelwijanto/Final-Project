const userRouter = require("express").Router();
const UserController = require("../controllers/userController");
const { authenticate } = require("../middlewares/authenticate");

userRouter.post("/register", UserController.postRegister);
userRouter.post("/login", UserController.postLogin);
userRouter.patch("/:id", UserController.patchUser);
// userRouter.use(authenticate);
userRouter.get(
  "/", 
  authenticate,
  UserController.getUsers
);

module.exports = userRouter;
