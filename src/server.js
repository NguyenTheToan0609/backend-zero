const express = require("express");
require("dotenv").config();
const configEngnie = require("./config/viewEngine");
const webRoute = require("./routes/web");
const app = express();
const mysql = require("mysql2");
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
configEngnie(app);

//khai báo route
app.use("/", webRoute);

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "hoidanit",
});

connection.query(
  "SELECT *FROM Users",

  function (err, results, fields) {
    console.log(">>>results", results); // results contains rows returned by server
    console.log(">>>fields", fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
