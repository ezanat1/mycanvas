// const bcrypt = require('bcrypt-nodejs');
// const db = require('../Models')
// const mongooseTypes = require('mongoose').Types;

// function register_request(message, callback) {
//     console.log('Register');
//     db.User.findOne({
//         'Email': message.Email
//     }, (err, user) => {

//         if (err) {
//             console.log("Unable to fetch user details.", err);
//             callback(err, null);
//         } else {

//             if (user) {
//                 if (message.Accounttype === user.Accounttype) {
//                     console.log('Email Already Exists');
//                     callback(null, null);
//                     // } else {
//                     //     user.Accounttype = 3;
//                     // }

//                 } else {

//                     const hash = bcrypt.hashSync(message.password);

//                     const user = new db.User({
//                         _id: new mongoose.Types.ObjectId(),
//                         first_name: req.body.first_name,
//                         last_name: req.body.last_name,
//                         email: req.body.email,
//                         password: hash
//                     });
//                 }

//                 user.save().then((doc) => {

//                     console.log("Registered Succesfully", doc);
//                     callback(null, doc);

//                 }, (err) => {
//                     console.log("Error in registration", err);
//                     callback(err, null);
//                 });

//             }

//         }

//     })
// }

// exports.register_request = register_request;