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
    required: false
  }
});

// create model for User
const User = mongoose.model("user", UserSchema);

module.exports = User;
