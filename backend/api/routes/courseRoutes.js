const express = require("express");
const router = express.Router();
const Course = require("../models/Course");
const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const Faculty = require("../models/Faculty");
var requireAuth = passport.authenticate("jwt", {
  session: false
});
const validateAddCourse = require("../routes/validation/addCourseValidation");

router.get("/", (req, res, next) => {
  Course.find()
    .exec()
    .then(data => {
      const response = {
        course: data.map(singleData => {
          return {
            id: singleData._id,
            courseID: singleData.courseID,
            courseName: singleData.courseName,
            courseDept: singleData.courseDept,
            courseDescription: singleData.courseDescription,
            courseRoom: singleData.courseRoom,
            waitListCap: singleData.waitListCap
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
router.get("/singlecourse", (req, res, next) => {
  console.log("params from axios", req.query.id);

  Course.findOne({ _id: req.query.id })
    .exec()
    .then(data => {
      const response = {
        id: data._id,
        courseID: data.courseID,
        courseName: data.courseName,
        courseDept: data.courseDept,
        courseDescription: data.courseDescription,
        courseRoom: data.courseRoom,
        waitListCap: data.waitListCap
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

router.post("/addCourse", (req, res, next) => {
  const { errors, isValid } = validateAddCourse(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  console.log("courseid", req.body.courseID);
  Faculty.findOne({ email: req.body.taughtBy })
    .exec()
    .then(facutlty => {
      if (facutlty) {
        console.log("faculty have the same email");
        Course.findOne({
          courseID: req.body.courseID
        })
          .exec()
          .then(course => {
            if (course) {
              return res.status(400).json({
                courseID: "Course already exists"
              });
            } else {
              const newCourse = new Course({
                _id: new mongoose.Types.ObjectId(),
                courseID: req.body.courseID,
                courseName: req.body.courseName,
                courseDept: req.body.courseDept,
                courseDescription: req.body.courseDescription,
                courseRoom: req.body.courseRoom,
                waitListCap: req.body.waitListCap,
                courseTeam: req.body.courseTeam,
                taughtBy: req.body.taughtBy
              });
              newCourse
                .save()
                .then(result => {
                  res.status(201).json({
                    msg: "Course Created Succesfully",
                    courseCreated: {
                      courseID: req.body.courseID,
                      courseName: req.body.courseName,
                      courseDept: req.body.courseDept,
                      courseDescription: req.body.courseDescription,
                      courseRoom: req.body.courseRoom,
                      waitListCap: req.body.waitListCap,
                      courseTeam: req.body.courseTeam,
                      taughtby: req.body.taughtby
                    }
                  });
                })
                .catch(err => {
                  console.log(err);
                  error: err;
                });
            }
          })
          .catch(err => {
            console.log(err);
            error: err;
          });
      }
    });
});

router.delete("/:id", requireAuth, (req, res, next) => {
  Course.find()
    .exec()
    .then(data => {
      const response = {
        count: data.length,
        course: data.map(singleData => {
          return {
            courseID: singleData.courseID,
            courseName: singleData.courseName,
            courseDept: singleData.courseDept,
            courseDescription: singleData.courseDescription,
            courseRoom: singleData.courseRoom,
            waitListCap: singleData.waitListCap,
            courseTeam: singleData.courseTeam
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
module.exports = router;
