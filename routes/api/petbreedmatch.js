const express = require('express');
const router = require('express').Router(); 


router.get('/', function(req, res) { 
    console.log('in pet breedmatch api route');
    console.log(req.body);
    res.statusMessage('time to get your matched breed');
});

module.exports = router;