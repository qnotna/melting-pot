const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
// const routes = require('./routes/api');
const userAuth = require("./routes/auth-api/userAuth");
const users = require("./routes/users/users");
const errorHandler = require("./middleware/errorHandler");
const responseHeader = require("./middleware/responseHeader");
const newsAPI = require("./routes/news-api/news-api")


const app = express();
const port = process.env.PORT || 5000;

app.use(responseHeader);

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
app.use('/api/auth', userAuth);
app.use('/api/users', users);
app.use("/newsapi", newsAPI)

// Error-Errorhandling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
