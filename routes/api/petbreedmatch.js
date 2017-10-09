const express = require('express');
const router = require('express').Router(); 


router.get('/petbreedmatch', function(req, res) { 
    console.log(req.body);
});

module.exports = router;