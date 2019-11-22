const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false,
    default: ""
  }
});

// create model for User
const User = mongoose.model("users", UserSchema);

module.exports = User;
