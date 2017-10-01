const usersController = require('../../models'); 
const express = require('express');
const router = express.Router();

router.route('/')
    .get(usersController.findAll); 

module.exports = router;