const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route POST api/auth/register
router.post("/register", (req, res) => {
  // Validate form
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) return res.status(400).json(errors);

  // Check if the user with sent username already exists
  User.findOne({ name: req.body.name })
  .then( user => {
    if (user) return res.status(400).json( { name: `User \'${req.body.name}\' already exists`} )
    else {
      const newUser = new User ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // Hash password before database storing
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
          .then( user => res.json(user))
          .catch( err => console.log(err) );
        })
      });
    }
  });
});

// @route POST api/auth/login
router.post('/login', (req, res) => {
  // Validate form
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) return res.status(400).json(errors);

  const { name, password } = req.body;

  // Find the user by name
  User.findOne({ name }).then( user => {
    if ( !user ) res.status(404).json({ name: `User \'${req.body.name}\' not found` })
    else {
      // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if ( !isMatch ) res.status(401).json({ password: 'Password incorrect' })
        else {
          // Password matched! Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
          console.log(req.user)

          // Sign token
          jwt.sign( payload, keys.secretOrKey, { expiresIn: 31556926 }, (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          });
        }
      })
    }
  })
})

module.exports = router;
