const express = require("express");
require("dotenv").config();
const configEngnie = require("./config/viewEngine");
const webRoute = require("./routes/web");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
configEngnie(app);

//khai báo route
app.use("/", webRoute);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
