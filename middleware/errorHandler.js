module.exports = function errorHandler(err, req, res, next){
  let errorInformation = {
      error: {
          statuscode: err.status,
          message: err.message,
          path: req.path,
          error: err.stack.toString()
      }
  };
  res.status(err.status || 500);
  res.json(errorInformation);
};
