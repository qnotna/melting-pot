const express = require ('express');
const router = express.Router();
const User = require('../models/User');
const HttpError = require('../middleware/httpError.js');

router.route('users')
  .get((req, res, next) => {

    //this will return all the data, exposing only the id and name field to the client
    User.find({}, 'name')
    .then(data => res.json(data))
    .catch(err => {
      err = new HttpError(err.message, 400);
      next(err);
    })

  })

  .post((req, res, next) => {
    if(req.body.name && req.body.password){

      User.create(req.body)
      .then(data => res.json(data))
      .catch(err => {
        err = new HttpError(err.message, 400);
        next(err);
      })

    } else {
      err = new HttpError("The name or password field is empty", 400);
      next(err);
    }
  })

  .all((req, res, next) => {
    let err = new HttpError("Method Not Allowed", 405);
    next(err);
  });

router.route('/users/:id')
  .delete((req, res, next) => {

    User.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(err => {
      err = new HttpError(err.message, 400);
      next(err);
    })

  })

  .all((req, res, next) => {
    let err = new HttpError("Method Not Allowed", 405);
    next(err);
  });

module.exports = router;
