// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const mongoose = require("mongoose");
// const passport = require("passport");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const checkAuth=require('../middleware/checkauth')
// //Get Users-Either students or faculty
// router.get("/", (req, res, next) => {
//   User.find()
//     .select("first_name last_name email _id")
//     .exec()
//     .then(users => {
//       const response = {
//         count: users.length,
//         userInfo: users.map(user => {
//           return {
//             first_name: user.first_name,
//             last_name: user.last_name,
//             email: user.email,
//             _id: user._id,
//             request: {
//               type: "GET",
//               url: "http://localhost:5000/users/" + user._id
//             }
//           };
//         })
//       };
//       res.status(200).json(response);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });

// //Post Users-Either students or faculty
// router.post("/register", (req, res, next) => {
//   User.find({ email: req.body.email })
//     .exec()
//     .then(user => {
//       if (user.length >= 1) {
//         return res.status(409).json({
//           msg: "Email Already Exists"
//         });
//       } else {
//         bcrypt.hash(req.body.password, 10, (err, hash) => {
//           if (err) {
//             return res.status(500).json({
//               error: err
//             });
//           } else {
//             const user = new User({
//               _id: new mongoose.Types.ObjectId(),
//               first_name: req.body.first_name,
//               last_name: req.body.last_name,
//               email: req.body.email,
//               password: hash
//             });
//             user
//               .save()
//               .then(result => {
//                 res.status(201).json({
//                   msg: "User Created"
//                 });
//               })
//               .catch(err => {
//                 console.log(err);
//                 res.status(500).json({
//                   error: err
//                 });
//               });
//           }
//         });
//       }
//     });
// });

// //Get User
// router.get("/:userId", (req, res, next) => {
//   const id = req.params.userId;
//   User.findById(id)
//     .select("first_name last_name _id")
//     .exec()
//     .then(data => {
//       console.log("From database", data);
//       if (data) {
//         res.status(200).json(data);
//       } else {
//         res.status(404).json({ message: "No Record Found" });
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ error: err });
//     });
// });

// //Update User
// //Note: updateOps is an array:When sending request to patch you should use and array like
// //[
// //   {
// //     "propName":"phone_number","value":"213377844"
// //   }
// // ]
// router.patch("/:userId", (req, res, next) => {
//   const userID = req.params.userId;
//   const updateOps = {};
//   for (const ops of req.body) {
//     updateOps[ops.propName] = ops.value;
//   }
//   User.update({ _ida: userID }, { $set: updateOps })
//     .exec()
//     .then(data => {
//       console.log(data);
//       res.status(200).json(data);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(200).json({
//         error: err
//       });
//     });
// });

// //No need to delete users not in requirement-Store for latter use
// router.delete("/:userId", (req, res, next) => {
//   const userID = req.params.userId;
//   User.find({ _id: userID }).then(user => {
//     if (!user) {
//       res.status(500).json({
//         msg: "User donot exist"
//       });
//     } else {
//       User.deleteOne({ _id: userID })
//         .exec()
//         .then(data => {
//           if (data.length >= 0) {
//             res.status(200).json(data);
//           }
//           res.status(200).json(data);
//         })
//         .catch(err => {
//           res.status(500).json({
//             error: err
//           });
//         });
//     }
//   });
// });
// router.post("/login", (req, res, next) => {
//   User.find({ email: req.body.email })
//     .exec()
//     .then(user => {
//       if (user.length < 1) {
//         return res.status(401).json({
//           msg: "No User found with that email"
//         });
//       }
//       bcrypt.compare(req.body.password, user[0].password, (err, result) => {
//         if (err) {
//           return res.status(401).json({
//             msg: "Auth Failed"
//           });
//         }
//         if (result) {
//           const payload = {
//             id: user[0]._id,
//             name: user[0].first_name
//           };
//           jwt.sign(
//             payload,
//             "secret",
//             {
//               expiresIn: 3600
//             },
//             (err, token) => {
//               if (err) {
//                 console.error("there is some error");
//               } else {
//                 res.json({
//                   token: `Bearer ${token}`
//                 });
//               }
//             }
//           );
//           // console.log("result from bcrypt", result);
//           // const token = jwt.sign(
//           //   { email: user[0].email, userId: user[0]._id },
//           //   process.env.JWT_KEY,
//           //   {
//           //     expiresIn: "1h"
//           //   }
//           // );
//           // return res.status(200).json({
//           //   msg: "Auth Succesful",
//           //   token: `Bearer ${token}`
//           // });
//         }
//       });
//     })
//     .catch(err => {
//       if (err) {
//         res.status(500).json({
//           msg: "Something happend",
//           error: err
//         });
//       }
//     });
// });

// router.get(
//   "/me",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     return res.json({
//       first_name: req.user.first_name,
//       email: req.user.email
//     });
//   }
// );
// module.exports = router;
