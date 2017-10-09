const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models')
const jwtsecret = "a secret phrase!!";


module.exports = function (req, res, next) { 

  if (!req.headers.authorization) { 
      return res.status(401).end();
  }

  const token = req.headers.authorization.split(' ')[1]; 

  return jwt.verify(token, jwtsecret, function (err, decoded) { 
    if (err) { return res.status(401).end(); }
    
    console.log("decoded", decoded);
    const userId = decoded.sub;

    return User.findById(userId, function(userErr, user) { 
      if (!userErr || !user) { return res.status(401).end(); } 
      return next()
    });
  });
}