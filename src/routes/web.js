const express = require("express");
const {
  getHomePage,
  postCreateUSer,
  getCreateUser,
  getUpdatePage,
  postUpdateUser,
  postDeletePage,
  postRemoveUser,
} = require("../controllers/homeController");
const router = express.Router();

//khai báo route
router.get("/", getHomePage);
router.get("/create", getCreateUser);
router.post("/create-user", postCreateUSer);
router.post("/update/:id", getUpdatePage);
router.post("/update-user", postUpdateUser);
router.post("/delete/:id", postDeletePage);
router.post("/delete-user", postRemoveUser);

module.exports = router;
