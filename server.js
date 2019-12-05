const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
// const routes = require('./routes/api');
const usersAuthAPI = require("./routes/auth-api/users")
const usersAPI = require("./routes/users/users")


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
const db = process.env.DB_PORT ? `mongodb://localhost:${process.env.DB_PORT}/meltingdb` : require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose.connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
  )
  .then((res) => console.log("MongoDB successfully connected to", res.connection.host))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);


// Routes
// app.use('/api', routes); // Not safe users API
app.use('/api/auth', usersAuthAPI)
app.use('/api/users', usersAPI)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
