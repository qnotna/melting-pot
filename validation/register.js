const validator = require('validator')
const isEmpty = require('is-empty')

const requiredFields = ['name', 'email', 'password', 'password2']

module.exports = function validateRegisterInput(data) {
  console.log(data)
  let errors = {};

  for (let field of requiredFields) {
    // Convert empty fields to an empty string so we can use validator functions
    data[field] = !isEmpty(data[field]) ? data[field] : "";
    // Check if a reqired field is missing
    if ( validator.isEmpty(data[field]) ) {
      errors[field] = `\'${field}\' field is required!`
    }
  }

  // // Check if email was sent and has the right format
  if ( !errors.email && !validator.isEmail(data.email) ) {
    errors.email = "\'Email\' is invalid";
  }

  // Password checks
  if ( !errors.password && !validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = 'Password must be at least 6 characters long';
  }
  if ( !errors.password2 && !validator.equals(data.password, data.password2) ) {
    errors.password2 = 'Passwords not equal!'
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };

}
