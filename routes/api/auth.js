const express = require('express');
const router = express.Router(); 
const validator = require('validator');
const passport = require('passport');
// const passportLocal = require('../../passport/passport-signup');

router.post('/', (req, res, next) => {

    console.log('in Auth Signup Router')
    console.log(req.body);
    const validationResult = validateSignupForm(req.body);
    console.log('validation result: ' + validationResult);
    if (!validationResult.success) {
        return res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
        });
    }

    return passport.authenticate('local-signup', (err) => {
        console.log(err);
        if (err) {
        if (err.name === 'MongoError' && err.code === 11000) {
            // the 11000 Mongo code is for a duplication email error
            // the 409 HTTP status code is for conflict error
            return res.status(409).json({
                success: false,
                message: 'Check the form for errors.',
                errors: {
                    email: 'This email is already taken.'
                }
            });
        }

        return res.status(400).json({
            success: false,
            message: 'Could not process the form.'
        });
        }

        return res.status(200).json({
        success: true,
        message: 'You have successfully signed up! Now you should be able to log in.'
        });
    })(req, res, next);
});

function validateSignupForm(payload) {
    console.log('in payload');
    console.log(payload);
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
        isFormValid = false;
        errors.email = 'Please provide a correct email address.';
    }

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
        isFormValid = false;
        errors.password = 'Password must have at least 8 characters.';
    }

    // if (!payload || typeof payload.firstName !== 'string' || payload.firstName.trim().length === 0) {
    //     isFormValid = false;
    //     errors.name = 'Please provide your name.';
    // }

    if (!isFormValid) {
        message = 'Check the form for errors.';
    }
    console.log('===== valid form results ======');
    console.log(errors, isFormValid, message);
    return {
        success: isFormValid,
        message,
        errors
    };
}

module.exports = router; 