const express = require("express");
const router = express.Router();

const User = require("../../models/User")
const HttpError = require('../../middleware/httpError.js');

const ObjectId = require('mongodb').ObjectID;

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
    //Cerate example user
    var newUser = new User({
      name: 'Jack',
      email: 'Jack@gmail.com',
      password: 'password',
      settings: {
        language: "de",
        country: "de"
      }
    }); 
                
    newUser.save()
    */
  
    //var filter = {_id: req.params.id};

    // id von Jack aus der DB
    var filter = {_id: '5e1888098d607a39b8707dfb'}
    var update = {}

    // Überprüfen welche Werte geändert wurden
    if(req.body.name !== undefined) {
      update.name = req.body.name;
    }
    if(req.body.email !== undefined) {
      update.email = req.body.email;
    }
    
    if(req.body.password !== undefined) {
      // altes psswort muss überprüft werden dann hashen und dann speichern
      console.log(req.body.password);

      update.password = req.body.password.oldPassword;
    }
    
    if(req.body.settings !== undefined) {
      if(req.body.settings.darkMode !== undefined){
        // {'settings.darkMode': true} damit hat es funktioniert
        update = {'settings.darkMode': req.body.settings.darkMode}
      }
      if(req.body.settings.language !== undefined){
        update = {'settings.language': req.body.settings.language}
      }
      if(req.body.settings.country !== undefined){
        update = {'settings.country': req.body.settings.country}
      }
      if(req.body.settings.readArticleWithoutPictures !== undefined){
        update = {'settings.readArticleWithoutPictures': req.body.settings.readArticleWithoutPictures}
      }
    }

    // -_id: _id Attribut soll bei der rückgabe nicht angegeben werden
    var selectString = '-_id '

    for(var i = 0; i < Object.keys(update).length; i++){
      selectString = selectString + Object.keys(update)[i] + ' ';
      if(Object.keys(update)[i] === 'password') {
        selectString = selectString + ' -password -settings -email -name -__v';
        }
    }
    
    // neue Wertes des Users speichern und neue (name und email) zurückgeben und im Respones senden
    User.findOneAndUpdate(filter, update, {new: true, safe: true}).select(selectString)
    .then((updatedUserData) => {
      res.json({
        updatedUserData
      })
    })
    .catch(err => {
      err = new HttpError(err.message, 400);
      next(err);
    })
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
