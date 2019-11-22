const validator = require('validator')
const isEmpty = require('is-empty')

const requiredFields = ['name', 'password']

module.exports = function validateLoginInput(data) {
  let errors = {};
  for (let field of requiredFields) {
    // Convert empty fields to an empty string so we can use validator functions
    data[field] = !isEmpty(data[field]) ? data[field] : "";
    // Check if a reqired field is missing
    if ( validator.isEmpty(data[field]) ) {
      errors[field] = `\'${field}\' field is required!`
    }
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
