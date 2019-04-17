const mongoose = require("mongoose");
//Course Schema
//Faculty can add courses to the DB
const courseSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  courseID: { type: String, required: true },
  courseName: { type: String, required: true },
  courseDept: { type: String, required: true },
  courseDescription: { type: String, required: true },
  courseRoom: { type: String, required: true },
  waitListCap: { type: Number, required: true },
  courseTeam: { type: String },
  taughtBy:{ type: String }
});
module.exports = mongoose.model("Course", courseSchema);