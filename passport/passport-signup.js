const mongoose =require('mongoose');
const User = require('../models/db/User');
const PassportLocalStrategy = require('passport-local').Strategy;

module.exports = new PassportLocalStrategy({ 
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
    session: false
  },
  function(req, email, password, done) {
    console.log('In Passport Login Local');
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
      console.log('in new user save');
      console.log(newUser);  
      if (err) { return done(err); }
    
      return done(null, newUser);
    });
});