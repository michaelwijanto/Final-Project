const userRouter = require("express").Router();
const UserController = require("../controllers/userController");
const { authenticate } = require("../middlewares/authenticate");

userRouter.post("/register", UserController.postRegister);
userRouter.post("/login", UserController.postLogin);
userRouter.patch("/:id", UserController.patchUser);
userRouter.patch("/activate/:pin", UserController.patchActivatePin);
userRouter.get("/coach", UserController.getCoaches);
userRouter.get("/coach/:id", UserController.getCoachDetail);
userRouter.get("/level", UserController.getLevels);

userRouter.get("/", authenticate, UserController.getUsers);

module.exports = userRouter;
