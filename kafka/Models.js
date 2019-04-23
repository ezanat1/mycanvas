// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// const config = require('../backend/config/main')
// mongoose.connect(config, {
//     useNewUrlParser: true
// });
// //Course Schema
// //Faculty can add courses to the DB
// const courseSchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     courseID: {
//         type: String,
//         required: true
//     },
//     courseName: {
//         type: String,
//         required: true
//     },
//     courseDept: {
//         type: String,
//         required: true
//     },
//     courseDescription: {
//         type: String,
//         required: true
//     },
//     courseRoom: {
//         type: String,
//         required: true
//     },
//     waitListCap: {
//         type: Number,
//         required: true
//     },
//     courseTeam: {
//         type: String
//     },
//     taughtBy: {
//         type: String
//     }
// });
// module.exports = mongoose.model("Course", courseSchema);

// const facultySchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     first_name: {
//         type: String,
//         required: true
//     },
//     last_name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     phone_number: String,
//     about_me: String,
//     city: String,
//     country: String,
//     compamy: String,
//     school: String,
//     hometown: String,
//     languages: String,
//     gender: String,
//     profile_image: String
// });
// module.exports = mongoose.model("Faculty", facultySchema);

// const userSchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     first_name: {
//         type: String,
//         required: true
//     },
//     last_name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     phone_number: String,
//     about_me: String,
//     city: String,
//     country: String,
//     compamy: String,
//     school: String,
//     hometown: String,
//     languages: String,
//     gender: String,
//     profile_image: String
// });
// module.exports = mongoose.model("User", userSchema);
