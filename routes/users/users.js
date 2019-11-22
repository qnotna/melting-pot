const express = require("express");
const router = express.Router();

const User = require("../../models/User")

// @route DELETE api/users/:id
router.delete('/:id', (req, res, next) => {
  User.findOneAndDelete({'_id': req.params.id})
  .then(data => {
    if (!data) res.status(404).json({"_id": "User not found"})
    else res.json(data);
  })
  .catch(next)
})

// @route GET api/users
router.get('', (req, res, next) => {
  User.find({}, 'name')
  .then(data => res.json(data))
  .catch(next)
});

// @route GET api/users/:id
router.get('/:id', (req, res, next) => {
  User.findById(req.params.id, '-password').then( user => {
    if (!user) res.status(404).json({"_id": "User not found"})
    else res.json(user);
  })
});

// @route PATCH api/users/:id
router.patch('/:id', (req, res, next) => {
  
})


module.exports = router;
