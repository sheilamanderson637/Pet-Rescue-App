const path = require('path');
const express = require('express');
const router = require('express').Router(); 
const api = require('./api');
const authCheckMiddleware = require('../middleware/auth-check');

router.use('/api', api);

router.use(function(req, res) {
    res.sendFile(
        path.join(__dirname, "../client/build/index.html")
    );
});

module.exports = router;