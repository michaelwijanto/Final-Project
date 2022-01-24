const userProfileRouter = require("express").Router();
const userProfilesController = require("../controllers/userProfilesController");

userProfileRouter.get("/", userProfilesController.getUserProfile);
userProfileRouter.post("/", userProfilesController.createUserProfile);
userProfileRouter.patch("/updateSubs", userProfilesController.updateSubscription);

module.exports = userProfileRouter;
