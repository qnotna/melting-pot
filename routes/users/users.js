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
    /*
    var newUser = new User({
      name: 'Jack',
      email: 'Jack@gmail.com',
      password: 'password',
      settings: {
        darkMode: true,
        language: "de"
      }
    }); 
                
    newUser.save()

    console.log('User Jack wurde gespeichert)
    */
    /*

    var filter = {_id: req.params.id};
    var update = {}

    // Überprüfen welche Werte geändert wurden
    if(req.body.params.name !== undefined) {
      update.name = req.body.name;
    }
    if(req.body.params.email !== undefined) {
      update.email = req.body.email;
    }
    if(req.body.params.password !== undefined) {
      // altes psswort muss überprüft werden dann hashen und dann speichern
      console.log('in server')
      console.log(req.body.params.password);
    }
    */
    // return user object with new values nur name und email
    res.json({
      name: 'new name',
      email: 'new email'
    })

    /*
    // neue Wertes des Users speichern und neue (name und email) zurückgeben und im Respones senden
    User.findOneAndUpdate(filter, update, {new: true, safe: true}).select('name email -_id')
    .then(() => {
      res.json({
      idUpdated: true
      })
    })
    .catch(err => {
      err = new HttpError(err.message, 400);
      next(err);
    })
    */
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
