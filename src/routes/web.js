const express = require("express");
const { getHomePage, getABC } = require("../controllers/homeController");
const router = express.Router();

//khai báo route
router.get("/", getHomePage);

router.get("/abc", getABC);

// router.get("/test", (req, res) => {
//   res.render("sample.ejs");
// });

module.exports = router;
