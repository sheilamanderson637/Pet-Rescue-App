const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.get('/', function(req, res) { 
    console.log(req)
    userController.findAll(req.body, );
    res.json(res);
});

module.exports = router