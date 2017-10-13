
const User = require('mongoose').model('User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(function(username, password, done) {
    console.log('in passport-local use for login');
    User.findOne({ username: username }, function (err, user) {
        
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

