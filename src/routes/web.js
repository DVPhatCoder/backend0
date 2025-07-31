const express = require("express");
const router = express.Router();
const { getHomePage, getSample, postCreateUser, getCreateUser, getUpdatePage, postUpdateUser, postDeleteUser, postHandlerRemoveUser} = require("../controllers/homeController");

//get
router.get("/", getHomePage);
router.get("/abc", getSample);
router.get("/create", getCreateUser);
router.get("/update-user/:id", getUpdatePage);

//post
router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser)
router.post("/delete-user/:id", postDeleteUser)
router.post("/delete-user", postHandlerRemoveUser)


module.exports = router;
