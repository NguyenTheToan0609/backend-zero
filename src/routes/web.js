const express = require("express");
const {
  getHomePage,
  getABC,
  postCreateUSer,
  getCreateUser,
  getUpdatePage,
} = require("../controllers/homeController");
const router = express.Router();

//khai báo route
router.get("/", getHomePage);

router.get("/create", getCreateUser);
router.post("/create-user", postCreateUSer);
router.get("/update/:id", getUpdatePage);

module.exports = router;
