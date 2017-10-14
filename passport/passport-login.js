
const mongoose = require('mongoose');
const db = require('../models');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(function(email, password, done) {
    console.log('in passport-local use for login');
    db.User.findOne({ email: email }, function (err, user) {
        
        if (err) { return done(err); }
        
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        
        if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        
        return done(null, user);
    });
}));

