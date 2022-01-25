const userContent = require("express").Router();
const UserContentsController = require("../controllers/UserContentsController");
const { authentication } = require("../middlewares/authenticate");

userContent.post("/", UserContentsController.postUserContent);
userContent.get("/", UserContentsController.getUserContent);
userContent.get("/:id", UserContentsController.getUserContentDetail);
userContent.put("/:id", UserContentsController.putUserContent);
userContent.patch("/:id", UserContentsController.patchLike);

module.exports = userContent;
