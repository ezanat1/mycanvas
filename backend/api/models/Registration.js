const mongoose = require("mongoose");
//Course Schema
//Faculty can add courses to the DB
const registrationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  courseID: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  studentID:{ type: mongoose.Schema.Types.ObjectId, ref: "User" }

});

module.exports = mongoose.model("Registration", registrationSchema);