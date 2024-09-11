const express = require("express");
const {
  getHomePage,
  getABC,
  postCreateUSer,
} = require("../controllers/homeController");
const router = express.Router();

//khai báo route
router.get("/", getHomePage);

router.get("/abc", getABC);

router.post("/create-user", postCreateUSer);

module.exports = router;
