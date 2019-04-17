// const bcrypt = require('bcrypt-nodejs');
// const db = require('../Models')

// function login_request(msg, callback) {
//     db.userSchema.findOne({
//         'email': msg.Email
//     }, (err, user) => {

//         if (err) {
//             console.log("Cannot finde email", err);
//             callback(err, null);
//         } else {

//             if (user) {
//                 if (!bcrypt.compareSync(msg.password, user.password)) {
//                     console.log('Invalid Password!');
//                     callback(null, null);
//                 } else {

//                     callback(null, user);
//                 }
//             } else {
//                 callback(null, null);
//             }


//         }

//     });
// }

// exports.login_request = login_request;