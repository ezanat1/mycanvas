const mongoose = require("mongoose");
//Course Schema
//Faculty can add courses to the DB
const submission = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  studentID: { type: String },
  courseID: { type: String, required: true },
  assignmentID: { type: String },
  grade: { type: String }
});
module.exports = mongoose.model("Submission", submission);
