const mongoose = require("mongoose");
//Course Schema
//Faculty can add courses to the DB
const assignments = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  courseID: { type: String, required: true },
  name: { type: String },
  description: { type: String }
});
module.exports = mongoose.model("Assignments", assignments);
