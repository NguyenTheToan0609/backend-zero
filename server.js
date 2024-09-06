const express = require("express");
const app = express();
const port = 8082;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("Check abc!");
});

app.get("/test", (req, res) => {
  res.send("<h1>HELLO WORLD NODEJS </h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
