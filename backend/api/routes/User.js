const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../routes/validation/registrationValidation');
const validateLoginInput = require('../routes/validation/loginValidation');
const mongoose = require("mongoose");
const User = require('../models/User');
const Registration = require('../models/Registration')
const Faculty = require('../models/Faculty')
var requireAuth = passport.authenticate('jwt', {
  session: false
});
var kafka = require('../../kafka/client');


// router.post('/login',requireAuth, (req, res) => {
//   kafka.make_request('login', req.body, function (err, result) {
//     if (err) {
//       res.writeHead(400, {
//         'Content-type': 'text/plain'
//       });
//       res.end('Error in login!');
//     } else {
//       const {
//         errors,
//         isValid
//       } = validateLoginInput(req.body);
//       if (!isValid) {
//         return res.status(400).json(errors);
//       }
//       if(result){

//       }






//     }








//   })

//   const email = req.body.email;
//   const password = req.body.password;
//   User.findOne({
//       email
//     })
//     .then(user => {
//       if (!user) {
//         errors.email = 'User not found'
//         return res.status(404).json(errors);
//       }
//       bcrypt.compare(password, user.password)
//         .then(isMatch => {
//           if (isMatch) {
//             const payload = {
//               id: user.id,
//               name: user.name

//             }
//             jwt.sign(payload, 'secret', {
//               expiresIn: 3600
//             }, (err, token) => {
//               if (err) console.error('There is some error in token', err);
//               else {
//                 res.json({
//                   success: true,
//                   token: `Bearer ${token}`
//                 });
//               }
//             });
//           } else {
//             errors.password = 'Incorrect Password';
//             return res.status(400).json(errors);
//           }
//         });
//     });
// });



















router.get("/", (req, res, next) => {
  User.find()
    .select("first_name last_name email _id")
    .exec()
    .then(users => {
      const response = {
        count: users.length,
        userInfo: users.map(user => {
          return {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            _id: user._id,
            request: {
              type: "GET",
              url: "http://localhost:5000/users/" + user._id
            }
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
router.post('/register', function (req, res) {
  const {
    errors,
    isValid
  } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    email: req.body.email
  }).exec().then(user => {
    if (user) {
      return res.status(400).json({
        email: 'Email already exists'
      });
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err
          });
        } else {
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hash
          });
          user
            .save()
            .then(result => {
              res.status(201).json({
                msg: "User Created"
              });
            })
            .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
              });
            });
        }

      })

    }
  });
});
router.post('/registerFaculty', function (req, res) {
  const {
    errors,
    isValid
  } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  Faculty.findOne({
    email: req.body.email
  }).exec().then(user => {
    if (user) {
      return res.status(400).json({
        email: 'Email already exists'
      });
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err
          });
        } else {
          const user = new Faculty({
            _id: new mongoose.Types.ObjectId(),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hash
          });
          user
            .save()
            .then(result => {
              res.status(201).json({
                msg: "User Created"
              });
            })
            .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
              });
            });
        }

      })

    }
  });
});

router.post('/loginFaculty', (req, res) => {
  const {
    errors,
    isValid
  } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  Faculty.findOne({
      email
    })
    .then(user => {
      if (!user) {
        errors.email = 'User not found'
        return res.status(404).json(errors);
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              name: user.name

            }
            jwt.sign(payload, 'secret', {
              expiresIn: 3600
            }, (err, token) => {
              if (err) console.error('There is some error in token', err);
              else {
                res.json({
                  success: true,
                  token: `Bearer ${token}`
                });
              }
            });
          } else {
            errors.password = 'Incorrect Password';
            return res.status(400).json(errors);
          }
        });
    });
});

router.post('/login', (req, res) => {
  const {
    errors,
    isValid
  } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({
      email
    })
    .then(user => {
      if (!user) {
        errors.email = 'User not found'
        return res.status(404).json(errors);
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              name: user.name

            }
            jwt.sign(payload, 'secret', {
              expiresIn: 3600
            }, (err, token) => {
              if (err) console.error('There is some error in token', err);
              else {
                res.json({
                  success: true,
                  token: `Bearer ${token}`
                });
              }
            });
          } else {
            errors.password = 'Incorrect Password';
            return res.status(400).json(errors);
          }
        });
    });
});
router.post('/registerClass', (req, res) => {
  const courseID = req.body.courseID
  const studentID = req.body.studentID
  console.log('courseid', courseID)
  console.log('student', studentID)
  const registration = new Registration({
    _id: new mongoose.Types.ObjectId(),
    courseID: req.body.courseID,
    studentID: req.body.studentID

  });
  registration
    .save()
    .then(result => {
      res.status(201).json({
        msg: "Succesfully Register to courseID"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

})
router.get('/me', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  return res.json({
    id: req.user.id,
    first_name: req.user.first_name,
    email: req.user.email
  });
});

module.exports = router;