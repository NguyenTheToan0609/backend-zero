const { json } = require("express");
const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getCreateUser = (req, res) => {
  res.render("create.ejs");
};

const getABC = async (req, res) => {
  const [results, fields] = await connection.query("SELECT *FROM Users");
  res.send(JSON.stringify(results));
};

const postCreateUSer = async (req, res) => {
  let email = req.body.Email;
  let name = req.body.Name;
  let city = req.body.City;

  let [results, fields] = await connection.execute(
    `INSERT INTO Users (email, name, city)
    VALUES (?,?,?);`,
    [email, name, city]
  );
  res.send("Create New User Success");
};

module.exports = {
  getHomePage,
  getABC,
  postCreateUSer,
  getCreateUser,
};
