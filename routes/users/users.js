const express = require("express");
const router = express.Router();

const User = require("../../models/User")
const HttpError = require('../../middleware/httpError.js');

router.route('/:id')
  // @route GET api/users/:id
  .get((req, res, next) => {
    User.findById(req.params.id, '-password').then( user => {
      if (!user){
        let err = new HttpError("User Not Found", 404);
        next(err);
      }
      else res.status(200).json(user);
    })
    .catch(err => {
      err = new HttpError(err.message, 400);
      next(err);
    })
  })

  // @route DELETE api/users/:id
  .delete((req, res, next) => {
    User.findOneAndDelete({'_id': req.params.id})
    .then(data => {
      if (!data) {
        let err = new HttpError("User Not Found", 404);
        next(err);
      }
      else res.status(204).end();
    })
    .catch(err => {
      err = new HttpError(err.message, 400);
      next(err);
    })
  })

  // @route PATCH api/users/:id
  .patch((req, res, next) => {

  })

  .all((req, res, next) => {
    let err = new HttpError("Method Not Allowed", 405);
    next(err);
  });

// @route GET api/users
router.route('/')
  .get((req, res, next) => {
    User.find({}, 'name')
    .then(data => res.status(200).json(data))
    .catch(err => {
      err = new HttpError(err.message, 400);
      next(err);
    })
  })

  .post((req, res, next) => {
    if(req.body.name && req.body.password){

      User.create(req.body)
      .then(data => res.status(200).json(data))
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


module.exports = router;
