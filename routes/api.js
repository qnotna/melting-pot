const express = require ('express');
const router = express.Router();
const User = require('../models/User');

router.get('/users', (req, res, next) => {

  //this will return all the data, exposing only the id and name field to the client
  User.find({}, 'name')
  .then(data => res.json(data))
  .catch(next)

});

router.post('/users', (req, res, next) => {
  if(req.body.name && req.body.password){

    User.create(req.body)
    .then(data => res.json(data))
    .catch(next)

  } else {
    res.json({
      error: "The name or password field is empty"
    })
  }
});

router.delete('/users/:id', (req, res, next) => {

  User.findOneAndDelete({"_id": req.params.id})
  .then(data => res.json(data))
  .catch(next)

})

module.exports = router;
