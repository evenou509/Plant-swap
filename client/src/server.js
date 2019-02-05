// require("dotenv").config();
var express = require('express');
var session = require('express-session');
// var passport = require('./config/passport');
const routes = require('./../../controllers/userController');
const apiRoutes = require("../src/pages/api-routes/plant-api");


// require("dot-env");
var db = require('./../../models');

var app = express();
var PORT = process.env.PORT || 3000;

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "insideredge", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}

// Routes
app.use(routes);
app.use("/api", apiRoutes);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "development") {
  syncOptions.force = true;
}


// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;