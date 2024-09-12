const express = require("express");
const {
  getHomePage,
  postCreateUSer,
  getCreateUser,
  getUpdatePage,
  postUpdateUser,
} = require("../controllers/homeController");
const router = express.Router();

//khai báo route
router.get("/", getHomePage);

router.get("/create", getCreateUser);
router.post("/create-user", postCreateUSer);
router.post("/update-user", postUpdateUser);
router.get("/update/:id", getUpdatePage);

module.exports = router;
