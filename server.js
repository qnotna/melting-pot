const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
// const routes = require('./routes/api');
const userAuth = require("./routes/auth-api/userAuth")
const users = require("./routes/users/users")
const errorHandler = require("./middleware/errorHandler")

const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose.connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);


// Routes
// app.use('/api', routes); // Not safe users API
app.use('/api/auth', userAuth);
app.use('/api/users', users);

// Error-Errorhandling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
