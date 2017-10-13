const path = require('path');
const express = require('express');
const router = require('express').Router(); 


router.use(function(req, res) {
    res.sendFile(
        path.join(__dirname, "../client/build/index.html")
    );
});

module.exports = router;