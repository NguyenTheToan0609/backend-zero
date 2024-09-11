const { json } = require("express");
const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getABC = (req, res) => {
  let users = [];
  connection.query("SELECT *FROM Users", function (err, results, fields) {
    users = results;
    console.log(">>>results", results); // results contains rows returned by server
    res.send(JSON.stringify(users));
  });
};

const postCreateUSer = (req, res) => {
  let email = req.body.Email;
  let name = req.body.Name;
  let city = req.body.City;

  connection.query(
    `INSERT INTO Users (email, name, city)
    VALUES (?,?,?);`,
    [email, name, city],
    function (err, results) {
      return res.send("Create New User Success");
    }
  );
};

module.exports = {
  getHomePage,
  getABC,
  postCreateUSer,
};
