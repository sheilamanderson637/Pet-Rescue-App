// const usersController = require('../../models'); 
const express = require('express');
const router = express.Router();
const petbreedController = require('../../controllers/petbreedController');

router.route('/')
    .get(petbreedController.breedInfoRecord);

router.route('/all')
    .get(petbreedController.findallBreedInfo);

module.exports = router;