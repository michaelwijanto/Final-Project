const userProfileRouter = require("express").Router();
const userProfilesController = require("../controllers/userProfilesController");

userProfileRouter.get("/", userProfilesController.getUserProfile);
userProfileRouter.post("/", userProfilesController.createUserProfile);
userProfileRouter.get("/", userProfilesController.getUserProfile);
userProfileRouter.patch(
  "/updateSubs",
  userProfilesController.updateSubscription
);
userProfileRouter.post("/payment-sheet", userProfilesController.paymentStripe);
userProfileRouter.post("/stripe", userProfilesController.stripe);


module.exports = userProfileRouter;
