const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRoutes = require("./api/routes/User");
const courseRoutes = require("./api/routes/courseRoutes");
const fileUploads = require("./api/routes/fileUploadRoutes");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");

const MongoClient = require("mongodb").MongoClient;
const config = require("./config/main").mongoURI;
var multer = require("multer");
var GridFsStorage = require("multer-gridfs-storage");
var Grid = require("gridfs-stream");

mongoose
  .connect(config, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(err => {
    console.log(err);
    console.log("MongoDB Not Connected");
  });

app.use(passport.initialize());
require("./api/passports")(passport);
app.use(morgan("dev"));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

/** Seting up server to accept cross-origin browser requests */
app.use(function (req, res, next) {
  //allow cross origin requests
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, PUT, OPTIONS, DELETE, GET"
  );
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
//
//Middleware for User routes
app.use("/users", userRoutes);
//Middleware for Course routes
app.use("/course", courseRoutes);

//Middleware for Course routes
// app.use("/uploads", fileUploads);
// app.route("/course").get(courseRoutes.getCourse);
// app.route("/addCourse").post(courseRoutes.addCourse);

module.exports = app;