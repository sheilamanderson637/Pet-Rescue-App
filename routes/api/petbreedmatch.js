const express = require('express');
const router = require('express').Router(); 
const petbreedController = require('../../controllers/petbreedController');

router.route('/')
    .get(petbreedController.breedFactRecord);

// router.route('/all')
//     .get(petbreedController.findallBreedlookups);

module.exports = router;