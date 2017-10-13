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

    // checking what is getting passed
    console.log('In Passport Login Local');
    console.log(req.body);
    console.log(email);
    console.log(password);

    const userData = {
        email: email.trim(),
        password: password.trim(),
        firstName: req.body.firstName.trim(),
        lastName: req.body.lastName.trim(),
        address: req.body.address.trim(),
        addressTwo: req.body.addressTwo.trim(),
        city: req.body.city.trim(),
        state: req.body.state.trim(),
        zip: req.body.state.trim(),
        phone: req.body.phone.trim()
    };
  
    const newUser = new User(userData);
    newUser.save((err) => {
      if (err) { return done(err); }
  
      return done(null, newUser);
    });
  });