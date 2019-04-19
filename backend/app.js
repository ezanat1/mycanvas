const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRoutes = require("./api/routes/User");
const courseRoutes = require("./api/routes/courseRoutes");
const fileUploads = require("./api/routes/fileUploadRoutes");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const router = require("express").Router();
const { mongo } = require("mongoose");
const Grid = require("gridfs-stream");
const config = require("./config/main").db;
// const controller = require("./controller");
var multer = require("multer");
var GridFsStorage = require("multer-gridfs-storage");
const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};
mongoose.connect(config, options);

app.use(passport.initialize());
require("./api/passports")(passport);
app.use(morgan("dev"));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.use(function(req, res, next) {
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
// app.use("/api", fileUploads);

module.exports = app;
