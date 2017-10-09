const express = require('express');
const router = require('express').Router(); 
const breedMatchRoutes = ('./petbreedmatch'); 
const petbreedRoutes = require('./petbreed');
const userRoutes = require('./user');

// router.use('/breedmatch', breedMatchRoutes); 
// router.use('/petbreed', petbreedRoutes);
// router.use('/user', userRoutes);

module.exports = router;