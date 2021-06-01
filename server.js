//Imports
require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

//Global variables
const port = process.env.PORT || 5000;
const staticDir = path.resolve(__dirname + "/build")
//Server set-up
app.use(express.static(staticDir));

//Port setup
app.listen(port, () => {
  console.log("listening on port", port);
});


app.get("*", (req, res) => {
  res.sendFile(path.resolve(staticDir + "/index.html"));
});
