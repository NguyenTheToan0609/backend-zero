const express = require("express");
const router = express.Router();

//khai báo route
router.get("/thetoan", (req, res) => {
  res.render("sample.ejs");
});

// router.get("/test", (req, res) => {
//   res.render("sample.ejs");
// });

module.exports = router;
