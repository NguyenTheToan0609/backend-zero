const { json } = require("express");
const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getCreateUser = (req, res) => {
  res.render("create.ejs");
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

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  const user = await getUserById(userId);
  return res.render("edit.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  let email = req.body.Email;
  let name = req.body.Name;
  let city = req.body.City;
  let userId = req.body.userId;

  await updateUserById(email, name, city, userId);
  res.redirect("/");
};

const postDeletePage = async (req, res) => {
  const userId = req.params.id;
  const user = await getUserById(userId);
  return res.render("delete.ejs", { userDelete: user });
};

const postRemoveUser = async (req, res) => {
  let userId = req.body.userId;
  await deleteUserById(userId);
  res.redirect("/");
};

module.exports = {
  getHomePage,
  postCreateUSer,
  getCreateUser,
  getUpdatePage,
  postUpdateUser,
  postDeletePage,
  postRemoveUser,
};
