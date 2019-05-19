const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();

mongoose
  .connect(
    "mongodb+srv://Taranis:SwmjtAeKukfsfrhV@cluster0-fyaau.mongodb.net/test?retryWrites=true"
>>>>>>> a4980156e6c1ec8cbbeaed15a23eefc1fced8aff
  )
  .then(() => {
    console.log("Connected to database!");
  })

  .catch(() => {
    console.log("Connection failed!");
=======
  .catch((err) => {
    console.log("Connection failed! "+err);
>>>>>>> a4980156e6c1ec8cbbeaed15a23eefc1fced8aff
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);
module.exports = app;
