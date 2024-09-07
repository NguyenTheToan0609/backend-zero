const path = require("path");
const express = require("express");

const configEngine = (app) => {
  //config template engine
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");

  //static files
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configEngine;
