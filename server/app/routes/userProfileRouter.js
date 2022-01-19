const userProfileRouter = require("express").Router();
const userProfileController = require("../controllers/userProfileController");

userProfileRouter.post("/", userProfileController.createUserProfile);

userProfileRouter.patch("/updateSubs", userProfileController.updateSubscription);

userProfileRouter.patch("/updateLevel", userProfileController.updateLevel);

module.exports = userProfileRouter;
