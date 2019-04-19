const mongoose = require("mongoose");
//Course Schema
//Faculty can add courses to the DB
const courseInfo = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  courseID: { type: String, required: true },
  Annoucements: { type: Array},
  files: String,
  taughtBy: { type: String }
});
module.exports = mongoose.model("courseInfo", courseInfo 8);
