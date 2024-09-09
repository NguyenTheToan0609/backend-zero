const { json } = require("express");
const connection = require("../config/database");

const getHomePage = (req, res) => {
  res.render("sample.ejs");
};

const getABC = (req, res) => {
  let users = [];
  connection.query("SELECT *FROM Users", function (err, results, fields) {
    users = results;
    console.log(">>>results", results); // results contains rows returned by server
    res.send(JSON.stringify(users));
  });
};

module.exports = {
  getHomePage,
  getABC,
};
