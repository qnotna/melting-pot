const router = require ('express').Router();

const UserPreferences = require('../../models/UserPreferences')
const HttpError = require('../../middleware/httpError.js');

// Load preferences validation
const validateUserPreferences = require("../../validation/prefs");


// @route GET api/userpreferences/:id
router.get('/:id', (req, res, next) => {
    UserPreferences.findById(req.params.id)
    .then(
        user_preferences => {
            res.status(200).json(user_preferences)
        }
    )
    .catch(
        err => {
            res.status(400).json(err)
        }
    )
})


router.post('/', (req, res, next) => {
    // check if user with the id req.body.id exists
    UserPreferences.create(req.body)
    .then(data => res.status(200).json(data))
    .catch(
        err => {
            res.status(400).json(err)
        }
    )
})

router.post('/:id', (req, res, next) => {
    // check if user with the id req.body.id exists
    const { errors, isValid } = validateUserPreferences(req.body);
    if (!isValid) return res.status(400).json(errors);

    UserPreferences.findById(req.params.id).then(
        user_preferences => {
            user_preferences.updateOne(req.body)
            .then(
                data => res.status(200).json(data)
            )
            .catch(
                err => {
                    res.status(400).json(err)
                }
            )
        }
    )
    .catch(
        err => {
            res.status(400).json(err)
        }
    )
})

module.exports = router