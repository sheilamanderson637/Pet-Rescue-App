const mongoose = require('mongoose');
const User = require('../models/db/User');
const PassportLocalStrategy = require('passport-local').Strategy;

// Reference w/ options: https://github.com/jaredhanson/passport-local
/**
 * Return the Passport Local Strategy object.
 */

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => { 

    function (req, email, password, done) { 
    console.log('In Passport Login Local');
    console.log(req);
    console.log(email);
    console.log(password);
    const userData = { 
        email: email.trim(),
        password: password.trim()
    } 

    console.log('in passport local sign up strategy');
  const userData = {
    email: email.trim(),
    password: password.trim(),
    firstName: req.body.name.trim(),
    lastName: req.body.name.trim()
  };

  const newUser = new User(userData);
  newUser.save((err) => {
    if (err) { return done(err); }
    return done(null);
  });
});
