const express = require("express");
const router = express.Router();
const { getHomePage, getSample, postCreateUser, getCreateUser, getUpdatePage } = require("../controllers/homeController");

//get
router.get("/", getHomePage);
router.get("/abc", getSample);
router.get("/create", getCreateUser);
router.get("/update-user/:id", getUpdatePage);

//post
router.post("/create-user", postCreateUser);


module.exports = router;
