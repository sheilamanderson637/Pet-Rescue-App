const express = require('express');
const router = express.Router(); 
const petBreedMatchRoutes = require('./petbreedmatch'); 
const petBreedinfoRoutes = require('./petbreedinfo');
const userRoutes = require('./user');
const authRoutes = require('./auth');

router.use('/petbreedmatch', petBreedMatchRoutes); 
router.use('/petbreedinfo', petBreedinfoRoutes);
router.use('/signup', authRoutes);
router.use('/newuser', userRoutes);

module.exports = router;