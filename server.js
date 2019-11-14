const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/api')

const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );


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

app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
