const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser');
const appRoutes = require('./routes');
const mongoose = require('mongoose');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

// Send every request to the React app
// Define any API routes before this runs
// app.use(appRoutes);

mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/petrescuedb",
  {
    useMongoClient: true
  }
);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
