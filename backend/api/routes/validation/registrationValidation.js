const Validator = require('validator');
const isEmpty = require('./checkEmpty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : '';

    if(!Validator.isLength(data.first_name, { min: 2, max: 30 })) {
        errors.first_name = 'First Name must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.first_name)) {
        errors.first_name = 'First Name is required';
    }

    if(!Validator.isLength(data.last_name, { min: 2, max: 30 })) {
        errors.last_name = 'Last Name must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.last_name)) {
        errors.last_name = 'Last name  is required';
    }
    
    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Password must have 6 chars';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}