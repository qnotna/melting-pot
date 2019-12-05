const express = require('express');
const Article = require('../../models/news-model.js');
const HttpError = require('../../middleware/httpError.js');

const articleRouter = express.Router();

// @route GET api/articles
articleRouter.route('/')
  .get((req, res, next) => {
    Article.find({})
  })

  .all((req, res, next) => {
    let err = new HttpError("Method Not Allowed", 405);
    next(err);
  });

// @route GET api/articles/:id
articleRouter.route('/:id')
  .get((req, res, next) => {
    Article.findById(req.params.id)
      .then((article)) => {
        if(article){
        }
        else {
          let err = new HttpError("Article Not Found", 404);
          next(err);
        }
      }
      .catch(err => {
        err = new HttpError(err.message, 400);
        next(err);
      })
  })

  .all((req, res, next) => {
    let err = new HttpError("Method Not Allowed", 405);
    next(err);
  });

module.exports = articleRouter;
