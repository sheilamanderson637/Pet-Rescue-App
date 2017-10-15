const express = require('express');
const router = express.Router();
const userController = require('../../controllers/savedpetController');

router.get('/', function(req, res) { 
    console.log(req);
    savedpetController.findAll(req.body);

});

module.exports = router