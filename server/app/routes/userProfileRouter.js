const userProfileRouter = require("express").Router();
const userProfilesController = require("../controllers/userProfilesController");

userProfileRouter.post("/", userProfilesController.createUserProfile);

userProfileRouter.patch("/updateSubs", userProfilesController.updateSubscription);

userProfileRouter.patch("/updateLevel", userProfilesController.updateLevel);

module.exports = userProfileRouter;
