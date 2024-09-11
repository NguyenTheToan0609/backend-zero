const express = require("express");
const {
  getHomePage,
  getABC,
  postCreateUSer,
  getCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

//khai báo route
router.get("/", getHomePage);

router.get("/abc", getABC);

router.get("/create", getCreateUser);

router.post("/create-user", postCreateUSer);

module.exports = router;
