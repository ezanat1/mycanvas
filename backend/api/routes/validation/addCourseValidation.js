const Validator = require('validator');
const isEmpty = require('./checkEmpty');

module.exports = function validateAddCourse(data) {
    let errors = {};
    data.courseID = !isEmpty(data.courseID) ? data.courseID : '';
    data.courseName = !isEmpty(data.courseName) ? data.courseName : '';
    data.courseDept = !isEmpty(data.courseDept) ? data.courseDept : '';
    data.courseRoom = !isEmpty(data.courseDept) ? data.courseRoom : '';
    data.courseDescription = !isEmpty(data.courseDescription) ? data.courseDescription : '';
    data.waitListCap = !isEmpty(data.waitListCap) ? data.waitListCap : '';
    data.courseTeam = !isEmpty(data.courseTeam) ? data.courseTeam : '';
    data.taughtBy = !isEmpty(data.taughtBy) ? data.taughtBy : '';

    if(!Validator.isLength(data.courseID, { min: 3, max: 6 })) {
        errors.courseID = 'Course ID must be between 2 to 6 chars';
    }
    
    if(Validator.isEmpty(data.courseID)) {
        errors.courseID = 'Course ID required';
    }

    if(!Validator.isLength(data.courseName, { min: 2, max: 30 })) {
        errors.courseName = 'Course Name Should be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.courseName)) {
        errors.courseName = 'Course Name is required';
    }

    if(!Validator.isLength(data.courseDept, { min: 2, max: 30 })) {
        errors.courseDept = 'Course Department Should be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.courseDept)) {
        errors.courseDept = 'Course Department is required';
    }
  
    if(!Validator.isLength(data.courseRoom, { min: 2, max: 15 })) {
        errors.courseRoom = 'Course Room Should be between 2 to 15 chars';
    }
    
    if(Validator.isEmpty(data.courseRoom)) {
        errors.courseRoom = 'Course Room is required';
    }

    if(!Validator.isLength(data.courseTeam, { min: 2, max: 15 })) {
        errors.courseTeam = 'Course Team Should be between 2 to 15 chars';
    }
    
    if(Validator.isEmpty(data.courseTeam)) {
        errors.courseTeam = 'Course Team is required';
    }

    if(!Validator.isLength(data.waitListCap, { min: 2, max: 15 })) {
        errors.waitListCap = 'Wait List Capacity Should be between 2 to 15 chars';
    }
    
    if(Validator.isEmpty(data.waitListCap)) {
        errors.waitListCap = 'Wait List Capacity is required';
    }

    if(Validator.isEmpty(data.courseDescription)) {
        errors.courseDescription = 'Course Description is required';
    }
    
    if(!Validator.isEmail(data.taughtBy)) {
        errors.taughtBy = 'Your Email is invalid';
    }

    if(Validator.isEmpty(data.taughtBy)) {
        errors.taughtBy = 'Your Email is required';
    }

    // if(!Validator.isLength(data.password, {min: 6, max: 30})) {
    //     errors.password = 'Password must have 6 chars';
    // }

    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}