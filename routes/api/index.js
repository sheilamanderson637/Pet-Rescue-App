const express = require('express');
const router = express.Router(); 
const petBreedMatchRoutes = require('./petbreedmatch'); 
const petBreedinfoRoutes = require('./petbreedinfo');
const userRoutes = require('./user');
const authRoutes = require('./auth');
const petfinderRoutes = require('./petfinder');

router.use('/petbreedmatch', petBreedMatchRoutes); 
router.use('/petbreedinfo', petBreedinfoRoutes);
router.use('/signup', authRoutes);
router.use('/newuser', userRoutes);
router.use('/petfinder', petfinderRoutes);

module.exports = router;