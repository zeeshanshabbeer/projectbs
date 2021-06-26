const express = require("express");
const {
  authController,
  getUserProfile,
  registerUser,
} = require("../controlers/UserController");
const {protect} =require("../middleware/authmiddleware");
const router = express.Router();

//post auth
router.post("/login", authController);

//get user profile route
router.route("/profile").get(protect,getUserProfile);
//user registration
router.route("/").post(registerUser);

module.exports = router;
