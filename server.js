//Imports
require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

//Global variables
const port = process.env.PORT || 5000;
const staticDir = process.env.PRODUCTION
  ? path.resolve("./client/build")
  : path.resolve("./client/public");
//Server set-up
app.use(express.static(staticDir));
app.use(
  express.urlencoded({
    extended: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
);

//Port setup
app.listen(port, () => {
  console.log("listening on port", port);
});


app.get("*", (req, res) => {
  res.sendFile(path.resolve(staticDir + "/index.html"));
});
