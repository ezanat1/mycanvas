const express = require("express");
const router = express.Router();
const Course = require("../models/Course");
const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const Faculty = require("../models/Faculty");
const Registration = require("../models/Registration");
const User = require("../models/User");
const Submision = require("../models/Submission");
const Assignment = require("../models/Assignments");
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

router.get("/studentsInThatClass", (req, res, next) => {
  console.log("params from react", req.query.id);

  Registration.find({
    courseID: req.query.id
  }).exec(function(err, results) {
    var ids = results.map(function(el) {
      return el.studentID;
    });
    User.find({ _id: { $in: ids } }).exec(function(err, results) {
      const response = {
        count: results.length,
        users: results.map(singleClass => {
          return {
            first_name: singleClass.first_name,
            last_name: singleClass.last_name,
            email: singleClass.email
          };
        })
      };
      res.status(200).json(response);
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

router.delete("/:id", (req, res, next) => {
  Course.find({
    _id: req.params.id
  }).then(course => {
    if (!course) {
      res.status(500).json({
        msg: "Course Donot Exist"
      });
    } else {
      Course.deleteOne({
        _id: req.params.id
      })
        .exec()
        .then(data => {
          if (data.length >= 0) {
            res.status(200).json(data);
          }
          res.status(200).json(data);
        })
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });
    }
  });
});
router.post("/createAssignment", (req, res) => {
  const assignment = new Assignment({
    _id: new mongoose.Types.ObjectId(),
    courseID: req.body.courseID,
    name: req.body.assignmentName,
    description: req.body.description
  });
  console.log(assignment);

  assignment
    .save()
    .then(result => {
      res.status(201).json({
        msg: "Assignment Created"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
router.get("/getAssignments", (req, res) => {
  console.log(req.query.courseID);
  Assignment.find({ courseID: req.query.id }).then(data => {
    res.status(200).json(data);
  });
});
router.delete("/deleteAssignemnt", (req, res) => {
  Assignment.find({ courseID: req.query.id }).then(data => {
    res.status(200).json(data);
  });
});
router.post("/submissions", (req, res) => {
  console.log(req.body);
  const submission = new Submision({
    _id: new mongoose.Types.ObjectId(),
    studentID: req.body.studentID,
    courseID: req.body.courseID,
    assignemntID: req.body.assignemntID
  });

  submission
    .save()
    .then(result => {
      res.status(201).json({
        msg: "Submitted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
router.get("/submissions", (req, res) => {
  Submision.find({
    courseID: req.query.id
  }).exec(function(err, results) {
    var ids = results.map(function(el) {
      return el.studentID;
    });
    User.find({ _id: { $in: ids } }).exec(function(err, results) {
      const response = {
        count: results.length,
        users: results.map(singleClass => {
          return {
            first_name: singleClass.first_name,
            last_name: singleClass.last_name
          };
        })
      };
      res.status(200).json(response);
    });
  });
});
module.exports = router;
