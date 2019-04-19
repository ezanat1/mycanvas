const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = require("./models/User");
const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";

module.exports = passport => {
  passport.use(
    new JWTStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.error(err));
    })
  );
};

// 'use strict';
// var JwtStrategy = require('passport-jwt').Strategy;
// var ExtractJwt = require('passport-jwt').ExtractJwt;
// //var db = require('../app/db');
// var Model = require('./models/User')
// //var config = require('./settings');
// const secret = "secret";

// Setup work and export for the JWT passport strategy
// module.exports = function (passport) {
//     var opts = {
//         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//         secretOrKey: secret
//     };
//     passport.use(new JwtStrategy(opts, function (jwt_payload, callback) {

//         Model.findOne({
//             'email': jwt_payload.email
//         }, (err, res) => {

//             if (res) {
//                 var user = res;
//                 delete user.password;
//                 callback(null, user);
//             } else {
//                 callback(err, false);
//             }
//         });
//     }));
// };
