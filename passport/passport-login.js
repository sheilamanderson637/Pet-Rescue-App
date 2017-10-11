const jwt = require('jsonwebtoken');
const mongoose = require('mongoose'); 
const User = require('../models/db/User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; 


// Reference w/ options: https://github.com/jaredhanson/passport-local
module.exports = new LocalStrategy({
        usernameField: 'email', 
        passwordField: 'password', 
        session: false,
        passReqToCallback: true
    },
    function (req, email, password, done) { 
    console.log('In Passport Login Local');
    console.log(req);
    console.log(email);
    console.log(password);
    const userData = { 
        email: email.trim(),
        password: password.trim()
    } 

    return User.findOne({email: userdata.email }, function(err, user) { 
        if (err) { return done(err); } 

        if (!user) { 
            const error = new Error('Incorrect email or password'); 
            error.name = 'IncorrectCredentialsError'; 
            return done(error);
        }

        return user.comparePassword(userData.password, function(passwordErr, isMatch) { 
            if (err) { return done(err); }
            
            if (!isMatch) { 
                const error = new Error('Incorrect email or passowrd');
                error.name = 'IncorrectCredentialsError'
                return done(error);
            }
        
            const payload = { 
                sub: user._id
            };
            const jwtsecret = "a secret phrase!!";
            const token = jwt.sign(payload, jwtsecret); 
            const data = { 
                firstname: user.firstname,
                lastname: 
            }
            console.log(data);
            return done(null, token, data);
        });
    });
}); 