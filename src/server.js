const express = require("express");
const path = require("path");
const app = express();
const port = 8082;

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("Check abc!");
});

app.get("/test", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
