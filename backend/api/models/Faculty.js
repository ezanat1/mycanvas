const mongoose = require("mongoose");

const facultySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: {
    type: String,
    required: true
  },
  password: { type: String, required: true },
  phone_number: String,
  about_me: String,
  city: String,
  country: String,
  compamy: String,
  school: String,
  hometown: String,
  languages: String,
  gender: String,
  profile_image: String
});
module.exports = mongoose.model("Faculty", facultySchema);
